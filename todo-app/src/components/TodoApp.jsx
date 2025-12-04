import React from 'react';
import { useState } from 'react';
import TodoItem from './TodoItem.jsx';
import TodoForm from './TodoForm.jsx';

function TodoApp () {
    const [todos, setTodos] = useState([]);

    const addTodo = (text) => {
        const newTodo = {
            id: Date.now(),
            text: text,
            completed: false
        };
        setTodos([...todos, newTodo]);
    };

    const toggleComplete = (id) => {
        setTodos(todos.map(todo =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        ));
    };

    const removeTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    return (
        <div className="app">
            <h1>Todo App</h1>
            <TodoForm onAddTodo={addTodo} />
            <div className="todo-alist">
                {todos.map(todo => (
                    <TodoItem
                        key={todo.id}
                        todo={todo}
                        onToggleComplete={toggleComplete}
                        onRemove={removeTodo}
                    />
                ))}
            </div>
        </div>
    );
}

export default TodoApp;