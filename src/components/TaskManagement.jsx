import { useState } from "react";

const TaskManagement = () => {
  const [taskvalues, setTaskValues] = useState({
    title: '',
    description: '',
    deadline: '',
    stat: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    var taskData = JSON.parse(localStorage.getItem('taskdata')) || [];
    taskData.push(taskvalues);
    localStorage.setItem('taskdata', JSON.stringify(taskData));
  };

  const handleAddTask = (e) => {
    const { name, value } = e.target;
    setTaskValues((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        onChange={handleAddTask}
        className="task-input"
        name="title"
      />
      <textarea
        placeholder="Description"
        onChange={handleAddTask}
        className="task-input"
        name="description"
      ></textarea>
      <input
        type="text"
        placeholder="Deadline"
        onChange={handleAddTask}
        className="task-input"
        name="deadline"
      />
      <input
        type="text"
        placeholder="Status"
        onChange={handleAddTask}
        className="task-input"
        name="stat"
      />
      <button type="submit" className="task-button">
        Add Task
      </button>
    </form>
  );
};

export default TaskManagement;
