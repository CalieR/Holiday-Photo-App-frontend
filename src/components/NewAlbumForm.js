import React, { Component } from "react";
import { Form, Button, Input } from "semantic-ui-react";
import api from "../util/api";

class NewAlbumForm extends Component {
  state = {
    newAlbumName: "",
    error: "",
    result: "",
    showResult: false
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
        console.log(data.error);
        this.setState({
          error: data.error.name[0],
          result: "That album already exists, please choose another name"
        });
      } else {
        this.props.refreshMyAlbums(data);
        this.setState({
          newAlbumName: "",
          result: "Album created!"
        });
        this.props.clearNewAlbumForm();
      }
    });
    // success doesn't show yet because refreshMyAlbums triggers a rerender
    this.setState({
      showResult: true
    });
    // set this back to false when you click off the page or do any other action
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
          <Button onClick={this.handleSubmit}>Submit</Button>
          <Button onClick={this.props.clearNewAlbumForm}>Cancel</Button>
          {this.state.showResult ? <h3>{this.state.result}</h3> : null}
        </Form>
      </div>
    );
  }
}

export default NewAlbumForm;
