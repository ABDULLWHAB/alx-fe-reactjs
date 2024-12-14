import React, { useState } from 'react';

const AddTodoForm = ({ onAddTodo }) => {
  const [newTodo, setNewTodo] = useState('');

  // Handle adding the new todo when button is clicked
  const handleAddClick = () => {
    onAddTodo(newTodo);
    setNewTodo(''); // Clear the input after adding
  };

  return (
    <div>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)} // Update the state as the user types
        placeholder="Add a new todo"
      />
      <button onClick={handleAddClick}>Add Todo</button>
    </div>
  );
};

export default AddTodoForm;

