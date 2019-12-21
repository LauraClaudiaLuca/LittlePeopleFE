import { Card, Form, Row, Col, Button } from 'react-bootstrap'
import React from 'react'
import { FaEdit, FaRegSave } from 'react-icons/fa'
import '../style/profile.css'
import ProfileCardStatic from './ProfileCardStatic';
import { connect } from 'react-redux'
import { editProfileActionCreator, changePassActionCreator } from '../actions/profileActionCreators';


class ProfileCard extends React.Component {
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
            notEditMode: true,
            invalidFirstName: undefined,
            invalidSurName: undefined,
            invalidPhone: undefined,
            invalidUsername: undefined,
        }
    }

    componentDidMount() {
        this.undo();
    }
    redirectOnSucces = () => {
        //TODO: call logout
        localStorage.removeItem('token')
        this.props.history.push("/login")
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
    toEditMode = (value) => {
        this.setState({
            notEditMode: value,
            invalidFirstName: undefined,
            invalidSurName: undefined,
            invalidPhone: undefined,
            invalidUsername: undefined,
        })
    }
    undo = () => {
        var user = JSON.parse(localStorage.getItem('token'))
        this.setState({
            username: user.username,
            firstName: user.firstName,
            surName: user.surname,
            phone: user.phone,
            city: user.city,
            email: "laura@gmail.com",
            notEditMode: true,
            invalidFirstName: undefined,
            invalidSurName: undefined,
            invalidPhone: undefined,
            invalidUsername: undefined,
        })
    }
    saveProfileInfo = () => {
        if (this.state.invalidFirstName == false && this.state.invalidSurName == false
            && this.state.invalidPhone == false && this.state.invalidUsername == false) {
            this.setState({
                notEditMode: true,
                invalidFirstName: undefined,
                invalidSurName: undefined,
                invalidPhone: undefined,
                invalidUsername: undefined,
            });
            editProfile(this.state.username, this.state.firstName, this.state.surName,
                 this.state.phone,this.props.loginReducer.token, this.redirectOnSucces);
        }
    }
    validate = () => {
        this.setState({
            invalidFirstName: this.state.firstName.length == 0,
            invalidSurName: this.state.surName.length == 0,
            invalidPhone: this.state.phone.length == 0 || this.state.phone.match(/^[0-9]+$/) == null,
            invalidUsername: this.state.username.length == 0
        })
    }

    render() {
        return (
            <ProfileCardStatic
                firstName={this.state.firstName}
                surName={this.state.surName}
                phone={this.state.phone}
                city={this.state.city}
                username={this.state.username}
                email={this.state.email}
                notEditMode={this.state.notEditMode}
                onChange={this.onChange}
                toEditMode={this.toEditMode}
                saveProfileInfo={this.saveProfileInfo}
                invalidFirstName={this.state.invalidFirstName}
                invalidSurName={this.state.invalidSurName}
                invalidPhone={this.state.invalidPhone}
                invalidUsername={this.state.invalidUsername}
                undo={this.undo}
            />
        )
    }
}
const mapStateToProps = (state) => {
    return {
        loginReducer: loginReducer
    }
}

const mapDispatchToProps = dispatch => {
    return {
        editProfile: (username, firstName, surName, phone, token, redirectOnSuccess) =>
            dispatch(editProfileActionCreator(username, firstName, surName, phone, token, redirectOnSuccess)),
        changePassword: (password, token, redirectOnSuccess) => dispatch(changePassActionCreator(password, token, redirectOnSuccess))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileCard)