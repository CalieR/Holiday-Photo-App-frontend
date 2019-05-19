// container for all the albums

import React, { Component } from "react";
import AlbumCard from "./AlbumCard";
import AlbumContentPage from "./AlbumContentPage";
import { Card } from "semantic-ui-react";
// import api from "../util/api";

class AlbumsContainer extends Component {
  state = {};

  render() {
    return (
      <>
        <Card.Group>
          {this.props.myAlbums.map(album => (
            <AlbumCard key={album.id} album={album} />
          ))}
        </Card.Group>
        <AlbumContentPage />
      </>
    );
  }
}

export default AlbumsContainer;
