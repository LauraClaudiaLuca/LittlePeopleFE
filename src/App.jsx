import React from 'react';
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'
import { createReduxStore } from './shared/createReduxStore'

import Home from './home/containers/Home'
import News from './news/containers/News'
import Profile from './profile/containers/Profile'
import Calendar from './calendar/containers/Calendar'
import Header from './shared/Header'
import Footer from './shared/Footer'
import Login from './login/components/Login'

const store = createReduxStore()

export const PrivateRoute = ({ component: Component, authorized, redir, ...rest }) => (
  <Route {...rest} render={(props) => {
    return authorized === true
      ? <Component {...props} />
      : <Redirect to={redir} />
  }
  } />
)
class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    var token = localStorage.getItem("token")
    console.log(token)
    return (
      <Provider store={store}>
        <React.Fragment>
          <Header />
          <BrowserRouter>
          {console.log("hello")}
            <PrivateRoute path='/home' component={Home} authorized={token!=null} redir="/login"/>
            <PrivateRoute path='/news' component={News} authorized={token!=null} redir="/login"/>
            <PrivateRoute path='/profile' component={Profile} authorized={token!=null} redir="/login"/>
            <PrivateRoute path='/calendar' component={Calendar} authorized={token!=null} redir="/login"/>
            <Route path="/login" component={Home} />
          </BrowserRouter>
          <Footer />
        </React.Fragment>

      </Provider>
    )
  }
}

export default App;
