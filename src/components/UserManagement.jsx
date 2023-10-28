import { useState, useEffect } from "react";

// UserManagement component
const UserManagement = () => {
  const [uservalues, setUserValues] = useState({
    name: "",
    surname: "",
    email: "",
    defaultPassword: "",
  });

  const [addedUsers, setAddedUsers] = useState(
    JSON.parse(localStorage.getItem("addedUsers")) || []
  ); // State to store added users

  useEffect(() => {
    localStorage.setItem("addedUsers", JSON.stringify(addedUsers));
  }, [addedUsers]);

  const handleSubmit = (e) => {
    e.preventDefault();
    var usersData = JSON.parse(localStorage.getItem("usersdata") || "[]");
    usersData.push(uservalues);
    localStorage.setItem("usersdata", JSON.stringify(usersData));
    setAddedUsers([
      ...addedUsers,
      { firstName: uservalues.name, lastName: uservalues.surname },
    ]);
    setUserValues({ name: "", surname: "", email: "", defaultPassword: "" });
  };

  const handleAddUser = (e) => {
    setUserValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div>
      <form className="user-form" onSubmit={handleSubmit}>
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
        <button type="submit" className="user-button">
          Add User
        </button>
      </form>

      {/* Display added users */}
      <div className="added-users">
        {addedUsers.map((user, index) => (
          <div key={index}>
            <p>First Name: {user.firstName}</p>
            <p>Last Name: {user.lastName}</p>
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserManagement;
