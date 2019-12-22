import React from 'react'
import { connect } from 'react-redux'
import ProfileCard from '../components/ProfileCard'
import { Container, Row, Col } from 'react-bootstrap'
import SideNavBar from '../components/SideNavBar';



class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            firstName: "",
            surName: "",
            phone: "",
            city: "",
            email: "",
            password: "",
            confirmPassword: "",
            notEditMode: true,
        }
    }

    componentDidMount() {
        var user = JSON.parse(localStorage.getItem('token'))
        this.setState({
            username: user.username,
            firstName: user.firstName,
            surName: user.surname,
            phone: user.phone,
            city: user.city,
            email: "laura@gmail.com",
            notEditMode: true,
        })
    }
    onChange = (event) => {
        const { value, name } = event.target;

        this.setState({
            [name]: value
        })
    }
    toEditMode = () => {
        this.setState({
            notEditMode: false
        })
    }
    saveProfileInfo = () => {
        this.setState({
            notEditMode: true
        })
    }
    redirectOnSucces = () => {
        //TODO: call logout
        localStorage.removeItem('token')
        this.props.history.push("/login")
    }

    render() {
        return (
            <Container fluid style={{ heigh: "100vh" }}>
                <Row style={{ heigh: "100vh" }}>
                    <SideNavBar 
                    redirectOnSucces={this.redirectOnSucces}
                    ></SideNavBar>
                </Row>
            </Container>

        )
    }
}

const mapStateToProps = state => ({

})

const mapDispachToProps = dispatch => ({

})

export default connect(mapStateToProps, mapDispachToProps)(Profile)