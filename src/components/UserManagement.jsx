import { useState } from 'react';
import PropTypes from 'prop-types';

const UserManagement = ({ users, setUsers }) => {
 const [name, setName] = useState('');
 const [surname, setSurname] = useState('');
 const [email, setEmail] = useState('');
 const [defaultPassword, setDefaultPassword] = useState('');

 const handleAddUser = (e) => {
    e.preventDefault();
    const newUser = {
      name,
      surname,
      email,
      defaultPassword,
    };
    setUsers([...users, newUser]);
 };

 return (
    <form className="user-form" onSubmit={handleAddUser}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="user-input"
      />
      <input
        type="text"
        placeholder="Surname"
        value={surname}
        onChange={(e) => setSurname(e.target.value)}
        className="user-input"
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="user-input"
      />
      <input
        type="password"
        placeholder="Default Password"
        value={defaultPassword}
        onChange={(e) => setDefaultPassword(e.target.value)}
        className="user-input"
      />
      <button type="submit" className="user-button">
        Add User
      </button>
    </form>
 );
};

UserManagement.propTypes = {
 users: PropTypes.array,
 setUsers: PropTypes.func,
};

export default UserManagement;