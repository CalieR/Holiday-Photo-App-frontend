import React, { Component } from "react";

class AlbumCard extends Component {
  state = {};
  render() {
    return (
      <div>
        <p>{this.props.album.name}</p>
      </div>
    );
  }
}

export default AlbumCard;
