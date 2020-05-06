import React, {useState} from 'react';
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import { withAuthorization } from '../Session';

import { toast } from 'react-toastify';

class ProfilePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      aboutMe: 'Please write something about yourself here!'
    };



    this.handleChange = this.handleChange.bind(this);
    this.publish = this.publish.bind(this);
  };

  componentDidMount() {
    this.props.firebase.getAboutMe((aboutMe) => {
      this.setState({aboutMe: aboutMe});
    });
  }
  

  handleChange(e) {
    this.setState({aboutMe: e.target.value});
  }

publish() {
  const textToSave = this.state.aboutMe;
  this.props.firebase.updateAboutMe(textToSave);
  toast("Saved");
  //firebase.collections("UsersInfo").add({AboutMe: this.state.aboutMe});
};

 render = () => (
    <Container>


    <Form>
      <h3>Profile Settings</h3>
      
      <br/>
      
    <Form.Label>Name</Form.Label>
  <Row>
    <Col>
      <Form.Control placeholder="First name" />
    </Col>
    <Col>
      <Form.Control placeholder="Last name" />
    </Col>
  </Row>

  <br/>

  <Form.Group controlId="exampleForm.School">
    <Form.Label>School</Form.Label>
    <Form.Control as="select">
      <option>California State University, Bakersfield</option>
      <option>California State University, Channel Islands</option>
      <option>California State University, Chico</option>
      <option>California State University, Dominguez Hills</option>
      <option>California State University, Fullerton</option>
      <option>California State University, Los Angeles</option>
      <option>University of California, Berkeley</option>
      <option>University of California, Irvine</option>
      <option>University of California, Los Angeles</option>
      <option>University of California, Riverside</option>
      <option>University of California, San Diego</option>
    </Form.Control>
  </Form.Group>


  <br/>

  <Form.Group controlId="exampleForm.Class">
    <Form.Label>Class Level</Form.Label>
    <Form.Control as="select">
      <option>Freshman</option>
      <option>Sophomore</option>
      <option>Junior</option>
      <option>Senior</option>
      <option>Graduate</option>
    </Form.Control>
  </Form.Group>


  <br/>

    <Form.Label>About Me</Form.Label>
      <br/>

      <Form.Group controlId="exampleForm.aboutMe">
      <Form.Control as="textarea" rows="3" value={this.state.aboutMe} onChange={this.handleChange} placeholder="Share a little about yourself">
      </Form.Control>

  </Form.Group>

      <br/>
      <Button variant="light" onClick={this.publish}>
        Publish
        </Button>
</Form>
      
    </Container>

  );
}

const condition = authUser => !!authUser;
export default withAuthorization(condition)(ProfilePage);