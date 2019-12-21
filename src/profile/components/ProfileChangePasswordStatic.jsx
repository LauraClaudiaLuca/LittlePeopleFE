import { Card, Form, Row, Col, Button, Container } from 'react-bootstrap'
import React from 'react'
import { FaEdit, FaRegSave } from 'react-icons/fa'
import '../style/profile.css'

const ProfileChangePasswordStatic = ({
    password,
    confirmPassword,
    onChange,
    savePassword

}) => {
    return (
        <Card style={{ marginTop: "1vh" }}>
            <Card.Header>
                <b></b>
                <FaRegSave className="icons" style={{ float: "right" }} size="25" onClick={savePassword}></FaRegSave>
            </Card.Header>
            <Card.Body>
                <Form>
                    <Row>
                        <Col>
                            <Form.Group controlId="formPassword">
                                <Form.Label> <b>New Password</b></Form.Label>
                                <Form.Control value={password} type="password" onChange={onChange} name="password" placeholder="New Password"></Form.Control>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Group controlId="formConfirmPassword">
                                <Form.Label> <b>Confirm Password</b></Form.Label>
                                <Form.Control value={confirmPassword} type="password" onChange={onChange} name="password" placeholder="Confirm Password"></Form.Control>
                            </Form.Group>
                        </Col>
                    </Row>
                </Form>
            </Card.Body>
        </Card>
    )
}
export default ProfileChangePasswordStatic;