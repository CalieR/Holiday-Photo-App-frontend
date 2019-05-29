import React, { Component } from "react";
import { Card, Button } from "semantic-ui-react";
import PhotoCard from "./PhotoCard";
import Slideshow from "./Slideshow";

class PhotosContainer extends Component {
  state = {
    clicked: false
  };

  handleClick = () => {
    const toggleClicked = this.state.clicked ? false : true;
    this.setState({
      clicked: toggleClicked
    });
  };

  // only render the switch views element if there are some photos to view:
  render() {
    if (this.props.photos.length !== 0) {
      return (
        <>
        <div className="view-button">
          <Button basic color="teal" onClick={this.handleClick}>
            switch view
          </Button>
          </div>
          {this.state.clicked ? (
            <Slideshow photos={this.props.photos} />
          ) : (
            <Card.Group className="App-container">
              {this.props.photos.map((photo, index) => (
                <PhotoCard
                  key={photo.id}
                  photoindex={index}
                  photo={photo}
                  photos={this.props.photos}
                />
              ))}
            </Card.Group>
          )}
        </>
      );
    } else {
      return null;
    }
  }
}

export default PhotosContainer;
