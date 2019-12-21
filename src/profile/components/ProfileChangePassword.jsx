import { Card, Form, Row, Col, Button } from 'react-bootstrap'
import React from 'react'
import { FaEdit, FaRegSave } from 'react-icons/fa'
import '../style/profile.css'
import ProfileChangePasswordStatic from './ProfileChangePasswordStatic';
import { connect } from 'react-redux'



class ProfileChangePassword extends React.Component {
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
    render() {
        return (
            <ProfileChangePasswordStatic
            >

            </ProfileChangePasswordStatic>
        )
    }
}
const mapStateToProps = state => ({

})

const mapDispachToProps = dispatch => ({

})

export default connect(mapStateToProps, mapDispachToProps)(ProfileChangePassword)
