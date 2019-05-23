import React, { Component } from "react";
import Dropzone from "react-dropzone";
import request from "superagent";
import api from "../util/api";
import { Form, Label, Container, Segment } from "semantic-ui-react";

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
    description: ""
  };

  onImageDrop = files => {
    debugger;
    this.setState({
      uploadedFile: files[0]
    });
    console.log(this.state.uploadedFile);
    this.handleImageUpload(files[0]);
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    // if in here to make sure the title and description are not blank
    api.newPhoto(
      this.state.uploadedFileCloudinaryUrl,
      this.state.title,
      this.state.description,
      this.props.chosenAlbum.id
    );
    this.resetState();
    this.props.hideUpload();
  };

  resetState = () => {
    this.setState({
      uploadedFileCloudinaryUrl: "",
      uploadedFile: null,
      title: "",
      description: ""
    });
  };

  // superagent will post to cloudinary:
  // . field method allows data to be attached to request
  handleImageUpload = file => {
    // debugger;
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

  render() {
    return (
      <Container text>
        <div className="FileUpload">
          <Dropzone onDrop={this.onImageDrop} accept="image/*" multiple={false}>
            {({ getRootProps, getInputProps }) => {
              return (
                <div {...getRootProps()}>
                  <input {...getInputProps()} />
                  {
                    <Segment size="massive">
                      <p>
                        Drop a file here, or click to select a file to upload.
                      </p>
                    </Segment>
                  }
                </div>
              );
            }}
          </Dropzone>
        </div>

        <div>
          {this.state.uploadedFileCloudinaryUrl === "" ? null : (
            <div>
              <p>{this.state.uploadedFile.name}</p>
              <img
                src={this.state.uploadedFileCloudinaryUrl}
                alt="cloudinary url"
              />
            </div>
          )}
        </div>


        <div className="ui form">
          <Form className="ui form" onSubmit={this.handleSubmit}>
            <Label size="large">Give your new image a title</Label>

            <Form.Input
              required
              className="field"
              type="text"
              placeholder="Image title"
              name="title"
              value={this.state.title}
              onChange={this.handleChange}
            />
            <Label size="large">Give your new image a description:</Label>

            <Form.Input
              required
              className="field"
              type="text"
              placeholder="Image description"
              name="description"
              value={this.state.descripton}
              onChange={this.handleChange}
            />
            <Form.Group inline>
              <Form.Button content="Cancel" onClick={this.props.hideUpload} />
              <Form.Button className="fluid" content="Submit" />
            </Form.Group>
          </Form>
        </div>
      </Container>
    );
  }
}

export default PhotoUploader;
