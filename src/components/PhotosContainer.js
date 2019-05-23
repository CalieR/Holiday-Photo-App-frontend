import React, { Component } from "react";
import { Card } from "semantic-ui-react";
import PhotoCard from "./PhotoCard";


class PhotosContainer extends Component {
  state = {};
  render() {
    return (
      <>
     
        <h3>{this.props.photos.length} Photos in this album:</h3>
        <Card.Group className="App-container">
          {this.props.photos.map(photo => (
            <PhotoCard key={photo.id} photo={photo} />
          ))}
        </Card.Group>
      </>
    );
  }
}

export default PhotosContainer;
