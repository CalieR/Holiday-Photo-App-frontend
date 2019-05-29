import React, { Component } from "react";
import { Card, Icon, Divider } from "semantic-ui-react";

class AlbumCard extends Component {
  state = {};

  render() {
    return (
      <Card onClick={() => this.props.handleAlbumChoiceClick(this.props.album)}>
        <Card.Content>
          <Card.Header>
            <Icon name="object ungroup outline" color="grey" size="massive"  />
          </Card.Header>
          <Divider />
          <Card.Header id={this.props.album.id}>
            <Card.Header>{this.props.album.name}</Card.Header>
          </Card.Header>
        </Card.Content>
        <Card.Content extra>
          <Icon name="picture" />
          {this.props.album.photos.length} photos
        </Card.Content>
      </Card>
    );
  }
}

export default AlbumCard;
