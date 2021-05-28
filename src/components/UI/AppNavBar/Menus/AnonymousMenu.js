import React from 'react';
import {Nav} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';

const AnonymousMenu = () => {
  return(
    <LinkContainer to='/login'>
      <Nav.Link >Вход</Nav.Link>
    </LinkContainer>
  );
};

export default AnonymousMenu;