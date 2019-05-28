import React, { Component } from "react";

import { Card, Image, Button, Modal } from "semantic-ui-react";

// add a modal to this component to expand the image
// if that works, consider side scrolling for all images in an album
class PhotoCard extends Component {
  render() {
    return (
      <Card key={this.props.photo.id} photoindex={this.props.photoindex}>
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
        <Modal
          trigger={<Button>Show Full Size</Button>}
          closeIcon
          centered
          className="modal-overlay"
        >
          <Modal.Header>{this.props.photo.title}</Modal.Header>
          <Modal.Content image>
            <Image className="modal-img" src={this.props.photo.image_url} photo={this.props.photo} />
          </Modal.Content>
        </Modal>
      </Card>
    );
  }
}

export default PhotoCard;
