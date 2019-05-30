import React, { Component } from "react";
import { Card, Button } from "semantic-ui-react";
import PhotoCard from "./PhotoCard";
import Slideshow from "./Slideshow";

class PhotosContainer extends Component {
  state = {
    clicked: false,
    buttonText: "View photo slideshow"
  };

  handleClick = () => {
    const changeView = this.state.clicked ? false : true;
    const changeText =
      this.state.buttonText === "View photo slideshow"
        ? "View photo list"
        : "View photo slideshow";
    this.setState({
      clicked: changeView,
      buttonText: changeText
    });
  };

  // only render the switch views element if there are some photos to view:
  render() {
    if (this.props.photos.length !== 0) {
      return (
        <>
          <div className="view-button">
            <Button
              basic
              color="teal"
              icon="exchange"
              labelPosition="left"
              content={this.state.buttonText}
              onClick={this.handleClick}
            />
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
