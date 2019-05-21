import React, { Component } from "react";
import AlbumsContainer from "./AlbumsContainer";
import NewAlbumForm from "./NewAlbumForm";
import api from "../util/api";
import AlbumContent from "./AlbumContent";

class UserPage extends Component {
  state = {
    name: "",
    myAlbums: [],
    viewNewAlbumForm: false,
    chosenAlbum: null
  };

  // if there is a token stored,
  // set state if successfully completed
  componentDidMount() {
    const token = localStorage.getItem("token");
    if (token) {
      api.getUserProfile().then(user => {
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
      myAlbums: [...this.state.myAlbums, newAlbum]
    });
  };

  handleAlbumChoiceClick = album => {
    this.setState({
      chosenAlbum: album
    });
  };

  render() {
    return (
      <>
        <h1>Welcome to your page, {this.state.username}</h1>
        <button onClick={this.props.handleLogOut}>Log out</button>
        {this.state.chosenAlbum ? (
          <AlbumContent chosenAlbum={this.state.chosenAlbum} />
        ) : (
          <AlbumsContainer
            myAlbums={this.state.myAlbums}
            handleAlbumChoiceClick={this.handleAlbumChoiceClick}
          />
        )}
      </>
    );
  }
}

export default UserPage;

{
  /* } else {
      return <div>"you have to be logged in to view that page!"</div>;
    } */
}
