import { useState } from 'react';

const SignInForm = () => {

  const [signivalues, setSignValues] = useState({
  email: '',
  password: ''
  })

 const handleSubmit = (e) => {
    e.preventDefault();
      var signInData  = JSON.parse(localStorage.getItem('signIndata') || "[]");
      signInData.push(signivalues)
      localStorage.setItem('signIndata', JSON.stringify(signInData))
    }
    
    const handleSignIn = (e) => {
      setSignValues(prev => ({...prev, [e.target.name]: [e.target.value] }))
    };

 return (
    <form className="signin-form" onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="Email"
        onChange={handleSignIn}
        className="signin-input"
        name='email'
      />
      <input
        type="password"
        placeholder="Password"
        onChange={handleSignIn}
        className="signin-input"
        name='password'
      />
      <button type="submit" className="signin-button">
        Sign In
      </button>
    </form>
 );
};

export default SignInForm;