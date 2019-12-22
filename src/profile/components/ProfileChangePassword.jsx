import { Card, Form, Row, Col, Button } from 'react-bootstrap'
import React from 'react'
import { FaEdit, FaRegSave } from 'react-icons/fa'
import '../style/profile.css'
import ProfileChangePasswordStatic from './ProfileChangePasswordStatic';
import { connect } from 'react-redux'
import {changePassActionCreator} from '../actions/profileActionCreators'



class ProfileChangePassword extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            password: "",
            confirm: "",
        }
    }

    componentDidMount() {
        this.setState({
            password: "",
            confirm: "",
        })
    }
    onChange = (event) => {
        const { value, name } = event.target;

        this.setState({
            [name]: value
        })
    }
    redirectOnSucces = () => {
        //TODO: call logout
        localStorage.removeItem('token')
        this.props.history.push("/login")
    }
    savePassword = () => {
        this.props.changePassword(this.state.changePassword, "", this.redirectOnSuccess)
        this.alert("yey")
    }
    render() {
        return (
            <ProfileChangePasswordStatic
                password={this.state.password}
                confirm={this.state.confirm}
                onChange={this.onChange}
                savePassword={this.savePassword}
            />
        )
    }
}
const mapStateToProps = (state) => {
    return {
    }
}

const mapDispatchToProps = dispatch => {
    return {
        changePassword: (password, token, redirectOnSuccess) => dispatch(changePassActionCreator(password, token, redirectOnSuccess))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileChangePassword)
