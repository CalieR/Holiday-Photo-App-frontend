import React, { Component } from "react";
import { Button, Dropdown } from "semantic-ui-react";
import api from "../util/api";

class Invitation extends Component {
  state = {
    users: [],
    selectedUserId: 0,
    admin: false
  };

  componentDidMount() {
    api.inviteUsers(this.state.admin, this.props.chosenAlbum.id).then(data => {
      let usersFromAPI = data.map(user => {
        return { key: user.id, value: user.id, text: user.username };
      });
      this.setState({
        users: usersFromAPI
      });
    });
  }

  handleChange = (e, data) => {
    const { value } = data;
    const { key } = data.options.find(o => o.value === value);
    this.setState({
      selectedUserId: key
    });
  };

  handleClick = () => {
    api.addUserToAlbum(
      this.state.selectedUserId,
      this.props.chosenAlbum.id,
      this.state.admin
    );

    const updatedUserList = this.state.users.filter(
      u => u.key !== this.state.selectedUserId
    );
    this.setState({
      selectedUserId: 0,
      users: updatedUserList
    });
    this.props.hideShare();
  };

  render() {
    return (
      <div className="invitation-container">
        <Dropdown
          selection
          options={this.state.users}
          onChange={this.handleChange}
          hideShare={this.props.hideShare}
          name="select friend"
          placeholder="select friend"
        />
        <Button onClick={this.handleClick}>Add user</Button>
      </div>
    );
  }
}

export default Invitation;
