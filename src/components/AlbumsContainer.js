// container for all the albums

import React, { Component } from "react";
import AlbumCard from "./AlbumCard";
import AlbumContent from "./AlbumContent";
import { Container, Button, Card } from "semantic-ui-react";
import NewAlbumForm from "./NewAlbumForm";

class AlbumsContainer extends Component {
  state = {
    loading: true
  };

  render() {
    return (
      <>
        <div className="albums-control">
          <>
            <div className="create-album-button">
              <Button
                className="create-album-button"
                color="teal"
                content="Create a new album"
                icon="add"
                labelPosition="left"
                onClick={this.props.handleNewAlbumClick}
              />
            </div>
          </>

          {this.state.loading ? null : this.props.myAlbums.length === 0 ? (
            <h1>You don't have any albums yet!</h1>
          ) : (
            <h1>YOUR ALBUMS:</h1>
          )}
        </div>

        {this.props.viewNewAlbumForm ? (
          <NewAlbumForm
            clearNewAlbumForm={this.props.clearNewAlbumForm}
            refreshMyAlbums={this.props.refreshMyAlbums}
          />
        ) : null}

        <Container textAlign="center">
          <Card.Group className="App-container">
            {this.props.myAlbums.map(album => (
              <AlbumCard
                key={album.id}
                album={album}
                handleAlbumChoiceClick={this.props.handleAlbumChoiceClick}
              />
            ))}
          </Card.Group>
        </Container>

        {this.props.chosenAlbum ? (
          <AlbumContent chosenAlbum={this.state.chosenAlbum} />
        ) : null}
      </>
    );
  }
}

export default AlbumsContainer;
