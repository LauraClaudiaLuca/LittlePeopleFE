import React from 'react'
import { connect } from 'react-redux'
import VolunteerListStatic from "../components/VolunteerListStatic"
import { Container, Row, Col, Button, Form, FormControl, InputGroup, ButtonToolbar } from 'react-bootstrap'
import { FaUserPlus, FaSearch } from 'react-icons/fa'
import AddVolunteerModal from "../components/AddVolunteerModal"
import ReactDOM from 'react-dom'
import { getVolunteersActionCreator, getHospitalsActionCreator, addActionCreator } from '../actions/adminActionCreator'



class AdminDashboard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedHospitalId: -1,
            email: "",
            invalidEmail: undefined,
            invalidHospital: undefined,
        }
    }
    componentDidMount() {
        this.setState({
            selectedHospitalId: -1,
            invalidEmail: undefined,
            invalidHospital: undefined,
        })
        this.props.getHospitals();
        this.props.getVolunteers();
    }

    save = () => {
        this.props.addVolunteer(this.state.email, this.state.selectedHospitalId);
    }
    delete = (id) => {

    }

    onChange = (event) => {
        const { value, name } = event.target;

        this.setState({
            [name]: value
        },
            () => {
                this.validate();
            }
        )
    }

    validate = () => {
        this.setState({
            invalidHospital: this.state.selectedHospitalId === -1,
            invalidEmail: this.state.email.length === 0,
        })
    }
    selectedOption = (event) => {
        var target = event.target;
        var index = target.selectedIndex;
        this.setState({
            selectedHospitalId: parseInt(target[index].id),
        },
            () => {
                this.validate();
            }
        )
    }
    undo = () => {
        this.setState({
            selectedHospitalId: -1,
            email: "",
            invalidEmail: undefined,
            invalidHospital: undefined,
        }
        )
    }
    render() {
        console.log(this.state.volunteers)
        return (
            <Container fluid style={{ backgroundColor: "#f8f9fa" }}>
                <Row>
                    <Col xs={2}>
                    </Col>
                    <Col>
                        <Row style={{
                            marginTop: "1vh",
                        }}>
                            <Col xs={1} xl={2}>
                                <AddVolunteerModal
                                    save={this.save}
                                    hospitals={this.props.adminReducer.hospitals}
                                    onChange={this.onChange}
                                    selectedOption={this.selectedOption}
                                    defaultValSelected={this.state.selectedHospitalId == -1}
                                    undo={this.undo}
                                    invalidEmail={this.state.invalidEmail}
                                    invalidHospital={this.state.invalidHospital}
                                />
                            </Col>

                            <Col xs={11} xl={10}>
                                <InputGroup className="mb-3">
                                    <FormControl
                                        placeholder="Search after first name ..."
                                        aria-describedby="basic-addon2"
                                    />
                                    <InputGroup.Append>
                                        <InputGroup.Text
                                            style={{
                                                backgroundColor: "rgb(219, 61, 68)",
                                                cursor: "pointer",
                                                color: "white",
                                            }}>
                                            <FaSearch />
                                        </InputGroup.Text>
                                    </InputGroup.Append>
                                </InputGroup>
                            </Col>
                        </Row>
                        <VolunteerListStatic
                            volunteers={this.props.adminReducer.volunteers}
                            onDelete={this.delete}
                        />
                    </Col>
                    <Col xs={2}>
                    </Col>
                </Row>
            </Container>

        )
    }
}

const mapStateToProps = state => {
    return {
        adminReducer: state.adminReducer,
        userReducer :state.userReducer,
    }
}

const mapDispachToProps = dispatch => {
    return {
        getVolunteers: (city) => dispatch(getVolunteersActionCreator(city)),
        getHospitals : (city) => dispatch(getHospitalsActionCreator(city)),
        addVolunteer : (email,hospitalId) => dispatch(addActionCreator(email,hospitalId)),
    }
}

export default connect(mapStateToProps, mapDispachToProps)(AdminDashboard)