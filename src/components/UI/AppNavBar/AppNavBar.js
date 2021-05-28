import React from 'react';
import { Navbar, Nav, Form } from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import UserMenu from './Menus/UserMenu';
import AnonymousMenu from './Menus/AnonymousMenu';
import {logOutUser} from '../../../store/actions/userActions';

const AppNavBar = () => {
  const dispatch = useDispatch();
  const isAuthorized = useSelector(state=>state.user.isAuthorized);

  const logoutHandler = () => {
    dispatch(logOutUser());
  }

  return(
    <Navbar bg="dark" variant="dark">
      <LinkContainer to='/'>
        <Navbar.Brand>Logo</Navbar.Brand>
      </LinkContainer>      
      <Nav className="mr-auto">
        <LinkContainer to='/'>
          <Nav.Link>На главную</Nav.Link>
        </LinkContainer>  
        <LinkContainer to='/posts'>
          <Nav.Link >Посты</Nav.Link>
        </LinkContainer>        
      </Nav>
      <Form inline>
        {isAuthorized ? <UserMenu logoutHandler={logoutHandler}/> : <AnonymousMenu />}
      </Form>
    </Navbar>
  );
};

export default AppNavBar;