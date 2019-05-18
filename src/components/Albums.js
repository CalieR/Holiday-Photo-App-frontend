// container for all the albums

import React, { Component } from "react";
import AlbumCard from "./AlbumCard";
import { Card } from "semantic-ui-react";

class Albums extends Component {
  state = {};

  render() {
    return (
      <Card.Group>
        {this.props.myAlbums.map(album => (
          <AlbumCard key={album.id} album={album} />
        ))}
      </Card.Group>
    );
  }
}

export default Albums;
