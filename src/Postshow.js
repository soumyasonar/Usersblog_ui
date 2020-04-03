import React from 'react' 
import axios from 'axios'
import {Link} from 'react-router-dom'
class Postshow extends React.Component {
    constructor(){
        super()
        this.state={
            user:{},
            posts:{},
            comments:[]
        }
    }
    componentDidMount(){
        const id = this.props.match.params.id
        //const title=this.props.match.params.title
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then((response)=>{
            const posts=response.data
            this.setState({posts})
        })
        .catch((err)=>{
            console.log(err)
        })
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((response)=>{
            const user=response.data
            this.setState({user})
        })
        .catch((err)=>{
            console.log(err)
        })
        axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
        .then((response)=>{
            const comments=response.data
            this.setState({comments})
        })
        .catch((err)=>{
            console.log(err)
        })
    }
   
    render() {
        
        return (
            <div> 
                <h2>UserName: {this.state.user.name}</h2>
                <h2>Title: {this.state.posts.title}</h2>
                <h2>Body:<br/>{this.state.posts.body}</h2><br/>
                <h1>Comments: </h1>
                <ul>
                    {this.state.comments.map((comment)=>{
                        return <li key={comment.id}>{comment.body}</li>
                    })}
                </ul>
                <hr/>
                <h4><Link to={`/users/${this.state.posts.id}`}>More Posts Of Author-{this.state.user.name}</Link></h4>
                
            </div> 
        )
    }
}

export default Postshow