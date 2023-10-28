// Importing necessary components and styles
import SignInForm from './components/SignInForm'; // Importing Sign In Form component
import SignUpForm from './components/SignUpForm'; // Importing Sign Up Form component
import TaskManagement from './components/TaskManagement'; // Importing Task Management component
import UserManagement from './components/UserManagement'; // Importing User Management component
import '../src/assets/css/style.css'; // Importing CSS file

// Importing necessary elements from React Router
import { Link, Route, Routes } from 'react-router-dom'; 

// App component
const App = () => {
  return (
    <div>
      {/* Header section */}
      <div>
        <h1>Task Manager App</h1> {/* App title */}
        <Link className="signin-btn" to='/signin'>Sign In</Link> {/* Sign In button */}
        <Link className="signup-btn" to='/signup'>Sign Up</Link> {/* Sign Up button */}
        <Link className="create-org-btn" to='/taskmanage'>Create Organization</Link> {/* Create Organization button */}
        <Link className="create-user-btn" to='/usermanage'>Create User</Link> {/* Create User button */}
        
        {/* Routing section */}
        <Routes>
          <Route path='/signin' element={<SignInForm />} /> {/* Route for Sign In component */}
          <Route path='/signup' element={<SignUpForm />} /> {/* Route for Sign Up component */}
          <Route path='/taskmanage' element={<TaskManagement />} /> {/* Route for Task Management component */}
          <Route path='/usermanage' element={<UserManagement />} /> {/* Route for User Management component */}
        </Routes>

      </div>
    </div>
  );
};

export default App; 
