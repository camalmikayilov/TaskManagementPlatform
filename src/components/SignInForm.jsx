import { useState } from 'react';

// SignInForm component
const SignInForm = () => {
  // State for managing sign-in form values
  const [signivalues, setSignValues] = useState({
    email: '',
    password: ''
  });

  // State for managing pop-up visibility
  const [showPopup, setShowPopup] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  // Handling form submission for sign-in
  const handleSubmit = (e) => {
    e.preventDefault();
    if (signivalues.password.length < 6) {
      setShowAlert(true);
    } else {
      // Retrieving and updating signInData from local storage
      var signInData = JSON.parse(localStorage.getItem('signIndata') || "[]");
      signInData.push(signivalues);
      localStorage.setItem('signIndata', JSON.stringify(signInData));
      setShowPopup(true); // Show the pop-up on successful sign-in
    }
  };

  // Handling changes 
  const handleSignIn = (e) => {
    if (e.target.name === 'password' && e.target.value.length < 6) {
      setShowAlert(true);
    } else {
      setSignValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
      setShowAlert(false);
    }
  };

  return (
    <div>
      {showAlert && (
        <div className="alert">
          Password should be at least 6 characters long and alphanumeric
        </div>
      )}
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
