import { useState } from 'react';

const SignUpForm = () => {
 const [organizationName, setOrganizationName] = useState('');
 const [phoneNumber, setPhoneNumber] = useState('');
 const [address, setAddress] = useState('');
 const [userName, setUserName] = useState('');
 const [email, setEmail] = useState('');
 const [password, setPassword] = useState('');

 const handleSignUp = (e) => {
    e.preventDefault();
    console.log('Sign Up Form Data:', {
      organizationName,
      phoneNumber,
      address,
      userName,
      email,
      password,
    });
 };

 return (
    <form className="signup-form" onSubmit={handleSignUp}>
      <input
        type="text"
        placeholder="Organization Name"
        value={organizationName}
        onChange={(e) => setOrganizationName(e.target.value)}
        className="signup-input"
      />
      <input
        type="text"
        placeholder="Phone Number"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
        className="signup-input"
      />
      <input
        type="text"
        placeholder="Address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        className="signup-input"
      />
      <input
        type="text"
        placeholder="User Name"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
        className="signup-input"
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="signup-input"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="signup-input"
      />
      <button type="submit" className="signup-button">
        Sign Up
      </button>
    </form>
  );
};

export default SignUpForm;