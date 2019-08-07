import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import Input from './Input';
import Register from './Registration';
import '../stylesheets/login.scss';

const propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleSignIn: PropTypes.func.isRequired,
  loginFields: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    }),
  ).isRequired,
  handleRegisterInput: PropTypes.func.isRequired,
  handleRegistration: PropTypes.func.isRequired,
  registrationFields: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

const Login = ({
  handleChange,
  handleSignIn,
  handleRegisterInput,
  handleRegistration,
  loginFields,
  registrationFields,
}) => (
  <div className="form-field">
    <Input handleChange={handleChange} fields={loginFields} />
    <Button classname="button" handleClick={handleSignIn} name="Sign In" />
    <div className="form-field">
      <Register
        registrationFields={registrationFields}
        handleRegister={handleRegistration}
        registrationInput={handleRegisterInput}
      />
    </div>
  </div>
);

Login.propTypes = propTypes;

export default Login;
