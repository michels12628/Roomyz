import React from 'react';
import { PasswordForgetForm } from '../PasswordForget';
import PasswordChangeForm from '../PasswordChange';
import { withAuthorization } from '../Session';
const AccountPage = () => (
  <div>
    <h1>My Account</h1>

    <PasswordForgetForm />
    <PasswordChangeForm />

    <p> Write your "About Me" here to let others know a little bit about you!</p>
    <body>
        <textarea id="AboutMeBox" AboutMe="AboutMe" placeholder="Write about yourself!" maxLength="250"/>
    <br>
    </br>
    <button onClick = "fn1()" id ="SubmitButton"> Publish </button>
    </body>
  </div>
);
const condition = authUser => !!authUser;
export default withAuthorization(condition)(AccountPage);