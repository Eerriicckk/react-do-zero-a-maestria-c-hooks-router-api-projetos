import React, { useEffect, useMemo, useState } from 'react'

const ComponenteUseMemo = () => {
    const [number, setNumber] = useState(0)
    // const proNumber = ["12", "78", "90"];
    const proNumber = useMemo(() => { return ["12", "78", "90"] }, []);
    useEffect(() => {
        console.log("proNumber alterado")
    }, [proNumber])

    return (
        <div>
            <h2>ComponenteUseMemo</h2>
            <input type="number" onChange={(e) => setNumber(e.target.value)} />
            {proNumber.includes(number) && <p>acertou o numero</p>}
            <hr />
        </div>
    )
}

export default ComponenteUseMemo