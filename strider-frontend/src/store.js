import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import usersReducer from './reducers/users.js'
import currentUser from './reducers/currentUser.js'
import thunk from 'redux-thunk';
import loginReducer from './reducers/loginForm.js'

const reducer = combineReducers({
    users: usersReducer,
    currentUser, 
    loginReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)))

export default store 