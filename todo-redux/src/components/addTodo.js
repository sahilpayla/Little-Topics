import React from 'react'
import '../App.css';

const AddTodo = () => {

    function handleSubmit() {}
    return (
        <>
            <div className="addtodo">
                Add Todo

                <form onSubmit={handleSubmit}>
                    <h1>Add Title</h1>
                    <input type="text" name="todo" placeholder="Add Title" />
                    <h1>Add Description</h1>
                    <input type="text" name="todo" placeholder="Add Description" />
                    <button type="submit">Add</button>
                </form>
            </div>
        </>
    )
}

export default AddTodo