import React, { Component } from "react";
import { Form, Button, Input } from "semantic-ui-react";
import api from "../util/api";

class NewAlbumForm extends Component {
  state = {
    newAlbumName: ""
  };

  handleChange = event => {
    this.setState({
      newAlbumName: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    if (this.state.newAlbumName !== "") {
      api.newAlbum(this.state.newAlbumName).then(data => {
        this.props.refreshMyAlbums(data);
      });
      this.setState({
        newAlbumName: ""
      });
      this.props.clearNewAlbumForm();
    } else {
      alert("Album title cannot be empty");
    }
  };

  render() {
    return (
      <div className="ui form new-album-container">
        <Form className="ui form" onSubmit={this.handleSubmit}>
          <Input
            required
            className="album-name field"
            type="text"
            placeholder="New album name"
            name="name"
            value={this.state.newAlbumName}
            onChange={this.handleChange}
          />
          <Button onClick={this.props.clearNewAlbumForm}>Cancel</Button>
          <Button onClick={this.handleSubmit}>Submit</Button>
        </Form>
      </div>
    );
  }
}

export default NewAlbumForm;
