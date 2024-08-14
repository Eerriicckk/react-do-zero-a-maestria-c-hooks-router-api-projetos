import React, { useEffect, useRef, useState } from 'react'
import SomeComponent from './SomeComponent'

const ComponenteUseImperativeHandle = () => {

    const numberRef = useRef()

    return (
        <div>
            <h2>ComponenteUseImperativeHandle</h2>
            <p>ref: {numberRef.current}</p>
            <SomeComponent ref={numberRef} />
            <button onClick={() => numberRef.current.validate()}>Validate</button>

            <hr />
        </div>
    )
}

export default ComponenteUseImperativeHandle