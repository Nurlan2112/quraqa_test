import React from 'react';
import {Alert} from 'react-bootstrap';
import './ErrorAlert.css';

const ErrorAlert = ({closeAlert, errorMessage}) => {
    
    return (
      <Alert variant="danger" onClose={closeAlert} dismissible className='ErrorAlert'>
        <p>
          {errorMessage}
        </p>
      </Alert>
    );  
}

export default ErrorAlert;