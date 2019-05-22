import React, { Component } from "react";
import { Form, Label } from "semantic-ui-react";
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
    api.newAlbum(this.state.newAlbumName).then(data => {
      this.props.refreshMyAlbums(data);
    });
    this.setState({
      newAlbumName: ""
    });
    this.props.clearNewAlbumForm();
  };



  render() {

    return (
      <div className="ui form">
        <Form className="ui form" onSubmit={this.handleSubmit}>
          <Label size="massive" pointing="below">
            Give your new album a name
          </Label>

          <Form.Input
            className="field"
            type="text"
            placeholder="Album name"
            name="name"
            value={this.state.newAlbumName}
            onChange={this.handleChange}
          />
          <button onClick={this.props.clearNewAlbumForm} >Cancel</button>
          <Form.Button className="fluid" content="Submit" />
        </Form>
      </div>
    );
  }
}

export default NewAlbumForm;
