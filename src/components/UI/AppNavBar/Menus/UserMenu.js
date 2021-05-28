import React from 'react';
import {Nav} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';

const UserMenu = ({logoutHandler}) => {
  return(
    <>
      <LinkContainer to='/profile'>
        <Nav.Link >Профиль</Nav.Link>
      </LinkContainer>
      <LinkContainer to='/login'>
        <Nav.Link onClick={logoutHandler}>Выход</Nav.Link>
      </LinkContainer>
    </>
  );
};

export default UserMenu;