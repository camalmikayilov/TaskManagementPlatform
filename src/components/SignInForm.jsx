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

  // Handling form submission for sign-in
  const handleSubmit = (e) => {
    e.preventDefault();
    // Retrieving and updating signInData from local storage
    var signInData = JSON.parse(localStorage.getItem('signIndata') || "[]");
    signInData.push(signivalues);
    localStorage.setItem('signIndata', JSON.stringify(signInData));
    setShowPopup(true); // Show the pop-up on successful sign-in
  };

  // Handling changes in the sign-in form input fields
  const handleSignIn = (e) => {
    setSignValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // Rendering the sign-in form and pop-up
  return (
    <div>
      <form className="signin-form" onSubmit={handleSubmit}>
        {/* Input fields for sign-in information */}
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
        <button type="submit" className="signin-button"> {/* Button for signing in */}
          Sign In
        </button>
      </form>
      {showPopup && (
        <div className="popup"> {/* Pop-up for successful login */}
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
