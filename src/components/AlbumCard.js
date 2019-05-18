import React, { Component } from "react";
import { Card, Icon, Image } from "semantic-ui-react";
import album_icon from '../images/album_icon.png'

class AlbumCard extends Component {
  state = {};
  render() {
    return (
      <Card>
        <Image
          src={album_icon}
          wrapped
          ui={false}
        />
        <Card.Content>
          <Card.Header>{this.props.album.name}</Card.Header>
          {/* <Card.Meta>
        <span className='date'>Joined in 2015</span>
      </Card.Meta> */}
          
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
