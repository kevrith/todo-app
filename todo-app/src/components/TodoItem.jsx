import React from 'react';
function TodoItem({ todo, onToggleComplete, onRemove }) {
    return (
        <div className={`singleTodoItem ${todo.completed ? 'completed' : ''}`}>
            <span className="todo-text">{todo.text}</span>
            <div>
                <button
                    className="markCompletTodoItem"
                    onClick={() => onToggleComplete(todo.id)}
                >
                    {todo.completed ? 'Undo' : 'Complete'}
                </button>
                <button
                    className="removeTodoItem"
                    onClick={() => onRemove(todo.id)}
                >
                    X
                </button>
            </div>
        </div>
    );
}

export default TodoItem;