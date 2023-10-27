import { createContext, useState } from 'react';
import PropTypes from 'prop-types';
import '../src/assets/css/style.css';

export const TaskContext = createContext();

export const TaskProvider = (props) => {
  const { children } = props;
  const [tasks, setTasks] = useState([]);

  return (
    <TaskContext.Provider value={[tasks, setTasks]}>
      {children}
    </TaskContext.Provider>
  );
};

TaskProvider.propTypes = {
  children: PropTypes.node,
};
