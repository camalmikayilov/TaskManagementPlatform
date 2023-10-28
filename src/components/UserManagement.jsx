import { useState } from "react";

const UserManagement = () => {
  //  const [name, setName] = useState('');
  //  const [surname, setSurname] = useState('');
  //  const [email, setEmail] = useState('');
  //  const [defaultPassword, setDefaultPassword] = useState('');

  const [uservalues, setUserValues] = useState({
    name: "",
    surname: "",
    email: "",
    defaultPassword: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    var usersData = JSON.parse(localStorage.getItem("usersdata") || "[]");
    usersData.push(uservalues);
    localStorage.setItem("usersdata", JSON.stringify(usersData));
  };

  const handleAddUser = (e) => {
    setUserValues((prev) => ({ ...prev, [e.target.name]: [e.target.value] }));
  };

  return (
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
  );
};

export default UserManagement;
