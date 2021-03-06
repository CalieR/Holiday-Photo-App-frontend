import React, { Component } from "react";
import { Form, Button, Input } from "semantic-ui-react";
import api from "../util/api";

class NewAlbumForm extends Component {
  state = {
    newAlbumName: "",
    error: ""
  };

  handleChange = event => {
    this.setState({
      newAlbumName: event.target.value
    });
  };

  // handleSubmit = event => {
  //   event.preventDefault();
  //   if (this.state.newAlbumName !== "") {
  //     api.newAlbum(this.state.newAlbumName).then(data => {
  //       this.props.refreshMyAlbums(data);
  //     });
  //     this.setState({
  //       newAlbumName: ""
  //     });
  //     this.props.clearNewAlbumForm();
  //   } else {
  //     alert("Album title cannot be empty");
  //   }
  // };

  handleSubmit = event => {
    event.preventDefault();
    api.newAlbum(this.state.newAlbumName).then(data => {
      if (data.error) {
        // console.log(data.error);
        this.setState({
          error: data.error
        });
      } else {
        this.props.refreshMyAlbums(data);
        this.setState({
          newAlbumName: ""
        });
        this.props.clearNewAlbumForm();
      }
    });
  };

  render() {
    return (
      <div className="ui form new-album-container">
        <Form className="ui form" onSubmit={this.handleSubmit}>
          <Input
            autoComplete="off"
            required
            fluid
            className="album-name field"
            type="text"
            placeholder="New album name"
            name="name"
            value={this.state.newAlbumName}
            onChange={this.handleChange}
          />
          <Button color="teal" onClick={this.handleSubmit}>
            Submit
          </Button>
          <Button color="teal" onClick={this.props.clearNewAlbumForm}>
            Cancel
          </Button>
          {this.state.error !== "" ? <h3>{this.state.error}</h3> : null}
        </Form>
      </div>
    );
  }
}

export default NewAlbumForm;
