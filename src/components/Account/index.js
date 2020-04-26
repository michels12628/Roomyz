import React, {useState} from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import { PasswordForgetForm } from '../PasswordForget';
import PasswordChangeForm from '../PasswordChange';
import { withAuthorization } from '../Session';

import { toast } from 'react-toastify';

class AccountPage extends React.Component {
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
      <h3>Account Settings</h3>
      <Row>
        <PasswordForgetForm />
      </Row>
      <h3> </h3>
      <Row>  
        <PasswordChangeForm />
      </Row>
      
      <br/>
      <label for="About Me">About Me</label>
      <br/>

      <textarea rows="10" cols="30" value={this.state.aboutMe} onChange={this.handleChange} placeholder="Share a little about yourself">
      </textarea>
      <br/>
      <button onClick={this.publish}>
        Publish
        </button>
      <button id= "Delete Accout">
        Delete Account
      </button>
      
    </Container>
    </div>
  );
}

const condition = authUser => !!authUser;
export default withAuthorization(condition)(AccountPage);