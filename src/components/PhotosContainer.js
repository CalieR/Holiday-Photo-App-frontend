import React, { Component } from "react";
import PhotoCard from "./PhotoCard";

class PhotosContainer extends Component {
  state = {};
  render() {
    return (
      <>
        <p>I am the photos container, I will render the photos</p>
        {this.props.photos.map(photo => (
          <PhotoCard key={photo.id} photo={photo}>
            
          </PhotoCard>
        ))}
      </>
    );
  }
}

export default PhotosContainer;
