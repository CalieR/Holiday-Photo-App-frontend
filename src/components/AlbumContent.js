import React, { Component } from "react";
import PhotosContainer from "./PhotosContainer";
import PhotoUploader from "./PhotoUploader";
import api from "../util/api";
import Invitation from "./Invitation";
import { Button } from "semantic-ui-react";

class AlbumContent extends Component {
  state = {
    photos: [],
    showShare: false,
    showUpload: false,
    showPhotos: true
  };

  componentDidMount() {
    this.getAlbum(this.props.chosenAlbum.id);
  }

  // getMockAlbum = albumId => {
  //   Promise.resolve({
  //     id: 1,
  //     name: "Photos",
  //     photos: [
  //       {
  //         created_at: "2019-05-16T14:51:54.404Z",
  //         description: "a lovely cute doggy",
  //         id: 1,
  //         image_url: "http://placecorgi.com/260/180",
  //         title: "a cute doggy",
  //         updated_at: "2019-05-16T14:51:54.404Z",
  //         user_id: 1
  //       }
  //     ]
  //   });
  // };

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
      showUpload: true,
      showPhotos: false
    });
    console.log(this.props.chosenAlbum);
  };

  hideUpload = () => {
    this.setState({
      showUpload: false
    });
  };

  // hide the photos when the dropzone is rendered
  hidePhotos = () => {
    this.setState({
      showPhotos: false
    });
  };

  showPhotos = () => {
    this.setState({
      showPhotos: true
    });
  };

  render() {
    return (
      <div>
        <Button color="black" onClick={() => this.handleShareClick()}>
          Share this album with another user
        </Button>
        <Button
          content="Back to my albums"
          icon="left arrow"
          labelPosition="left"
          onClick={this.props.resetAlbumChoice}
        />
        <Button
          content="Upload a photo to this album"
          icon="add"
          labelPosition="left"
          onClick={this.handleUploadClick}
        />
        <h3>{this.state.photos.length} Photos in this album:</h3>
        {this.state.showShare === true ? (
          <Invitation chosenAlbum={this.props.chosenAlbum} />
        ) : null}

        {this.state.showPhotos ? (
          <PhotosContainer photos={this.state.photos} />
        ) : null}

        {this.state.showUpload ? (
          <PhotoUploader
            hideUpload={this.hideUpload}
            chosenAlbum={this.props.chosenAlbum}
            getAlbum={this.getAlbum}
            showPhotos={this.showPhotos}
          />
        ) : null}
      </div>
    );
  }
}

export default AlbumContent;
