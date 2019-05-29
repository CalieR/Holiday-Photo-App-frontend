import React, { Component } from "react";
import Slide from "./Slide";
import { Button, Icon } from "semantic-ui-react";

class Slideshow extends Component {
  state = {
    images: [],
    currentIndex: 0,
    translateValue: 0
  };

  componentDidMount() {
    const urls = this.props.photos.map(photo => photo.image_url);
    this.setState({
      images: urls
    });
  }

  handlePrev = () => {
    // Exiting the method early if we are at the start of the images array.
    if (this.state.currentIndex === 0) {
      return;
    }

    this.setState(prevState => ({
      currentIndex: prevState.currentIndex - 1,
      translateValue: prevState.translateValue + this.slideWidth()
    }));
  };

  handleNext = () => {
    // Exiting the method early if we are at the end of the images array.
    // We also want to reset currentIndex and translateValue, so we return
    // to the first image in the array.
    if (this.state.currentIndex === this.state.images.length - 1) {
      return this.setState({
        currentIndex: 0,
        translateValue: 0
      });
    }

    this.setState(prevState => ({
      currentIndex: prevState.currentIndex + 1,
      translateValue: prevState.translateValue + -this.slideWidth()
    }));
  };

  slideWidth = () => {
    return document.querySelector(".slide").clientWidth;
  };

  render() {
    return (
      <div className="slideshow">
        <div
          className="slider-wrapper"
          style={{
            transform: `translateX(${this.state.translateValue}px)`,
            transition: "transform ease-out 0.45s"
          }}
        >
          {this.state.images.map((image, i) => (
            <Slide key={i} image={image} />
          ))}
        </div>
        <Button
          basic
          icon
          className="back"
          color="teal"
          onClick={this.handlePrev}
        >
          <Icon name="arrow alternate circle left outline" size="big" />
        </Button>
        <Button
          basic
          icon
          className="forward"
          color="teal"
          onClick={this.handleNext}
        >
          <Icon name="arrow alternate circle right outline" size="big" />
        </Button>
      </div>
    );
  }
}

export default Slideshow;
