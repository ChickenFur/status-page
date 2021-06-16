import * as React from 'react';

const LoginControl = ({ isLoggedIn }) => {
  const login = () => {
    console.log('login will happen');
  };

  const logout = () => {
    console.log('logout now');
  };
  let button;
  if (isLoggedIn) {
    button = <LogoutButton onClick={login} />;
  } else {
    button = <LoginButton onClick={logout} />;
  }

  return <div>Hey {button}. This should work</div>;
};

export default LoginControl;
