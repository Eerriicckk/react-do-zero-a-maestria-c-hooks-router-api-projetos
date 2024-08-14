import React, { useEffect, useLayoutEffect, useState } from 'react'

const ComponenteUseLayoutEffect = () => {
    
    const [text, setText] = useState("0")

    useEffect(() => {
        console.log("2")
        setText("2")
    }, [])

    useLayoutEffect(()=>{
        console.log("1")
        setText("1")
    },[])

    return (
        <div>
            <h2>ComponenteUseLayoutEffect</h2>
            <p>{text}</p>
            <hr />
        </div>
    )
}

export default ComponenteUseLayoutEffect