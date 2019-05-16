import React, { Component } from "react";

class UserPage extends Component {
  state = {};
  render() {
    return (
      <>
        <h1>You are logged in as {this.props.username}</h1>
        <p>Your albums will be displayed here</p>
        <button onClick={this.props.handleLogOut}>Log out</button>
      </>
    );
  }
}

export default UserPage;
