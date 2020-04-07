import React from 'react' 
import { connect } from 'react-redux'
//import axios from 'axios'
import {Link} from 'react-router-dom'
class UserShow extends React.Component {
   
     render() {
        return (
            <div>
            {
                this.props.user ? ( <div> 
                    <h2>User Show - {this.props.match.params.id}</h2>
                    <p> {this.props.user.name} - {this.props.user.email}</p> 
                </div> ) : (
                    <p> loading....</p>
                )
            }
            
        </div>
        )
    }
}

const mapStateToProps = (state, props) => {
    return {
        user: state.users.find(user => user.id == props.match.params.id)
    }
}
export default connect(mapStateToProps)(UserShow)

//export default UserShow