import React from 'react';
import {Form, Button} from 'react-bootstrap';

const LoginForm = ({login, changeInputHandler, submitHandler}) => {  

  return(
    <div className='LoginForm'>
      <Form onSubmit={(e)=>{submitHandler(e)}}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" 
                        placeholder="Username" 
                        required 
                        name='username'
                        value={login.username}
                        onChange={changeInputHandler} />          
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" 
                        placeholder="Password" 
                        required 
                        name='password'
                        value={login.password}
                        onChange={changeInputHandler}/>
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default LoginForm;