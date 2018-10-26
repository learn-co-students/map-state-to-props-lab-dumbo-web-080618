import React, { Component } from 'react';
import { connect } from 'react-redux';

class Users extends Component {

  render() {
    return (
      <div>
        # of users: {this.props.users.length}
        <ul>
          {this.props.users.map((user, idx) => <li key={idx}>{user.username}</li>)}
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here
const mapStateToProps = state => {
  return {users : state.users }
}

export default connect(mapStateToProps)(Users)
