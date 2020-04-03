import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
class Postlist extends React.Component {
    constructor() {
        console.log('constructor')
        super() 
        this.state = {
            posts: [] 
        }
    }

    //life cycle methods
    componentDidMount(){ //immediately called only once after render method gets executed
       axios.get('https://jsonplaceholder.typicode.com/posts')
            .then((response) => {
                const posts = response.data 
                this.setState({posts})
            })
            .catch((err) => {
                console.log(err)
            })
    }

 
    render() {
        console.log('render')
        return (
            <div> 
                <h1> Total Posts={ this.state.posts.length} </h1>
                <ul>{this.state.posts.map( post => {
                    return <li key={post.id}><Link to={`/posts/${post.id}`}>{ post.title }</Link></li>
                        
                })} 
            </ul>

                
            </div> 
        )
    }
}
export default Postlist