// import React from 'react';
import SignInForm from './components/SignInForm'
import SignUpForm from './components/SignUpForm'
import TaskManagement from './components/TaskManagement'
import UserManagement from './components/UserManagement'
import '../src/assets/css/style.css';
import { Link, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <div>
        <h1>Task Manager App</h1>
        <Link className="signin-btn" to='/signin'>Sign In</Link>
        <Link className="signup-btn" to='/signup'>Sign Up</Link>
        <Link className="create-org-btn" to='/taskmanage'>Create Organization</Link>
        <Link className="create-user-btn" to='/usermanage'>Create User</Link>
        {/* ROUTE QOWMAQ UCUN INDEX.JS -DE PROVIDERI VERIRSEN SORA APP-JSDE IWLEDIRSEN BU FORMA - LINKLERI DE YUXARDAKI BUTONLARA VERDIM ONLA DA GEZINIRSEN ROUTE ARASINDA */}
        <Routes>
          <Route path='/signin' element={<SignInForm />} />
          <Route path='/signup' element={<SignUpForm />} />
          <Route path='/taskmanage' element={<TaskManagement />} />
          <Route path='/usermanage' element={<UserManagement />} />
        </Routes>

      </div>
    </div>
  );
};

export default App;
