import React, { Component } from 'react';
import {connect} from 'react-redux';
import App from '../App'

class Users extends Component {
  mapUsers = () => {
    return this.props.users.map(user => <li key={user.username}>{user.username} {user.hometown}</li>)
  }

  render() {
    return (
      <div>
        <ul>
          <h3>{this.props.userCount}</h3>
          {this.props.users.length !== 0 ? this.mapUsers() : ''}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users ,
    userCount: state.users.length
  }
}

export default connect(mapStateToProps)(Users);
