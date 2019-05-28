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

  showShare = () => {
    this.setState({
      showShare: true
    });
  };

  hideShare = () => {
    this.setState({
      showShare: false
    });
  };

  showUpload = () => {
    this.setState({
      showUpload: true,
      showPhotos: false
    });
    // console.log(this.props.chosenAlbum);
  };

  hideUpload = () => {
    this.setState({
      showUpload: false,
      showPhotos: true
    });
  };

  // hide the photos when the dropzone is rendered
  //refactor these two functions into a toggle function
  // hidePhotos = () => {
  //   this.setState({
  //     showPhotos: false
  //   });
  // };

  // showPhotos = () => {
  //   this.setState({
  //     showPhotos: true
  //   });
  // };

  render() {
    return (
      <div>
        <Button color="black" onClick={() => this.showShare()}>
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
          onClick={this.showUpload}
        />

        {this.state.photos.length === 0 ? (
          <h1>This album is empty!</h1>
        ) : (
          <h1>
            There are {this.state.photos.length} photos in this album so far...
          </h1>
        )}

        {this.state.showShare === true ? (
          <Invitation
            chosenAlbum={this.props.chosenAlbum}
            hideShare={this.hideShare}
          />
        ) : null}

        {this.state.showPhotos ? (
          <PhotosContainer photos={this.state.photos} />
        ) : null}

        {this.state.showUpload ? (
          <PhotoUploader
            hideUpload={this.hideUpload}
            chosenAlbum={this.props.chosenAlbum}
            getAlbum={this.getAlbum}
          />
        ) : null}
      </div>
    );
  }
}

export default AlbumContent;
