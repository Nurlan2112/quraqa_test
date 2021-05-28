import React from 'react';
import {Image} from 'react-bootstrap';
import './PhotosItem.css';

const PhotosItem = ({src}) => {
  return(
    <Image src={src} rounded className="photosItem" />     
  );
};

export default PhotosItem;