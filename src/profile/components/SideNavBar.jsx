import React from 'react'
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import ProfileCard from './ProfileCard';
import ProfileChangePassword from './ProfileChangePassword';
import { Col } from 'react-bootstrap';
import { FaUserCircle, FaCog } from 'react-icons/fa'


const SideNavBar = (
    redirectOnSuccess
) => {
    return (
        <Router>
            {console.log("red",redirectOnSuccess)}
            <Route render={({ location, history }) => (
                <React.Fragment>
                    <Col xs={2} xl={2} style={{ height: "100vh" }}>
                        <SideNav
                            onSelect={(selected) => {
                                const to = '/' + selected;
                                if (location.pathname !== to) {
                                    history.push(to);
                                }
                            }}
                        >
                            <SideNav.Toggle />
                            <SideNav.Nav defaultSelected="profile">
                                <NavItem eventKey="profile">
                                    <NavIcon>
                                        <FaUserCircle size="25" style={{ color: "white" }} />
                                    </NavIcon>
                                    <NavText>
                                        My Profile
                                    </NavText>
                                </NavItem>
                                <NavItem eventKey="profile/pass">
                                    <NavIcon>
                                        <FaCog size="25" style={{ color: "white" }} />
                                    </NavIcon>
                                    <NavText>
                                        Change Password
                                        </NavText>
                                </NavItem>
                            </SideNav.Nav>
                        </SideNav>
                    </Col>
                    <Col xs={8} xl={8}>
                        <Route exact path="/profile" render={(props)=><ProfileCard {...props}/>} />
                        <Route exact path="/profile/pass" component={props => <ProfileChangePassword redirectOnSuccess={redirectOnSuccess} />} />
                    </Col>
                </React.Fragment>
            )}
            />
        </Router>
    )
}
export default SideNavBar;