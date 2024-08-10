import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

const ComponenteUseEffect = () => {

    const [number, setNumber] = useState(0)
    const [number2, setNumber2] = useState(0)

    const changeNumber = () => {
        setNumber(number + 1)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`você digitou ${number}!`)

    }

    useEffect(() => {
        console.log("useEffect sem dependencias, chamado sempre que re-renderiza ")
    })
    useEffect(() => {
        console.log("useEffect dependencias vazio, chamdo uma vez ")
    }, [])
    useEffect(() => {
        console.log("useEffect dependencias preenchido, chamado sempre que um dos itens do array muda ")
    }, [number2])



    //cleanup useEffect
    useEffect(() => {
        // const timer = setTimeout(() => {
        //     console.log("Olá mundo")
        //     // console.log(number2)
        //     // setNumber2(number2 - 1)
        // }, 2000);

        // return () => clearTimeout(timer)
    }, [number2])

    return (
        <div>
            <h2>ComponenteUseEffect</h2>
            <p>number: {number} </p>
            <p>number2: {number2} </p>
            <button onClick={changeNumber}>executar!</button>
            <br />
            <button onClick={() => setNumber2(number2 + number + 1)}>executar2!</button>
            {/* <br /><br />
            <form onSubmit={handleSubmit} >
                <label>
                    <input type="text" value={number} onChange={(e) => setNumber(e.target.value)} />
                </label>
                <button type="submit">enviar!</button>
            </form> */}
            <hr />
        </div>
    )
}

export default ComponenteUseEffect