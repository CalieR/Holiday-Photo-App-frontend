import React, { Component } from "react";
import { Button, Dropdown } from "semantic-ui-react";
import api from "../util/api";

class Invitation extends Component {
  state = {
    users: [],
    selectedUserId: 0,
    admin: false,
    loading: true
  };

  componentDidMount() {
    api.inviteUsers(this.state.admin, this.props.chosenAlbum.id).then(data => {
      let usersFromAPI = data.map(user => {
        return { key: user.id, value: user.id, text: user.username };
      });
      this.setState({
        users: usersFromAPI,
        loading: false
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
    // about tab not refreshing with newly added users.
    this.props.hideShare();
  };

  render() {
    return (
      <div className="sharing">
        {this.state.loading ? null : this.state.users.length === 0 ? (
          <h1>All users are already sharing this album!</h1>
        ) : (
          <div className="invitation-container">
            <div>
              <Dropdown
                selection
                options={this.state.users}
                onChange={this.handleChange}
                name="select friend"
                placeholder="Select user"
              />
              <Button color="teal" onClick={this.handleClick}>
                Add user
              </Button>
              <Button color="teal" onClick={this.props.hideShare}>
                Cancel
              </Button>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Invitation;
