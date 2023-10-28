// Importing necessary modules
import { createContext, useState } from 'react'; // Importing createContext and useState from React
import PropTypes from 'prop-types'; // Importing PropTypes for type checking
import '../src/assets/css/style.css'; // Importing CSS file

// Creating a TaskContext
export const TaskContext = createContext();

// TaskProvider component
export const TaskProvider = (props) => {
  // Destructuring the children prop from the passed props
  const { children } = props;

  // Initializing state for tasks using useState hook
  const [tasks, setTasks] = useState([]);

  // Returning the TaskProvider component
  return (
    <TaskContext.Provider value={[tasks, setTasks]}>
      {children} 
    </TaskContext.Provider>
  );
};

// PropTypes for type checking
TaskProvider.propTypes = {
  children: PropTypes.node,
};
