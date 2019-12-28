import { Col, Row, Form, Button, Container, Spinner } from "react-bootstrap"
import React from 'react'
import { connect } from 'react-redux'
import { loginActionCreator } from "../actions/loginActionCreators"
import { withRouter } from 'react-router-dom'
import AlertDialog from '../../shared/AlertDialog'

/**
 * @author [Laura]
 */
class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: "",
            password: ""
        }
    }

    onChange = (event) => {
        const { value, name } = event.target;

        this.setState({
            [name]: value
        })
    }

    onSubmit = (event) => {
        event.preventDefault();
        this.props.login(
            this.state.email,
            this.state.password,
            this.redirectOnSucces
        );
    }

    redirectOnSucces = () => {
        this.props.history.push("/home")
    }

    render() {
        const { isFetching, isError, message } = this.props
        let buttonContent = 'Login'
        let disabled = false
        if (isFetching) {
            disabled = true
            buttonContent = (
                <Spinner animation="border" role="status" size="sm" />
            )
        }

        let errorMessage = null
        if (isError) {
            errorMessage = <AlertDialog message={message} danger/>
        }

        return (
            <Container fluid style={{ backgroundImage: "url(./images/login_pic.jpg)", height: "100vh", overflow: "hidden" }}>
                {errorMessage}
                <Row style={{ height: "100%" }}>
                    <Col> </Col>
                    <Col xs lg="3" style={{ background: "rgba(255,255,255, 0.7)" }}>
                        <Form style={{ marginTop: "70%" }}>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label> <b>Email address</b></Form.Label>
                                <Form.Control type="email" placeholder="Enter email" name="email" onChange={this.onChange} />
                            </Form.Group>
                            <Form.Group controlId="formBasicPassword">
                                <Form.Label > <b>Password</b></Form.Label>
                                <Form.Control type="password" placeholder="Password" name="password" onChange={this.onChange} />
                            </Form.Group>
                            <Button disabled={disabled} variant="danger" type="submit" style={{ width: "100%" }} onClick={this.onSubmit}>
                                {buttonContent}
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        )
    }
}

const mapStateToProps = state => ({
    isFetching: state.login.isFetching,
    isError: state.login.loginError,
    message: state.login.message
})

const mapDispatchToProps = dispatch => ({
    login: (email, password, redirectOnSuccess) => dispatch(loginActionCreator(email, password, redirectOnSuccess))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login))