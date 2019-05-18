import React, { Component } from "react";
import PhotosContainer from "./PhotosContainer";

class AlbumContentPage extends Component {
  state = {
      myPhotos: []
  };
  render() {
    return (
      <div>
        <PhotosContainer />
        <button>Upload a photo to this album</button>
        <button>Share this album with another user</button>
      </div>
    );
  }
}

export default AlbumContentPage;
