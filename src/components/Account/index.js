import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import { PasswordForgetForm } from '../PasswordForget';
import PasswordChangeForm from '../PasswordChange';
import { withAuthorization } from '../Session';

const AccountPage = () => (
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
    </Container>

    </div>
);
const condition = authUser => !!authUser;
export default withAuthorization(condition)(AccountPage);