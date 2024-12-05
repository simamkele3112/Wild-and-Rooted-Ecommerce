import React, { useState } from 'react';

function Input({onSubmit}){
    const [taskTitle, setTaskTitle] = useState('');

    const handleChange = (event) => {
        setTaskTitle(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (taskTitle.trim()) {
        onSubmit(taskTitle);  // Calling addTask with the title of the new task
        setTaskTitle('');  // Clear the input field after submission
        }
    };
  return(
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={taskTitle}
        onChange={handleChange}
        placeholder="Enter new order"
      />
      <button type="submit">Add Order</button>
    </form>
  )
}

export default Input