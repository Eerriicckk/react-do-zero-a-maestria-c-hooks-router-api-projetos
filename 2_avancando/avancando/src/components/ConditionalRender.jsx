import { useState } from "react"

const ConditionalRender = () => {
    const [var1, setVar1] = useState(true);

    const changeValVar1 = (newVal) => {
        setVar1(newVal);
    }

    return (
        <div>
            
            <h1>teste de condicionais</h1>
            <button onClick={() => changeValVar1(true)}>true</button>
            <button onClick={() => changeValVar1(false)}>false</button>
            {var1 === true ? (<p>Valor true</p>) : (<p>Valor false</p>) }

        </div>
    )
}

export default ConditionalRender