import React, { useState } from 'react';
import Container from 'react-bootstrap/Container'
import Alert from 'react-bootstrap/Alert'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { withAuthorization } from '../Session';

class Favorites extends React.Component {
    constructor(props) {
        super(props);
    };


    render = () => (
        <Container>
            <Alert variant="warning">
                These are your favorite Roomies!
        </Alert>
            <br />
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://dailytitan.com/wp-content/uploads/2017/08/starbucks.jpg" />
                <Card.Body>
                    <Card.Title>Tuffy Titan</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
    </Card.Text>
                </Card.Body>
            </Card>
            
        </Container>

    );
}

const condition = authUser => !!authUser;
export default withAuthorization(condition)(Favorites);