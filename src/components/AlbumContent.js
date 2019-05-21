import React, { Component } from "react";
import PhotosContainer from "./PhotosContainer";
import PhotoUploader from "./PhotoUploader";
import api from "../util/api";
import Invitation from "./Invitation";

class AlbumContent extends Component {
  state = {
    photos: [],
    showShare: false,
    showUpload: false
  };

  componentDidMount() {
    this.getAlbum(this.props.chosenAlbum.id);
  }

  getMockAlbum = albumId => {
    Promise.resolve({
      id: 1,
      name: "Photos",
      photos: [
        {
          created_at: "2019-05-16T14:51:54.404Z",
          description: "a lovely cute doggy",
          id: 1,
          image_url: "http://placecorgi.com/260/180",
          title: "a cute doggy",
          updated_at: "2019-05-16T14:51:54.404Z",
          user_id: 1
        }
      ]
    });
  };

  getAlbum = albumId => {
    api.getAlbum(albumId).then(data => {
      this.setState({
        photos: data.photos
      });
    });
  };

  handleShareClick = () => {
    this.setState({
      showShare: true
    });
  };

  handleUploadClick = () => {
    this.setState({
      showUpload: true
    })
    console.log(this.props.chosenAlbum)
  }

  hideUpload = () => {
    this.setState({
      showUpload: false
    })
  }

  render() {
    return (
      <div>
        <button onClick={this.handleShareClick}>
          Share this album with another user
        </button>
        {this.state.shareClicked === true ? <Invitation /> : null}

        <PhotosContainer photos={this.state.photos} />
        <button onClick={this.handleUploadClick}>Upload a photo to this album</button>
        {this.state.showUpload ? <PhotoUploader hideUpload={this.hideUpload} chosenAlbum={this.props.chosenAlbum}/> : null}
      </div>
    );
  }
}

export default AlbumContent;
