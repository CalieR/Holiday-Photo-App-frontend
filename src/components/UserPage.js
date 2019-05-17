import React, { Component } from "react";
import Albums from "./Albums";
import api from "../util/api";

class UserPage extends Component {
  state = {
    name: "",
    myAlbums: []
  };

  // if there is a token stored,
  // 

  // set state if successfully completed
  componentDidMount() {
    const token = localStorage.getItem("token");
    if (token) {
      api.getUserProfile().then(user => {
        console.log(user)
        this.setState({
          username: user.username,
          myAlbums: user.albums
        });
      });
    }
  }

  render() {
    return (
      <>
        <h1>Welcome to your page, {this.state.username}</h1>
        <p>Your albums will be displayed here</p>
        <Albums myAlbums={this.state.myAlbums} />
        <button onClick={this.props.handleLogOut}>Log out</button>
      </>
    );
  }
}

export default UserPage;
