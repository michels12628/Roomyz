import React from 'react';
import { withAuthorization } from '../Session';

const HomePage = () => (
  <div>
    <h1>Congratulations! You are now part of the Roomyz community!</h1>
  </div>

);
const condition = authUser => !!authUser;
export default withAuthorization(condition)(HomePage);

