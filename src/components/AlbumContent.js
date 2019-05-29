import React, { Component } from "react";
import PhotosContainer from "./PhotosContainer";
import PhotoUploader from "./PhotoUploader";
import api from "../util/api";
import Invitation from "./Invitation";
import { Button, Modal } from "semantic-ui-react";

class AlbumContent extends Component {
  state = {
    photos: [],
    showShare: false,
    showUpload: false,
    showPhotos: true,
    creator: "",
    userCount: 0,
    users: [],
    loading: true
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
      // debugger;
      this.setState({
        photos: data.album.photos,
        creator: data.creator,
        users: data.album.users,
        userCount: data.album.users.length,
        loading: false
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
  };

  hideUpload = () => {
    this.setState({
      showUpload: false,
      showPhotos: true
    });
  };

  render() {
    return (
      <div>
        <Modal
          trigger={
            <Button
              color="teal"
              icon="question"
              labelPosition="left"
              content="About this album"
            />
          }
          closeIcon
          centered
        >
          <Modal.Header>{this.props.chosenAlbum.name}</Modal.Header>
          <Modal.Content>
            <h4>Created by {this.state.creator}</h4>
            <h4>How many photos? {this.state.photos.length} </h4>
            <h4>Users sharing this album: {this.state.userCount} </h4>
            {this.state.users.map(user => (
              <p key={user.id}>{user.username}</p>
            ))}
          </Modal.Content>
        </Modal>
        <Button
          color="teal"
          icon="share"
          labelPosition="left"
          content="Share this album with another user"
          onClick={() => this.showShare()}
        />
        <Button
          color="teal"
          content="Back to my albums"
          icon="left arrow"
          labelPosition="left"
          onClick={this.props.resetAlbumChoice}
        />
        <Button
          color="teal"
          content="Upload a photo to this album"
          icon="add"
          labelPosition="left"
          onClick={this.showUpload}
        />

        {this.state.loading ? null : this.state.photos.length === 0 ? (
          <h1>This album is empty!</h1>
        ) : null}

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
