import React, { useEffect, useRef, useState } from 'react'

const ComponenteUseRef = () => {
    const numberRef = useRef(0)
    const [counter, setCounter] = useState(0)
    const [counterb, setCounterb] = useState(0)

    // useEffect(() => {
    //     numberRef.current = numberRef.current + 1
    // })

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
            <h2>ComponenteUseRef</h2>
            <p>ref: {numberRef.current}</p>
            <p>counter 1: {counter}</p>
            <button onClick={() => setCounter(counter + 1)}>cont 1</button>
            <p>counter 2: {counterb}</p>
            <button onClick={() => setCounterb(counterb + 1)}>cont 2</button>
            <form onSubmit={handleSubmit}>
                <input type="text" ref={inputRef} onChange={(e) => setText(e.target.value)} value={text} />
                <button type="submit">enviar</button>
            </form>

            <hr />
        </div>
    )
}

export default ComponenteUseRef