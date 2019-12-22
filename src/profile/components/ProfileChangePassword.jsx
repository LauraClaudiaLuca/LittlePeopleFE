import { Card, Form, Row, Col, Button } from 'react-bootstrap'
import React from 'react'
import { FaEdit, FaRegSave } from 'react-icons/fa'
import '../style/profile.css'
import ProfileChangePasswordStatic from './ProfileChangePasswordStatic';
import { connect } from 'react-redux'
import {changePassActionCreator} from '../actions/profileActionCreators'
import Swal from 'sweetalert2'
import {history} from '../../shared/history'


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
    redirectOnSucces = async () => {
        //TODO: call logout
        await Swal.fire({
            icon: 'success',
            title: 'Password updated!',
            text: 'We will redirect you to login again ....',
            confirmButtonColor: '#db3d44',
          })
        localStorage.removeItem('token')
        history.push("/login")
        window.location.reload()

    }
    savePassword = () => {
        this.props.changePassword(this.state.changePassword, "", this.props.redirectOnSuccess)
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
