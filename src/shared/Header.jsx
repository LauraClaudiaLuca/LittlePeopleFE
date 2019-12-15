import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default class Header extends React.Component {

    render() {
        return (
            <Navbar bg="danger" sticky="top">
                <Navbar.Brand> 
                    <Link to="/" id="logo" className="header-link"> Little People </Link> 
                    </Navbar.Brand>
                
                <Nav className="mr-auto">
                    <Link className="header-link" to="/"> Home </Link> 
                </Nav>

                <Nav className="ml-auto">
                    <Link className="header-link" to="/login"> Login </Link>
                </Nav>

            </Navbar>
        )
    }
}
