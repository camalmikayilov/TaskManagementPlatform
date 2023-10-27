// import React from 'react';
import SignInForm from './components/SignInForm'
import SignUpForm from './components/SignUpForm'
import TaskManagement from './components/TaskManagement'
import UserManagement from './components/UserManagement'
import '../src/assets/css/style.css';

const App = () => {
  return (
    <div>
       <div>
       <h1>Task Manager App</h1>
       <button>Sign In</button>
       <button>Sign Up</button>
       <button>Create Organization</button>
       <button>Create User</button>
       <SignInForm />
       <SignUpForm />
       <TaskManagement />
       <UserManagement />
     </div>
    </div>
  );
};

export default App;
