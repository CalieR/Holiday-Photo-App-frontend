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

  render() {
    return (
      <>
        <Button onClick={this.handleClick}>switch views</Button>
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
  }
}

export default PhotosContainer;
