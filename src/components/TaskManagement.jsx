import { useState } from 'react';

const TaskManagement = () => {
 const [tasks, setTasks] = useState([]);
 const [title, setTitle] = useState('');
 const [description, setDescription] = useState('');
 const [deadline, setDeadline] = useState('');
 const [status, setStatus] = useState('');

 const handleAddTask = (e) => {
    e.preventDefault();
    const newTask = {
      title,
      description,
      deadline,
      status,
    };
    setTasks([...tasks, newTask]);
 };

 return (
    <form className="task-form" onSubmit={handleAddTask}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="task-input"
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="task-input"
      ></textarea>
      <input
        type="text"
        placeholder="Deadline"
        value={deadline}
        onChange={(e) => setDeadline(e.target.value)}
        className="task-input"
      />
      <input
        type="text"
        placeholder="Status"
        value={status}
        onChange={(e) => setStatus(e.target.value)}
        className="task-input"
      />
      <button type="submit" className="task-button">
        Add Task
      </button>
    </form>
 );
};

export default TaskManagement;