import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from './home/containers/Home'
import Login from './login/components/Login'
import News from './news/containers/News'
import Profile from './profile/containers/Profile'
import Calendar from './calendar/containers/Calendar'
import Header from './shared/Header'
import Footer from './shared/Footer'
import PageNotFound from './shared/PageNotFound'
import { Container } from 'react-bootstrap';

export default class App extends React.Component {

  loggedInRouter() {
    return (
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/home' component={Home} />
        <Route path='/news' component={News} />
        <Route path='/profile' component={Profile} />
        <Route path='/calendar' component={Calendar} />
        <Route component={PageNotFound} />
      </Switch>
    )
  }

  loggedOutRouter() {
    return (
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/home' component={Home} />
        <Route path='/login' component={Login} />
        <Route component={PageNotFound} />
      </Switch>
    )
  }

  render() {
    const isLoggedIn = false // TODO: check if user is logged in
    let routes = this.loggedOutRouter()
    if (isLoggedIn) {
      routes = this.loggedInRouter()
    }
    return (
      <BrowserRouter>
        <Header isLoggedIn={isLoggedIn} />

        <Container fluid>
          {routes}
        </Container>

        <Footer />
      </BrowserRouter>
    )
  }
}