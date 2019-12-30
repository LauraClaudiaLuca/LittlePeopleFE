import React from 'react'
import { connect } from 'react-redux'
import VolunteerListStatic from "../components/VolunteerListStatic"
import { Container, Row, Col, Button, Form, FormControl, InputGroup,ButtonToolbar } from 'react-bootstrap'
import { FaUserPlus, FaSearch } from 'react-icons/fa'
import AddVolunteerModal from "../components/AddVolunteerModal"


class AdminDashboard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            volunteers: [
                {
                    firstName: 'Ana',
                    surName: 'Maria',
                    email: 'ana@gmail.com',
                    phone: '0747838457'
                },
                {
                    firstName: 'Elena',
                    surName: 'Hasmasan',
                    email: 'elena@gmail.com',
                    phone: '0747838444'
                },
                {
                    firstName: 'Mircu',
                    surName: 'Marian',
                    email: 'mircu@gmail.com',
                    phone: '0747838888'
                },
                {
                    firstName: 'Ana',
                    surName: 'Maria',
                    email: 'ana@gmail.com',
                    phone: '0747838457'
                },
                {
                    firstName: 'Elena',
                    surName: 'Hasmasan',
                    email: 'elena@gmail.com',
                    phone: '0747838444'
                },
                {
                    firstName: 'Mircu',
                    surName: 'Marian',
                    email: 'mircu@gmail.com',
                    phone: '0747838888'
                },
                {
                    firstName: 'Ana',
                    surName: 'Maria',
                    email: 'ana@gmail.com',
                    phone: '0747838457'
                },
                {
                    firstName: 'Elena',
                    surName: 'Hasmasan',
                    email: 'elena@gmail.com',
                    phone: '0747838444'
                },
                {
                    firstName: 'Mircu',
                    surName: 'Marian',
                    email: 'mircu@gmail.com',
                    phone: '0747838888'
                },
            ]
        }
    }
    componentDidMount() {
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
                                <ButtonToolbar>

                                    <Button variant="danger" style={{
                                        backgroundColor: "rgb(219, 61, 68)",
                                        width: "100%"
                                    }}
                                    >
                                        <FaUserPlus size={20}></FaUserPlus>
                                    </Button>
                                </ButtonToolbar>
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
                            volunteers={this.state.volunteers}
                        />
                    </Col>
                    <Col xs={2}>
                    </Col>
                </Row>
            </Container>

        )
    }
}

const mapStateToProps = state => ({

})

const mapDispachToProps = dispatch => ({

})

export default connect(mapStateToProps, mapDispachToProps)(AdminDashboard)