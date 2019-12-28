import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FaUser } from 'react-icons/fa'

export default class Header extends React.Component {

    headerLinks() {
        return(
            <React.Fragment>
                <Nav className="mr-auto">
                    <Link className="header-link" to="/"> Home </Link>
                    <Link className="header-link" to="/news"> News </Link>
                    <Link className="header-link" to="/calendar"> Calendar </Link>
                </Nav>

                <Navbar.Collapse className="justify-content-end">
                    <Link className="header-link" to="/profile"> 
                        {this.props.user.firstName}
                        <FaUser />
                    </Link>
                    
            </Navbar.Collapse>
            </React.Fragment>
            
        )
    }

    render() {
        let { loggedIn } = this.props
        let links
        if (loggedIn) {
            links = this.headerLinks()
        }
        return (
            <Navbar bg="light" sticky="top">
                <Navbar.Brand> 
                    <Link to="/" id="logo" className="header-link">
                    { /* <img id="logo-image" src="images/little_people.jpg"></img> */ }
                    Little People
                    </Link> 
                </Navbar.Brand>

                { links }
            </Navbar>
        )
    }
}
