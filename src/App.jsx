import React, { Component } from 'react';
import { BrowserRouter, Switch } from 'react-router-dom'
import PrivateRoute from './shared/PrivateRoute'
import Home from './home/containers/Home'
import Login from './login/components/Login'
import News from './news/containers/News'
import Profile from './profile/containers/Profile'
import Calendar from './calendar/containers/Calendar'
import Header from './shared/Header'
import Footer from './shared/Footer'
import PageNotFound from './shared/PageNotFound'
import { connect } from 'react-redux'
import { getUserData } from './shared/actions'
import { loginSuccessAction } from './login/actions/loginActionCreators'
import AdminDashboard from './admin/containers/AdminDashboard'

class App extends Component {

  UNSAFE_componentWillMount() {
    let token = localStorage.getItem("token")
    if (token) {
      token = JSON.parse(token)
      this.props.markAsLoggedIn(token.firstName)
      this.props.getUserData(token)
    }
  }

  componentDidUpdate() {
    let token = localStorage.getItem("token")
    if (this.props.isLoggedIn && token !== JSON.stringify(this.props.user)) {
      this.props.getUserData(JSON.parse(token))
    }
  }


  render() {
    let { isLoggedIn, user } = this.props

    return (
      <BrowserRouter>
        <Header loggedIn={isLoggedIn} user={user}/>

        <Switch>
          <PrivateRoute exact path='/' component={Home} authorized={isLoggedIn} redir="/login" />
          <PrivateRoute path='/home' component={Home} authorized={isLoggedIn} redir="/login" />
          <PrivateRoute path='/news' component={News} authorized={isLoggedIn} redir="/login" />
          <PrivateRoute path='/profile' component={Profile} authorized={isLoggedIn} redir="/login" />
          <PrivateRoute path='/calendar' component={Calendar} authorized={isLoggedIn} redir="/login" />
          <PrivateRoute path='/login' component={Login} authorized={!isLoggedIn} redir="/" />
          <PrivateRoute path='/admin' component={AdminDashboard} authorized={isLoggedIn && user.isAdmin} redir="/login"/>
          <PrivateRoute component={PageNotFound} authorized={isLoggedIn} redir="/login" />
        </Switch>

        <Footer />
      </BrowserRouter>

    )
  }
}

const mapStateToProps = state => ({
  isLoggedIn: state.login.isLoggedIn,
  message: state.login.message,
  user: state.user,
  profile: state.profileReducer
})

const mapDispatchToProps = dispatch => ({
  getUserData: token => dispatch(getUserData(token)),
  markAsLoggedIn: firstName => dispatch(loginSuccessAction(firstName))
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
