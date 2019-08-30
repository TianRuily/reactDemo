import React from 'react';
import { Link as RouterLink, withRouter } from 'react-router-dom';


const SignIn = props => {
  return (
    <div>
      <RouterLink to="/table">home</RouterLink>
      哈哈
    </div>
  );
};


export default withRouter(SignIn);
