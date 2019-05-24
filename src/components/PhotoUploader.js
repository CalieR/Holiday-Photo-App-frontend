import React, { Component } from "react";
import Dropzone from "react-dropzone";
import request from "superagent";
import api from "../util/api";
import { Form, Segment, Icon, Button, Header } from "semantic-ui-react";

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
    // debugger;
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
    api.newPhoto(
      this.state.uploadedFileCloudinaryUrl,
      this.state.title,
      this.state.description,
      this.props.chosenAlbum.id
    );
    this.setState({
      uploadedFileCloudinaryUrl: "",
      uploadedFile: null,
      title: "",
      description: ""
    });
    this.props.hideUpload();
    // this is only working on click not return key

    this.props.getAlbum(this.props.chosenAlbum.id);
    // this.props.showPhotos();
  };

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

  render() {
    return (
      <div>
        <div className="dropzone">
          <Button
            content="Back to photos"
            icon="left arrow"
            labelPosition="left"
            onClick={this.props.hideUpload}
          />
          <Dropzone onDrop={this.onImageDrop} accept="image/*" multiple={false}>
            {({ getRootProps, getInputProps }) => {
              return (
                <div {...getRootProps()}>
                  <input {...getInputProps()} />
                  {
                    <Segment inverted color="olive" tertiary>
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
                <p>{this.state.uploadedFile.name}</p>
                <img
                  src={this.state.uploadedFileCloudinaryUrl}
                  alt="cloudinary url"
                />
              </div>
             
        <div className="ui form new-pic-details">
                <Form className="ui form ">
                 
                <Header >Please give your new image a title and description:</Header>
                  <Form.Input
                    required
                    className="field"
                    type="text"
                    placeholder="Image title"
                    name="title"
                    value={this.state.title}
                    onChange={this.handleChange}
                  />
                  

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
                    <Button onClick={this.handleSubmit}>Submit</Button>
                  </Form.Group>
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
