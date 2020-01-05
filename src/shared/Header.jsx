import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FaUser, FaSignInAlt, FaSignOutAlt } from 'react-icons/fa'
import { connect } from 'react-redux'
import { logoutUser } from '../login/actions/actionCreators'

class Header extends React.Component {

    loggedInHeaderLinks() {
        return (
            <React.Fragment>
                <Nav className="mr-auto">
                    <Link className="header-link" to="/calendar"> Calendar </Link>
                    <Link className="header-link" to="/news"> Reports </Link>
                    {this.props.user.isAdmin
                        ?
                        <Link className="header-link" to="/admin"> Volunteers </Link>
                        :
                        null
                    }
                </Nav>

                <Navbar.Collapse className="justify-content-end">
                    <Link className="header-link" to="/profile">
                        {this.props.user.firstName}
                        <FaUser />
                    </Link>

                    <Link className="header-link" to="/" onClick={this.props.logout}>
                        Logout
                        <FaSignOutAlt />
                    </Link>

                </Navbar.Collapse>
            </React.Fragment>

        )
    }

    loginHeaderLink() {
        return (
            <Navbar.Collapse className="justify-content-end">
                <Link className="header-link" to="/login">
                    Login
                    <FaSignInAlt />
                </Link>
            </Navbar.Collapse>
        )
    }

    render() {
        let { isLoggedIn } = this.props
        let links = this.loginHeaderLink()
        if (isLoggedIn) {
            links = this.loggedInHeaderLinks()
        }
        return (
            <Navbar bg="light" sticky="top">
                <Navbar.Brand>
                    <Link to="/" id="logo" className="header-link">
                        <img id="logo-image" src="images/little-people-header-img.png"></img>
                    </Link>
                </Navbar.Brand>

                {links}
            </Navbar>
        )
    }
}

const mapStateToProps = state => ({
    isLoggedIn: state.auth.isLoggedIn,
    user: state.user
})

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logoutUser())
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)