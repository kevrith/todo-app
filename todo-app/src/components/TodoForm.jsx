import React from 'react';
import { useState } from 'react';

function TodoForm({ onAddTodo }) {
    const [inputValue, setInputValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim()) {
            onAddTodo(inputValue);
            setInputValue('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                className="itemInput"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Enter a todo item"
            />
            <button className="addItemButton" type="submit">Add Item</button>
        </form>
    );
}

export default TodoForm;