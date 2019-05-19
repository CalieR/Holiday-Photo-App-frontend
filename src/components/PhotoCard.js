import React, { Component } from 'react';

class PhotoCard extends Component {
    state = {  }
    render() { 
        
        return ( 
            <>
            <p>I will render an individual photo</p>
            <p>{this.props.photo.title}</p>
            <img src={this.props.photo.image_url} alt={this.props.photo.description}></img>
            </>
         );
    }
}
 
export default PhotoCard;