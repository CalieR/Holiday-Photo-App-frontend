import React, { Component } from "react";
import Dropzone from "react-dropzone";
import request from "superagent";
import api from "../util/api";
import {
  Form,
  Segment,
  Icon,
  Button,
  Header,
  Input,
  TextArea
} from "semantic-ui-react";

const CLOUDINARY_UPLOAD_PRESET = "wc5u6xxi";
const CLOUDINARY_UPLOAD_URL =
  "https://api.cloudinary.com/v1_1/dd6reuxvl/upload";

// Setup Rail configuration with your cloudinary keys
//https://cloudinary.com/documentation/rails_integration#configuration

// Create your ruby file api upload end point - POST api/photos/upload (userId, title, description, file: base64 encoded file data)
// https://cloudinary.com/documentation/image_upload_api_reference

class PhotoUploader extends Component {
  state = {
    uploadedFileCloudinaryUrl: "",
    uploadedFile: null,
    title: "",
    description: "",
    error: "",
    creator: ""
  };

  onImageDrop = files => {
    // debugger;
    this.setState({
      uploadedFile: files[0]
    });
    // console.log(this.state.uploadedFile);
    this.handleImageUpload(files[0]);
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  // handleSubmit = e => {
  //   if ((this.state.title !== "") & (this.state.description !== "")) {
  //     e.preventDefault();
  //     api.newPhoto(
  //       this.state.uploadedFileCloudinaryUrl,
  //       this.state.title,
  //       this.state.description,
  //       this.props.chosenAlbum.id
  //     );
  //     this.setState({
  //       uploadedFileCloudinaryUrl: "",
  //       uploadedFile: null,
  //       title: "",
  //       description: ""
  //     });
  //     this.props.hideUpload();
  //     this.props.getAlbum(this.props.chosenAlbum.id);
  //     // this.props.showPhotos();
  //   } else {
  //     alert("Title and description must both be completed.");
  //   }
  // };

  // superagent will post to cloudinary:
  // . field method allows data to be attached to request
  handleImageUpload = file => {
    let upload = request
      .post(CLOUDINARY_UPLOAD_URL)
      .field("upload_preset", CLOUDINARY_UPLOAD_PRESET)
      .field("file", file);
    // .end performs the request, a callback is provided
    upload.end((err, response) => {
      if (err) {
        console.error(err);
      }
      if (response.body.secure_url !== "") {
        this.setState({
          uploadedFileCloudinaryUrl: response.body.secure_url
        });
      }
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    api
      .newPhoto(
        this.state.uploadedFileCloudinaryUrl,
        this.state.title,
        this.state.description,
        this.props.chosenAlbum.id
      )
      .then(data => {
        if (data.error) {
          this.setState({
            error: data.error
          });
        } else {
          this.setState({
            uploadedFileCloudinaryUrl: "",
            uploadedFile: null,
            title: "",
            description: "",
            creator: data.creator
          });
          // some method to pass the creator to the album content
          this.props.hideUpload();
          this.props.getAlbum(this.props.chosenAlbum.id);
          // this.props.showPhotos();
        }
      });
  };

  render() {
    return (
      <div className="upload-container">
        <Button
          basic
          content="Back to photos"
          icon="left arrow"
          labelPosition="left"
          onClick={this.props.hideUpload}
        />
        <div className="dropzone">
          <Dropzone onDrop={this.onImageDrop} accept="image/*" multiple={false}>
            {({ getRootProps, getInputProps }) => {
              return (
                <div {...getRootProps()}>
                  <input {...getInputProps()} />
                  {
                    <Segment placeholder textAlign="center" secondary circular>
                      <h3>
                        Drop a file here, or click to select a file from your
                        computer.
                      </h3>
                      <Icon name="add" size="big" />
                    </Segment>
                  }
                </div>
              );
            }}
          </Dropzone>
        </div>

        <div>
          {this.state.uploadedFileCloudinaryUrl === "" ? null : (
            <>
              <div className="uploaded-image-preview">
                <img
                  src={this.state.uploadedFileCloudinaryUrl}
                  alt="cloudinary url"
                />
              </div>

              <div className="ui form new-pic-details">
                <Form className="ui form ">
                  <Header>Please give your new image a title:</Header>
                  <Input
                    fluid
                    required
                    className="field"
                    type="text"
                    placeholder="Image title"
                    name="title"
                    value={this.state.title}
                    onChange={this.handleChange}
                  />
                  <Header>
                    Describe this image...who is in the picture, where was it
                    taken?
                  </Header>
                  <TextArea
                    required
                    className="field"
                    type="text"
                    placeholder="Image descrption"
                    name="description"
                    value={this.state.descripton}
                    onChange={this.handleChange}
                  />
                  <div>
                    <Button color="teal" onClick={this.handleSubmit}>
                      Submit
                    </Button>
                    {this.state.error !== ""
                      ? this.state.error.map((error, index) => (
                          <h3 key={index}>{error}!</h3>
                        ))
                      : null}
                  </div>
                </Form>
              </div>
            </>
          )}
        </div>
      </div>
    );
  }
}

export default PhotoUploader;
