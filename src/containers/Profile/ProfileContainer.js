import React,{useEffect} from 'react';
import {Spinner} from 'react-bootstrap';
import Profile from '../../components/Profile/Profile';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProfile } from '../../store/actions/profileActions';

const ProfileContainer = () => {
  const dispatch = useDispatch();
  let profile = useSelector(state=>state.profile.profile);
  const isLoading = useSelector(state=>state.profile.isLoading);

  useEffect(()=>{
    dispatch(fetchProfile());
  }, [dispatch]);

  const profileElem = profile ?
                      <Profile name={profile.name}
                               email={profile.email}
                               city={profile.address.city}
                               street={profile.address.street}
                               suite={profile.address.suite}
                               phone={profile.phone}/> :
                      null;

  return(
    <div className="ProfileContainer">
      {isLoading ? <Spinner animation="border" /> :
                   profileElem}
    </div>
  );
};

export default ProfileContainer;