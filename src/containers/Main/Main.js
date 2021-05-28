import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Spinner} from 'react-bootstrap';
import Photos from '../../components/Photos/Photos';
import { fetchPhotos } from '../../store/actions/photosActions';

const Main = () => {
  const dispatch = useDispatch();
  const photos = useSelector(state=>state.photos.photos);
  const isLoading = useSelector(state=>state.photos.isLoading);

  useEffect(() => {
    dispatch(fetchPhotos());
  }, [dispatch]);

  return(
    <div className="Main">
      {isLoading ? 
                <Spinner animation="border" /> :
                <Photos photos = {photos}/> }
    </div>
  );
};

export default Main;