import React, { Component } from "react";
import api from "../util/api";

class Invitation extends Component {
  state = {
    users: [],
    selectedUser: "",
    admin: false
  };

  // need to code this to take current album id
  componentDidMount() {
    api.inviteUsers(this.state.admin, this.props.chosenAlbum.id).then(data => {
      let usersFromAPI = data.map(user => {
        return { value: user.id, display: user.username };
      });
      this.setState({
        users: usersFromAPI
      });
    });
  }

  handleClick = e => {
    e.preventDefault();
    // album_id currently hardcoded, update to current album
    api.addUserToAlbum(
      parseInt(this.state.selectedUser, 10),
      this.props.chosenAlbum.id,
      this.state.admin
    );
    this.setState({
      selectedUser: ""
    });
  };

  render() {
    return (
      <div>
        <p>Select a user to add:</p>
        <select
          value={this.state.selectedUser}
          onChange={e => this.setState({ selectedUser: e.target.value })}
        >
          {this.state.users.map(user => (
            <option key={user.value} value={user.value}>
              {user.display}
            </option>
          ))}
        </select>
        <button onClick={this.handleClick}>Add user</button>
      </div>
    );
  }
}

export default Invitation;
