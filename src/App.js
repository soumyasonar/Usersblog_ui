import React from 'react'
import Home from './Home' 
import { BrowserRouter,Route,Link } from 'react-router-dom'
import UsersList from './UsersList'
import Usershow from './Usershow'
import Postlist from './Postlist'
import Postshow from './Postshow'
import Commentlist from './Commentlist'

function App(props){
    return(
        <BrowserRouter>
        <div>
            <Link to="/">Home</Link>
            <Link to="/userslist">| Users</Link>
            <Link to="/users"></Link>
            <Link to="/postlist">| Posts</Link>
            <Link to="/posts"></Link>
            <Link to="/commentlist">| Comments</Link>
           

            <Route path="/" component={Home}  exact={true}/>
            <Route path="/userslist" component={UsersList} exact={true}/>
            <Route path="/users/:id" component={Usershow} exact={true}/>
            <Route path="/postlist" component={Postlist}/>
            <Route path="/posts/:id" component={Postshow}/>
            <Route path="/commentlist" component={Commentlist}/>
            
        </div>
        </BrowserRouter>
    )
}
export default App