import React, { Component } from "react";
import { Card, Icon, Image } from "semantic-ui-react";
import album_icon from "../images/album_icon.png";
import AlbumContentPage from "./AlbumContentPage";
import api from "../util/api";

class AlbumCard extends Component {
  state = {};

  handleCardClicked = () => {
    // render the AlbumContentPage component
    console.log("clicked");
    api.getAlbum(this.props.album.id).then(data => {
      console.log(data)
    })
  };

  render() {
    return (
      <Card>
        <Image src={album_icon} wrapped ui={false} />
        <Card.Content>
          <Card.Header
            id={this.props.album.id}
            onClick={this.handleCardClicked}
          >
            {this.props.album.name}
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
