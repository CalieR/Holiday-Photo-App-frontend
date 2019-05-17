// container for all the albums

import React, { Component } from "react";
import AlbumCard from './AlbumCard'

class Albums extends Component {
  state ={ }
 

  render() {
    return <div>

      {this.props.myAlbums.map(album => <AlbumCard key={album.id} album={album}/>)}
    </div>
  }
}

export default Albums;
