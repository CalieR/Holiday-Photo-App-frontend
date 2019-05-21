import React, { Component } from "react";
import { Card, Icon, Image } from "semantic-ui-react";
import album_icon from "../images/album_icon.png";

// import api from "../util/api";

class AlbumCard extends Component {
  state = {};


  render() {
    return (
      <Card>
        <Image src={album_icon}  wrapped ui={false} />
        <Card.Content>
          <Card.Header
            id={this.props.album.id}
           
          >
           <Card.Header onClick={() => this.props.handleAlbumChoiceClick(this.props.album)}>{this.props.album.name}</Card.Header>
          </Card.Header>
        </Card.Content>
        <Card.Content extra>
          <Icon name="picture" />
          22 photos
        </Card.Content>
      </Card>
    );
  }
}

export default AlbumCard;
