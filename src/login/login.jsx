import { Col,Row,Image,Form,Button,Container } from "react-bootstrap";
import React from 'react';


/**
 * @author [Laura]
 */
class Login extends React.Component {
    constructor(props) {
        super(props)
        this.setState = {
            email: "",
            password: "",
            alertErr: false
        }
    }
    onChange = (event) => {
        const { value, name } = event.target;

        this.setState({
            [name]: value
        })
    }

    render() {
        return (
            <Container fluid style={{backgroundImage:"url(./images/login_pic.jpg)", height:"100vh", overflow:"hidden"}}> 
                <Row style={{height:"100%"}}>
                    <Col >
                    </Col>
                    <Col xs lg="3" style={{background:"rgba(255,255,255, 0.7)"}}>
                        <Form style={{marginTop:"70%"}}>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label> <b>Email address</b></Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group>
                            <Form.Group controlId="formBasicPassword">
                                <Form.Label > <b>Password</b></Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                            <Button variant="danger" type="submit" style={{width:"100%"}}>
                                Login
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        )
    }
}
export default Login