import React, { useEffect, useState } from 'react'

const InputForm = ({ setTodos, todos, id, setId }) => {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();

        if (id) {
            updateById(id)
            setId('')
        }
        else {
            const todo = {
                id: Math.random(),
                title,
                description
            }
            setTodos([...todos, todo])
        }
        setId('')
        setTitle('');
        setDescription('');
    }

    useEffect(() => {
        if (id) {
            const updatedData = todos.filter((d) => d.id === id)
            setTitle(updatedData[0].title)
            setDescription(updatedData[0].description)
        }
    }, [id])

    const updateById = (id) => {
        const obj = {
            title,
            description
        }
        setTodos((prevData) => 
        prevData.map((todo) => todo.id === id ? { ...todo, ...obj } : todo))
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="container text-center my-4"  >
                    <input
                        className='mx-2 fw-bold text-center'
                        type="text"
                        placeholder='Title'
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <input
                        className='mx-2 my-2 fw-bold text-center'
                        type="text"
                        placeholder='Description'
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />

                    {
                        id ? (<button className='btn btn-success'>EDIT TODO</button>) :
                            (<button className='btn btn-success'>ADD TODO</button>)
                    }

                </div>
            </form>
        </>
    )
}

export default InputForm
