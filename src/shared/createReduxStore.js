import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'

export const createReduxStore = () => {
    let middlewares = [thunk]

    if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
        const logger = createLogger()
        middlewares.push(logger)
    }


    const rootReducer = function() {} // TODO: use combineReducers()

    const store = createStore(
        rootReducer,
        applyMiddleware(...middlewares)
    )
    return store

}

