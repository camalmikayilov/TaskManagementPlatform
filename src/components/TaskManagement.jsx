import { useState, useEffect } from "react";

// TaskManagement component
const TaskManagement = () => {
  // State for managing task values
  const [taskvalues, setTaskValues] = useState({
    title: '',
    description: '',
    deadline: '',
    stat: ''
  });

  // State for storing tasks and all task data
  const [tasks, setTasks] = useState([]);
  const [allTaskData, setAllTaskData] = useState([]);

  // Fetching data from local storage on initial render
  useEffect(() => {
    const taskData = JSON.parse(localStorage.getItem('taskdata')) || [];
    setAllTaskData(taskData);
    setTasks(taskData); // Set tasks from localStorage data
  }, []);

  // Handling form submission for adding tasks
  const handleSubmit = (e) => {
    e.preventDefault();
    const taskData = [...allTaskData, taskvalues];
    localStorage.setItem('taskdata', JSON.stringify(taskData));
    setAllTaskData(taskData);
    setTasks(taskData); // Update tasks with the latest data
    setTaskValues({
      title: '',
      description: '',
      deadline: '',
      stat: ''
    });
  };

  // Handling changes in task input fields
  const handleAddTask = (e) => {
    const { name, value } = e.target;
    setTaskValues((prev) => ({ ...prev, [name]: value }));
  };

  // Handling the deletion of a task
  const handleDeleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
    setAllTaskData(updatedTasks);
    localStorage.setItem('taskdata', JSON.stringify(updatedTasks));
  };

  // Handling the addition of a user
  const handleAddUser = () => {
    // Add your logic here for adding a user
    console.log("Add User logic here");
  };

  return (
    <div>
        <form className="task-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          onChange={handleAddTask}
          className="task-input"
          name="title"
          value={taskvalues.title}
        />
        <textarea
          placeholder="Description"
          onChange={handleAddTask}
          className="task-input"
          name="description"
          value={taskvalues.description}
        ></textarea>
        <input
          type="text"
          placeholder="Deadline"
          onChange={handleAddTask}
          className="task-input"
          name="deadline"
          value={taskvalues.deadline}
        />
        <input
          type="text"
          placeholder="Status"
          onChange={handleAddTask}
          className="task-input"
          name="stat"
          value={taskvalues.stat}
        />
        <button type="submit" className="task-button">
          Add Task
        </button>
      </form>
      <div>
        {tasks.length > 0 && (
          <table>
            <thead>
              <tr>
                <th>Title</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {tasks.map((task, index) => (
                <tr key={index}>
                  <td>{task.title}</td>
                  <td>
                    <button onClick={() => handleDeleteTask(index)} className="buttonDelete">Delete</button>
                    <button onClick={handleAddUser} className="buttonAddUser">Add User</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default TaskManagement;
