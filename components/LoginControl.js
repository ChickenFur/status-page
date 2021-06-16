import * as React from 'react';

const LoginControl = ({ isLoggedIn, login, logout }) => {
  debugger;
  let button;
  if (isLoggedIn) {
    button = <LogoutButton onClick={this.logout} />;
  } else {
    button = <LoginButton onClick={this.login} />;
  }

  return <div>Hey {button}. This should work</div>;
};

export default LoginControl;
