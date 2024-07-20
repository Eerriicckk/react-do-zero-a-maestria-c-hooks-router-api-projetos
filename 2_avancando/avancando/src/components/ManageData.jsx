import { useState } from "react";

const ManageData = () => {
    let data1 = 99;

    // criando hook:
    const [numero, setNumero] = useState(0);

    return (
        <div>
            <div>
                <p>Val: {data1}</p>
                <button onClick={() => (data1 = 15)}>mudar var</button>
            </div>
            <div>
                <p>Val: {numero}</p>
                <button onClick={() => setNumero(25)}>mudar var</button>
            </div>
        </div>
    )
}

export default ManageData