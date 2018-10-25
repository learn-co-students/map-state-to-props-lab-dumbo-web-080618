import React, { Component } from 'react';
import { connect } from 'react-redux'

class Users extends Component {
  render() {
  console.log('users props: ', this.props)

    const users = this.props.users.map(user => <li key={user.username}>{user.username}</li>)
    return (
      <div>
        <ul>
          Users!{this.props.users.length}
          {users}
        </ul>
      </div>
    )
  }
}


//add mapStateToProps here
const mapStateToProps = (state) => {return{users: state.users}}
export default connect(mapStateToProps)(Users)
