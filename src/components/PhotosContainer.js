import React, { Component } from "react";
import { Card } from "semantic-ui-react";
import PhotoCard from "./PhotoCard";

class PhotosContainer extends Component {
  state = {};
  render() {
    return (
      <>
        <h3>Photos container</h3>
        <Card.Group>
          {this.props.photos.map(photo => (
            <PhotoCard key={photo.id} photo={photo} />
          ))}
        </Card.Group>
      </>
    );
  }
}

export default PhotosContainer;
