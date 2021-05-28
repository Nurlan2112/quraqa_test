import React from 'react';
import PhotosItem from './PhotosItem/PhotosItem';
import './Photos.css';

const Photos = ({photos}) => {
  return(
    <div className="Photos">
      {photos.map(photo => {
        return <PhotosItem key={photo.id}
                           src={photo.url} />
      })}        
    </div>
  );
};

export default Photos;