//import
//es2015 module loader

// import react & react-dom
// html - <script src="./js"> </script>

// es2015 module loader - react angular
// common js module loader - node + express 

import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { Provider } from 'react-redux' // npm install react-redux
import configureStore from './store/configureStore'
import { startGetUsers } from './action/usersAction'
import { startGetPosts } from './action/postAction'
import { startGetComments } from './action/commentAction'
const store = configureStore() 
console.log(store.getState())

store.subscribe(() => {
    console.log(store.getState())
})


// handle page reloads 
store.dispatch(startGetUsers())
store.dispatch(startGetPosts())
store.dispatch(startGetComments())

const jsx = (
    <Provider store={store}>
        <App />
    </Provider>
)
ReactDOM.render(jsx, document.getElementById('root') )