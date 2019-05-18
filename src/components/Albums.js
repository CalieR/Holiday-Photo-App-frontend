// container for all the albums

import React, { Component } from "react";
import AlbumCard from "./AlbumCard";
import { Card } from "semantic-ui-react";
import api from "../util/api";

class Albums extends Component {
  state = {};

  // handleClick = e => {
  //   api.getAlbum(e.target.id).then(data => {
  //     console.log(data)
  //   })
  // }

  render() {
    return (
      <Card.Group>
        {this.props.myAlbums.map(album => (
          <AlbumCard
            key={album.id}
            album={album}
            
          />
        ))}
      </Card.Group>
    );
  }
}

export default Albums;
