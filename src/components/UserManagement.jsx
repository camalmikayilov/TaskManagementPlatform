import { useState } from "react";

// UserManagement component
const UserManagement = () => {

  // Setting initial state for user values using useState hook
  const [uservalues, setUserValues] = useState({
    name: "",
    surname: "",
    email: "",
    defaultPassword: "",
  });

  // Handling form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Retrieving and updating usersData from local storage
    var usersData = JSON.parse(localStorage.getItem("usersdata") || "[]");
    usersData.push(uservalues);
    localStorage.setItem("usersdata", JSON.stringify(usersData));
  };

  // Handling user input changes
  const handleAddUser = (e) => {
    setUserValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // Rendering the form
  return (
    <form className="user-form" onSubmit={handleSubmit}>
      {/* Input fields for user information */}
      <input
        type="text"
        placeholder="Name"
        onChange={handleAddUser}
        className="user-input"
        name="name"
      />
      <input
        type="text"
        placeholder="Surname"
        onChange={handleAddUser}
        className="user-input"
        name="surname"
      />
      <input
        type="email"
        placeholder="Email"
        onChange={handleAddUser}
        className="user-input"
        name="email"
      />
      <input
        type="password"
        placeholder="Default Password"
        onChange={handleAddUser}
        className="user-input"
        name="defaultPassword"
      />
      <button type="submit" className="user-button"> {/* Button for adding user */}
        Add User
      </button>
    </form>
  );
};

export default UserManagement;
