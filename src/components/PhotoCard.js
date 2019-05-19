import React, { Component } from "react";
import { Card, Image } from "semantic-ui-react";

class PhotoCard extends Component {
  state = {};
  render() {
    return (
      <Card>
        <Image
          src={this.props.photo.image_url}
          alt={this.props.photo.description}
          wrapped
          ui={false}
        />
        <Card.Content>
          <Card.Header>{this.props.photo.title}</Card.Header>

          <Card.Description>{this.props.photo.description}</Card.Description>
        </Card.Content>
      </Card>
    );
  }
}

export default PhotoCard;
