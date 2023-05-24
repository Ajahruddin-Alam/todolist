import React, { useState } from 'react';
import  './App.css';
const TodoApp = () => {
  const [newTask, setNewTask] = useState('');
  const [tasks, setTasks] = useState([]);
  const [folders, setFolders] = useState([]);
  const [selectedFolder, setSelectedFolder] = useState('');

  const handleTaskChange = (e) => {
    setNewTask(e.target.value);
  };

  const handleTaskSubmit = (e) => {
    e.preventDefault();
    if (newTask !== '') {
      setTasks([...tasks, { text: newTask, completed: false }]);
      setNewTask('');
    }
  };

  const handleTaskDelete = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  const handleTaskToggle = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index] = {
      ...updatedTasks[index],
      completed: !updatedTasks[index].completed,
    };
    setTasks(updatedTasks);
  };

  const handleFolderChange = (e) => {
    setSelectedFolder(e.target.value);
  };

  const handleFolderSubmit = (e) => {
    e.preventDefault();
    if (selectedFolder !== '') {
      setFolders([...folders, selectedFolder]);
      setSelectedFolder('');
    }
  };

  return (
    <div className='body'>
      <h1>To-Do List</h1>

      <h2>Add Task</h2>
      <form onSubmit={handleTaskSubmit}>
        <input type="text" placeholder='Add Task' value={newTask} onChange={handleTaskChange} />
        <button type="submit">Add</button>
      </form>

      <h2>Tasks</h2>
      {tasks.length > 0 ? (
        <ul>
          {tasks.map((task, index) => (
            <li
              key={index}
              style={{
                textDecoration: task.completed ? 'line-through' : 'none',
              }}
            >
              {task.text}
              <button onClick={() => handleTaskDelete(index)}>Delete</button>
              <button onClick={() => handleTaskToggle(index)}>Toggle</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No tasks yet.</p>
      )}

      <h2>Add Folder</h2>
      <form onSubmit={handleFolderSubmit}>
        <input type="text" placeholder='Add Folder' value={selectedFolder} onChange={handleFolderChange} />
        <button type="submit">Add</button>
      </form>

      <h2>Folders</h2>
      {folders.length > 0 ? (
        <ul>
          {folders.map((folder, index) => (
            <li key={index}>{folder}</li>
          ))}
        </ul>
      ) : (
        <p>No folders yet.</p>
      )}
    </div>
  );
};

export default TodoApp;
