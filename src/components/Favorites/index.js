import React from 'react';
import Container from 'react-bootstrap/Container'
import ListGroup from 'react-bootstrap/ListGroup'
import Alert from 'react-bootstrap/Alert'
const Favorites = () => (
    <Container>

        <Alert variant="info">

            <Alert.Heading>Favorites</Alert.Heading>
            <p>
                These are your favorited potential roomies!
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


export default Favorites;