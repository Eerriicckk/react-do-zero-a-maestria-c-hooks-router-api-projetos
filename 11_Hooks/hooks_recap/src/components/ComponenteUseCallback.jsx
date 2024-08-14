import React, { useCallback, useEffect, useRef, useState } from 'react'
import List from './List'

const ComponenteUseCallback = () => {
    const [counter, setCounter] = useState(0)

    const getDados = useCallback(() => {
        return ["a", "b", "c"]
    }, [])
    const inputRef = useRef(0);
    const [text, setText] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(text)
        setText("")
        inputRef.current.focus()
    }

    return (
        <div>
            <h2>useCallback</h2>
            <p>counter 1: {counter}</p>
            <button onClick={() => setCounter(counter + 1)}>cont 1</button>
            <List getItems={getDados} />
            {/* <form onSubmit={handleSubmit}>
                <input type="text" ref={inputRef} onChange={(e) => setText(e.target.value)} value={text} />
                <button type="submit">enviar</button>
            </form> */}
            <hr />
        </div>
    )
}

export default ComponenteUseCallback