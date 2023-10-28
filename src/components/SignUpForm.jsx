import { useState } from 'react';

// SignUpForm component
const SignUpForm = () => {

  // State for managing sign up form values
  const [signvalues, setSignValues] = useState({
    email: '',
    password: '',
    username: '',
    address: '',
    phoneNumber: '',
    organizationName: ''
  });

  // Handling form submission for signing up
  const handleSubmit = (e) => {
    e.preventDefault();
    // Retrieving and updating signData from local storage
    var signData = JSON.parse(localStorage.getItem('signdata') || "[]");
    signData.push(signvalues);
    localStorage.setItem('signdata', JSON.stringify(signData));
  };

  // Handling changes in the sign up form input fields
  const handleSignUp = (e) => {
    setSignValues(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // Rendering the sign up form
  return (
    <form className="signup-form" onSubmit={handleSubmit}>
      {/* Input fields for sign up information */}
      <input
        type="text"
        placeholder="Organization Name"
        onChange={handleSignUp}
        className="signup-input"
        name='organizationName'
      />
      <input
        type="text"
        placeholder="Phone Number"
        onChange={handleSignUp}
        className="signup-input"
        name='phoneNumber'
      />
      <input
        type="text"
        placeholder="Address"
        onChange={handleSignUp}
        className="signup-input"
        name='address'
      />
      <input
        type="text"
        placeholder="User Name"
        onChange={handleSignUp}
        className="signup-input"
        name='username'
      />
      <input
        type="email"
        placeholder="Email"
        onChange={handleSignUp}
        className="signup-input"
        name='email'
      />
      <input
        type="password"
        placeholder="Password"
        onChange={handleSignUp}
        className="signup-input"
        name='password'
      />
      <button type="submit" className="signup-button"> {/* Button for signing up */}
        Sign Up
      </button>
    </form>
  );
};

export default SignUpForm;
