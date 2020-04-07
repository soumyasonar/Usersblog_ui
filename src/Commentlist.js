import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { startGetComments } from './action/commentAction'
class UsersList extends React.Component {
    componentDidMount() {
        if (this.props.comments.length === 0) {
            this.props.dispatch(startGetComments())
        }
    }
    
   render() {
        console.log('render')
        return (
            <div> 
                <h1> Listing Comments={ this.props.comments.length} </h1>
                <h1>Comments: </h1>
                <ul>
                    {this.props.comments.map((comment)=>{
                        return <li key={comment.id}>{comment.body}</li>
                    })}
                </ul>
                <hr/>

                
            </div> 
        )
    }
}
const mapStateToProps = (state) => {
    return {
        comments: state.comments
    }
}
export default connect(mapStateToProps)(UsersList)