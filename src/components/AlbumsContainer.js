// container for all the albums

import React, { Component } from "react";
import AlbumCard from "./AlbumCard";
import AlbumContent from "./AlbumContent";
import { Card } from "semantic-ui-react";
import NewAlbumForm from "./NewAlbumForm";
// import api from "../util/api";

class AlbumsContainer extends Component {
  state = {
    clickedAlbum: ""
  };

  render() {
    return (
      <>
        <h4>Your albums (click one to view contents):</h4>
        <button onClick={this.props.handleNewAlbumClick}>
          Create a new album
        </button>
        {this.props.viewNewAlbumForm ? <NewAlbumForm clearNewAlbumForm={this.props.clearNewAlbumForm}  refreshMyAlbums={this.props.refreshMyAlbums}/> : null}
        <Card.Group className="App-container">
          {this.props.myAlbums.map(album => (
            <AlbumCard
              key={album.id}
              album={album}
              handleAlbumChoiceClick={this.props.handleAlbumChoiceClick}
            />
          ))}
        </Card.Group>
        {this.state.clickedAlbum ? <AlbumContent /> : null}
      </>
    );
  }
}

export default AlbumsContainer;
