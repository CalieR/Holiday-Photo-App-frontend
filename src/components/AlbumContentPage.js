import React, { Component } from "react";
import PhotosContainer from "./PhotosContainer";
import api from "../util/api";

class AlbumContentPage extends Component {
  state = {
    photos: []
  };

  componentDidMount() {
    console.log("mounted");
    // hard-coded for now but this will be provided by album card click
    this.getAlbum(1);
  }

  getMockAlbum = albumId => {
    Promise.resolve({
      "id": 1,
      "name": "Photos",
      "photos": [{
        "created_at": "2019-05-16T14:51:54.404Z",
        "description": "a lovely cute doggy",
        "id": 1,
        "image_url": "http://placecorgi.com/260/180",
        "title": "a cute doggy",
        "updated_at": "2019-05-16T14:51:54.404Z",
        "user_id": 1}
      ]
    })
  }

  getAlbum = albumId => {
    api.getAlbum(albumId).then(data => {
      console.log(data)
      this.setState({
        photos: data.photos
      });
    });
  };

  render() {
    return (
      <div>
        <PhotosContainer photos={this.state.photos} />
        <button>Upload a photo to this album</button>
        <button>Share this album with another user</button>
      </div>
    );
  }
}

export default AlbumContentPage;
