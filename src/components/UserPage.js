import React, { Component } from "react";
import Albums from "./Albums";
import NewAlbumForm from "./NewAlbumForm";
import api from "../util/api";

class UserPage extends Component {
  state = {
    name: "",
    myAlbums: [],
    viewNewAlbumForm: false
  };

  // if there is a token stored,
  //

  // set state if successfully completed
  componentDidMount() {
    const token = localStorage.getItem("token");
    if (token) {
      api.getUserProfile().then(user => {
        console.log(user);
        this.setState({
          username: user.username,
          myAlbums: user.albums
        });
      });
    }
  }

  handleNewAlbumClick = () => {
    this.setState({
      viewNewAlbumForm: true
    });
  };

  // call after the new album details are submitted
  clearNewAlbumForm = () => {
    this.setState({
      viewNewAlbumForm: false
    });
  };

  // new album form needs to trigger this function
  refreshMyAlbums = newAlbum => {
    this.setState({
      myAlbums: [...this.state.myAlbums, newAlbum ]
    })
  }

  render() {
    return (
      <>
        <h1>Welcome to your page, {this.state.username}</h1>
        <h4>Your albums (click one to view contents):</h4>
        <Albums myAlbums={this.state.myAlbums} />

        <button onClick={this.handleNewAlbumClick}>Create a new album</button>
        <div className="new-album-form-container">
          {this.state.viewNewAlbumForm ? (
            <NewAlbumForm clearNewAlbumForm={this.clearNewAlbumForm} refreshMyAlbums={this.refreshMyAlbums}/>
          ) : null}
        </div>
        <button onClick={this.props.handleLogOut}>Log out</button>
      </>
    );
  }
}

export default UserPage;
