import React from 'react'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'
import {startGetComments} from './action/commentAction'
class Postshow extends React.Component {
     componentDidMount(){
      this.props.dispatch(startGetComments())
    }
render() {
const user = this.props.users.find(user=> user.id === this.props.post.userId)
       return (
             <div>
                 <h2>USER NAME : {user.name}</h2>
                 <h3>TITLE : {this.props.post.title} </h3>
                 <h3>BODY : {this.props.post.body} </h3>
                 <h4>COMMENTS </h4>
                      <ul>{
                           this.props.postComments.map(comment=>{
                                  return <li key={comment.id}>{comment.body} </li>
                         })}
                    </ul>
                   <Link to={`/users/${user.id}`} >More posts of the author - {user.name}</Link>
             </div>
       )
      }
   }
const mapStateToProps = (state, props)=>{
        console.log('postshow params', props.match.params.id)
return {
         postComments:state.comments.filter(comment=> comment.postId == props.match.params.id),
         post : state.posts.find(post=> post.id == props.match.params.id),
         users : state.users
    }
}
export default connect(mapStateToProps)(Postshow)








