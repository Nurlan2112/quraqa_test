import React from 'react';
import {Card} from 'react-bootstrap';
import './PostsItem.css';

const PostsItem = ({title, name, body}) => {
  return(
      <Card className='PostsItem'>
        <Card.Body style={{textAlign: 'start'}}>
          <Card.Title style={{textTransform: 'capitalize'}}>{title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{name}</Card.Subtitle>
          <Card.Text>
            {body}
          </Card.Text>          
        </Card.Body>
      </Card>
  );
};

export default PostsItem;