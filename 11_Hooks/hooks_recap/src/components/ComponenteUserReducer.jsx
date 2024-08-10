import React from 'react'
import { useState } from 'react'
import { useReducer } from 'react'

const ComponenteUserReducer = () => {
    const [number, dispatch] = useReducer(
        (state, action) => {
            return Math.random(state)
        }
    )

    const initialTasks = [
        { id: 1, text: "task 1" },
        { id: 2, text: "task 2" },
    ]

    const [taskText, setTaskText] = useState("");

    const taskReducer = (state, action) => {
        switch (action.type) {
            case "ADD":
                const newTask = {
                    id: Math.random(),
                    text: taskText,
                }
                setTaskText("")
                return [...state, newTask]
            case "DELETE":
                return state.filter((task) => task.id !== action.id)
            default:
                return state
        }
    }

    const [tasks, disatchTasks] = useReducer(taskReducer, initialTasks)

    const handleSubmit = (e) => {
        e.preventDefault();
        disatchTasks({ type: "ADD" })
    }

    const removeTask = (id) => {
        disatchTasks({ type: "DELETE", id })
    }

    return (
        <div>
            <h2>ComponenteUserReducer</h2>
            <p>Número: {number}</p>
            <button onClick={dispatch}>Alterar numero</button>
            <h3>Tarefas</h3>
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={(e) => setTaskText(e.target.value)} value={taskText} />
                <button type='submit'>enviar</button>
            </form>
            {tasks.map((task) => (
                <li key={task.id} onDoubleClick={() => removeTask(task.id)}>{task.text}</li>
            ))}
            <hr />
        </div>
    )
}

export default ComponenteUserReducer