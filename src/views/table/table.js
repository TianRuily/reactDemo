import React from 'react';
import { Link as RouterLink, withRouter } from 'react-router-dom';


const SignIn = props => {
  return (
    <div>
      <RouterLink to="/">table</RouterLink>
      表格
    </div>
  );
};


export default withRouter(SignIn);
