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

const store = createReduxStore()

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Provider store={store}>
        <React.Fragment>

          <Header />

          <BrowserRouter>
            <Route exact path='/' component={Home} />
            <Route path="/news" component={News} />
            <Route path="/profile" component={Profile} />
            <Route path="/calendar" component={Calendar} />
          </BrowserRouter>

          <Footer />
        </React.Fragment>
        
      </Provider>
    )
  }
}

export default App;
