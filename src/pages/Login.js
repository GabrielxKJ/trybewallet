import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <div>
        <h1>Login</h1>
        <form>
          <input type="email" placeholder="email" data-testid="email-input" />
          <input type="password" placeholder="password" data-testid="password-input" />
          <button type="button">Entrar</button>
        </form>
      </div>);
  }
}

export default Login;
