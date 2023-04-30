import React, { useState } from "react";
import "./styles.css";

function TodoList() {
    const [todos, setTodos] = useState([]);
    const [editTodo, setEditTodo] = useState({ title: "", description: "", index: -1 });

    function handleSubmit(event) {
        event.preventDefault();

        const newTodo = {
            title: event.target.elements.title.value,
            description: event.target.elements.description.value
        };
        if (editTodo.index === -1) {
            setTodos([...todos, newTodo]);
        } 
        else {
            const updatedTodos = [...todos];
            updatedTodos[editTodo.index] = newTodo;
            setTodos(updatedTodos);
            setEditTodo({ title: "", description: "", index: -1 });
        }
        event.target.reset();
    }

    function handleDelete(index) {
        setTodos(todos.filter((_, i) => i !== index));
    }

    function handleEdit(index) {
        setEditTodo({
            title: todos[index].title,
            description: todos[index].description,
            index
        });
    }

    return (
        <div className="container">
            <h1 className="title">Todo List</h1>
            <form onSubmit={handleSubmit}>
                <div className="input-container">
                    <label htmlFor="title" className="input-label">
                        Title
                    </label>
                    <input type="text" id="title" name="title" placeholder="Enter a title" className="input-field" value={editTodo.title} onChange={(event) => setEditTodo({ ...editTodo, title: event.target.value })} />
                </div>
                <div className="input-container">
                    <label htmlFor="description" className="input-label">
                        Description
                    </label>
                    <textarea id="description" name="description" placeholder="Enter a description" className="input-field" value={editTodo.description} onChange={(event) => setEditTodo({ ...editTodo, description: event.target.value })} />
                </div>
                <button type="submit" className="submit-button">
                    {editTodo.index === -1 ? "Add" : "Update"}
                </button>
            </form>
            <ul className="todo-list">
                {todos.map((todo, index) => (
                    <li key={index} className="todo-item">
                        <div>
                            <h3 className="todo-title">{todo.title}</h3>
                            <p className="todo-description">{todo.description}</p>
                        </div>
                        <div className="button-container">
                            <button onClick={() => handleDelete(index)} className="delete-button">
                                Delete
                            </button>
                            <button onClick={() => handleEdit(index)} className="edit-button">
                                Edit
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TodoList;
