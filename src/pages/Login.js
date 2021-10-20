import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import emailDispatch from '../actions';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      inputEmail: '',
      inputPassword: '',
      inputButton: true,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange({ target }) {
    // referencia de https://www.horadecodar.com.br/2020/09/13/como-validar-email-com-javascript/
    const { inputEmail, inputPassword } = this.state;
    const validateEmail = (email) => {
      const re = /\S+@\S+\.\S+/;
      return re.test(email);
    };
    const charNumber = 4;
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
    if (inputPassword.length > charNumber && validateEmail(inputEmail)) {
      this.setState({
        inputButton: false,
      });
    } else {
      this.setState({
        inputButton: true,
      });
    }
  }

  handleSubmit(event) {
    const { inputEmail } = this.state;
    const { history, emailDispatchAction } = this.props;
    emailDispatchAction(inputEmail);
    history.push('/carteira');
    event.preventDefault();
  }

  render() {
    const { inputEmail, inputPassword, inputButton } = this.state;
    return (
      <div>
        <h1>Login</h1>
        <form>
          <input
            type="email"
            name="inputEmail"
            placeholder="email"
            data-testid="email-input"
            value={ inputEmail }
            onChange={ this.handleChange }
          />
          <input
            type="password"
            name="inputPassword"
            placeholder="password"
            data-testid="password-input"
            value={ inputPassword }
            onChange={ this.handleChange }
          />
          <button
            type="submit"
            disabled={ inputButton }
            onClick={ this.handleSubmit }
          >
            Entrar

          </button>
        </form>
      </div>);
  }
}

const mapDispatchToProps = (dispatch) => ({
  emailDispatchAction: (email) => dispatch(emailDispatch(email)),
});

Login.propTypes = {
  emailDispatchAction: PropTypes.func.isRequired,
  history: PropTypes.objectOf(Object).isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
