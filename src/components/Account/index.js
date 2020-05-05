import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Form from 'react-bootstrap/Form'
import { PasswordForgetForm } from '../PasswordForget';
import PasswordChangeForm from '../PasswordChange';
import { withAuthorization } from '../Session';

const AccountPage = () => (
  <div>
    <Container>
      <h3>Account Settings</h3>

      <br/>
      
      <Form>
      <Form.Group controlId="exampleForm.pwForget">
      <Row>
        <PasswordForgetForm />
      </Row>
      </Form.Group>

      <br/>

      <Form.Group controlId="exampleForm.pwChange">
      <Row>
        <PasswordChangeForm />
      </Row>
      </Form.Group>
      </Form>
    </Container>

    </div>
);
const condition = authUser => !!authUser;
export default withAuthorization(condition)(AccountPage);