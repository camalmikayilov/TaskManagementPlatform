import { useState } from 'react';

const SignInForm = () => {
  const [signivalues, setSignValues] = useState({
    email: '',
    password: ''
  });

  const [showPopup, setShowPopup] = useState(false); // State for managing pop-up visibility

  const handleSubmit = (e) => {
    e.preventDefault();
    var signInData = JSON.parse(localStorage.getItem('signIndata') || "[]");
    signInData.push(signivalues);
    localStorage.setItem('signIndata', JSON.stringify(signInData));
    setShowPopup(true); // Show the pop-up on successful sign-in
  };

  const handleSignIn = (e) => {
    setSignValues((prev) => ({ ...prev, [e.target.name]: e.target.value })); // Fix the handleSignIn function
  };

  return (
    <div>
      <form className="signin-form" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          onChange={handleSignIn}
          className="signin-input"
          name="email"
        />
        <input
          type="password"
          placeholder="Password"
          onChange={handleSignIn}
          className="signin-input"
          name="password"
        />
        <button type="submit" className="signin-button">
          Sign In
        </button>
      </form>
      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <p>Successful Login!</p>
            <button onClick={() => setShowPopup(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SignInForm;
