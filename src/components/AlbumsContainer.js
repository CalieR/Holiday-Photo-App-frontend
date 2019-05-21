// container for all the albums

import React, { Component } from "react";
import AlbumCard from "./AlbumCard";
import AlbumContent from "./AlbumContent";
import { Card } from "semantic-ui-react";
// import api from "../util/api";

class AlbumsContainer extends Component {
  state = {
    clickedAlbum: ''
  };

  // render the albumcontent page when an album title is set in state here

  render() {
    return (
      <>
      <h4>Your albums (click one to view contents):</h4>
          <button onClick={this.handleNewAlbumClick}>Create a new album</button>
        <Card.Group>
          {this.props.myAlbums.map(album => (
            <AlbumCard key={album.id} album={album} handleAlbumChoiceClick={this.props.handleAlbumChoiceClick}/>
          ))}
        </Card.Group>
            {this.state.clickedAlbum ? (
        <AlbumContent />

            ) : null }
        
      </>
    );
  }
}

export default AlbumsContainer;
