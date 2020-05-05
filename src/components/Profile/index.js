import React, {useState} from 'react';
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
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
  <div>
    <Container>


    <Form>
      <h3>Profile Settings</h3>
      
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
    </div>
  );
}

const condition = authUser => !!authUser;
export default withAuthorization(condition)(ProfilePage);