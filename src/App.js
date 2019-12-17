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
class App extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        var token = localStorage.getItem("token")
        const dashboardRoute = window.location.pathname === "/" ? <Redirect to="/home" /> : undefined;
        return (
            <Provider store={store}>
                <React.Fragment>
                    {/* <Header /> */}
                    <BrowserRouter>
                        <Route exact path="/login" component={Login} />
                        <Route exact path='/home' component={Home} />
                        <Route exact path='/news' component={News} />
                        <Route exact path='/profile' component={Profile}/>
                        <Route exact path='/calendar' component={Calendar}/>
                        {dashboardRoute}
                    </BrowserRouter>
                    {/* <Footer /> */}
                </React.Fragment>

            </Provider>
        )
    }
}

export default App;
