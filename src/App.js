import React from 'react';
import { Provider } from 'react-redux'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
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
            ? <React.Fragment>
                <Header />
                <Component {...props} />                <Footer />

            </React.Fragment>
            : <React.Fragment>
                <Redirect to={redir} />
            </React.Fragment>
    }
    } />
)
class App extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        var token = localStorage.getItem("token")
        return (
            <Provider store={store}>
                <React.Fragment>
                    <BrowserRouter>
                        <Route exact path="/login" component={Login} />
                        <PrivateRoute exact path='/home' component={Home} authorized={token != null} redir="/login" />
                        <PrivateRoute exact path='/news' component={News} authorized={token != null} redir="/login" />
                        <PrivateRoute exact path='/profile' component={Profile} authorized={token != null} redir="/login" />
                        <PrivateRoute exact path='/calendar' component={Calendar} authorized={token != null} redir="/login" />
                    </BrowserRouter>
                </React.Fragment>

            </Provider>
        )
    }
}

export default App;
