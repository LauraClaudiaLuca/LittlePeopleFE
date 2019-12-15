import React from 'react'
import ReactDOM from 'react-dom'
import './styles/index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App'
import {Provider} from 'react-redux';
import {configureStore, createReduxStore} from './shared/createReduxStore'


ReactDOM.render(
    <Provider store={createReduxStore()}>
    <App />
    </Provider>,

     document.getElementById('root'));

