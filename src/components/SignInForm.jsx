import React from 'react';
import PropTypes from 'prop-types';

const SignInForm = ({ signIn }) => {
 const [email, setEmail] = React.useState('');
 const [password, setPassword] = React.useState('');

 const handleSignIn = (e) => {
    e.preventDefault();
    const signInData = {
      email,
      password,
    };
    signIn(signInData);
 };

 return (
    <form className="signin-form" onSubmit={handleSignIn}>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="signin-input"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="signin-input"
      />
      <button type="submit" className="signin-button">
        Sign In
      </button>
    </form>
 );
};

SignInForm.propTypes = {
 signIn: PropTypes.func.isRequired,
};

export default SignInForm;