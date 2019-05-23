// container for all the albums

import React, { Component } from "react";
import AlbumCard from "./AlbumCard";
import AlbumContent from "./AlbumContent";
import { Button, Card } from "semantic-ui-react";
import NewAlbumForm from "./NewAlbumForm";
// import api from "../util/api";

class AlbumsContainer extends Component {
  state = {
    
  };

 

  render() {
    return (
      <>
        <h4>Your albums (click one to view contents):</h4>
        <Button
          content="Create a new album"
          icon="add"
          labelPosition="left"
          onClick={this.props.handleNewAlbumClick}
        />
        {this.props.viewNewAlbumForm ? (
          <NewAlbumForm
            clearNewAlbumForm={this.props.clearNewAlbumForm}
            refreshMyAlbums={this.props.refreshMyAlbums}
          />
        ) : null}
        <Card.Group className="App-container">
          {this.props.myAlbums.map(album => (
            <AlbumCard
              key={album.id}
              album={album}
              handleAlbumChoiceClick={this.props.handleAlbumChoiceClick}
            />
          ))}
        </Card.Group>
        {this.props.chosenAlbum ? (
          <AlbumContent  chosenAlbum={this.state.chosenAlbum}/>
        ) : null}
      </>
    );
  }
}

export default AlbumsContainer;
