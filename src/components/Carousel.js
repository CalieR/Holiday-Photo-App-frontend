import React, { Component } from "react";
// import { Card, Image } from "semantic-ui-react";
import Siema from "react-siema";
// import PhotoCard from "./PhotoCard";


class Carousel extends Component {
  state = {
      
  };
  

  prev = () => {
    this.siema.prev();
  };

  next = () => {
    this.siema.next();
  };


  render() {
    const Slide = (props) => <img {...props} alt="slide" />
    return (
      <div>
        <div className="siema">
          {this.props.photos.map(photo => (
            <Siema>
              <Slide src={photo.image_url} />
            </Siema>
          ))}
        </div>
        <button onClick={this.prev}>Prev</button>
        <button onClick={this.next}>Next</button>
      </div>
    );
  }
}

export default Carousel;
