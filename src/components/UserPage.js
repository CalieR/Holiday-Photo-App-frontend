import React, { Component } from "react";
import AlbumsContainer from "./AlbumsContainer";
import api from "../util/api";
import AlbumContent from "./AlbumContent";
import NavBar from "./NavBar";

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

  resetAlbumChoice = () => {
    this.setState({
      chosenAlbum: null
    });
  };

  render() {
    return (
      <>
        <NavBar
          username={this.props.username}
          handleLogOut={this.props.handleLogOut}
        />
        {this.state.chosenAlbum ? (
          <AlbumContent chosenAlbum={this.state.chosenAlbum} resetAlbumChoice={this.resetAlbumChoice}/>
        ) : (
          <AlbumsContainer
            myAlbums={this.state.myAlbums}
            viewNewAlbumForm={this.state.viewNewAlbumForm}
            clearNewAlbumForm={this.clearNewAlbumForm}
            refreshMyAlbums={this.refreshMyAlbums}
            handleNewAlbumClick={this.handleNewAlbumClick}
            handleAlbumChoiceClick={this.handleAlbumChoiceClick}
           
          />
        )}
      </>
    );
  }
}

export default UserPage;
