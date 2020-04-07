import { createStore, combineReducers, applyMiddleware } from 'redux'
// npm install redux-thunk
import thunk from 'redux-thunk'
import usersReducer from '../reducers/usersReducer'
import postReducer from  '../reducers/postReducer'
import commentReducer from '../reducers/commentReducer'

const configureStore = () => {
    const store = createStore(combineReducers({
       // count: countReducer,
        users: usersReducer,
        posts: postReducer,
        comments:commentReducer
    }), applyMiddleware(thunk))
    return store 
}

export default configureStore