import React from 'react';
import Container from 'react-bootstrap/Container'
import ListGroup from 'react-bootstrap/ListGroup'
import Alert from 'react-bootstrap/Alert'
import { withAuthorization } from '../Session';


const HomePage = () => (
  
  <Container>

<Alert variant="info">

<Alert.Heading>Welcome back!</Alert.Heading>
            <p>
                Check out these cool roomies.
  </p>
        </Alert>
  <ListGroup variant="flush">
  <ListGroup.Item>User profile picture, display name, class of 2020</ListGroup.Item>
  <ListGroup.Item>User profile picture, display name, class of 2020</ListGroup.Item>
  <ListGroup.Item>User profile picture, display name, class of 2020</ListGroup.Item>
  <ListGroup.Item>User profile picture, display name, class of 2020</ListGroup.Item>
</ListGroup>
</Container>
);
const condition = authUser => !!authUser;
export default withAuthorization(condition)(HomePage);

