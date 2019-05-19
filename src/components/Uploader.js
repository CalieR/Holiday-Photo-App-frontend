import React, { Component } from "react";
import api from "../util/api";

class Uploader extends Component {
  state = {
    image: null,
    title: "",
    description: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onPhotoSubmit = e => {
    e.preventDefault();
    api.newPhoto(this.state.imageUrl, this.state.title, this.state.description);
    // then clear the form
    // then reset the state
  };

  render() {
    return (
      <form>
        <label>New Photo Form:</label>
        <div>
          <label htmlFor="image">Image:</label>
          <input
            onChange={this.handleChange}
            id="image"
            type="file"
            name="image"
          />
          <label htmlFor="title">Title:</label>
          <input
            onChange={this.handleChange}
            id="title"
            type="text"
            name="title"
          />
          <label htmlFor="description">Description:</label>
          <input
            onChange={this.handleChange}
            id="description"
            type="text"
            name="description"
          />
        </div>
        <button onClick={this.onPhotoSubmit}>submit</button>
      </form>
    );
  }
}

export default Uploader;
