import React from 'react'

const TodoList = ({ todos, deleteTodo, setId }) => {
    return (
        <div className='container text-center '>
            <table className="table table-dark">
                <thead>
                    <tr>
                        <th scope="col">Title</th>
                        <th scope="col">Description</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>

                {
                    todos.map((todo) => (
                        <tbody key={todo.id}>
                            <tr>
                                <td>{todo.title}</td>
                                <td>{todo.description}</td>
                                <td>
                                    <button 
                                        onClick={() => setId(todo.id)}
                                        className='btn btn-warning mx-2 my-2'>Edit</button>
                                    <button
                                        className='btn btn-danger'
                                        onClick={() => deleteTodo(todo.id)}
                                    >   Delete
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    ))
                }


            </table>
        </div>
    )
}

export default TodoList
