import React, { Component } from "react";
import Slide from './Slide'
import { Card, Image, Button, Modal, Icon } from "semantic-ui-react";

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
          <Icon name="angle left"/>
          <Modal.Content image>
            <Slide photo={this.props.photo} photoindex={this.props.photoindex} photos={this.props.photos}/>
          </Modal.Content>
        </Modal>
      </Card>
    );
  }
}

export default PhotoCard;
