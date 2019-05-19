import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import request from 'superagent';


// Setup Rail configuration with your cloudinary keys
//https://cloudinary.com/documentation/rails_integration#configuration

// Create your ruby file api upload end point - POST api/photos/upload (userId, title, description, file: base64 encoded file data)
// https://cloudinary.com/documentation/image_upload_api_reference

// Build react-dropzone component here
// https://github.com/react-dropzone/react-dropzone

DropZone = function useDropZone(onDrop) {
    postMessage('api/photos/upload', {
        "user_id": 123,
        "title": "My new photo",
        "description": "A photo taken of me at the weekend",
        "file": "base64 encoded file data"
    })
}