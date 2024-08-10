import React from 'react'
import { useState } from 'react'

const ComponenteUseState = () => {

    let userName = "erick"

    const [name, setName] = useState("joão")

    const changeName = () => {
        userName = "tiago";
        setName("cleber")
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`você digitou ${name}!`)

    }

    return (
        <div>
            <h2>useState</h2>
            <p>Var: {userName}</p>
            <p>useState: {name} </p>
            <button onClick={changeName}>trocar nomes</button>
            <br /><br />
            <form onSubmit={handleSubmit} >
                <label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                </label>
                <button type="submit">enviar!</button>
            </form>
            <hr />
        </div>
    )
}

export default ComponenteUseState