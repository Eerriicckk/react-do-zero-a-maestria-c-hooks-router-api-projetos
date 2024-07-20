import { useState } from 'react'
import './Componente.css'
import Button from './Button'
import Cars from './Cars';
const Componente = () => {
    const [valor, setValor] = useState(false);
    const carros = [
        { nome: "fusca", ano: "1999", preco: "R$10.000" },
        { nome: "palio", ano: "2015", preco: "R$50.000" },
        { nome: "camaro", ano: "2013", preco: "R$120.000" }
    ]

    return (
        <div>
            {/* <h1>Componente</h1>
            <p>tste</p>
            <p className="meuParagrafo">asdasdasd</p>
            <div style={
                valor ?
                    {
                        color: "red",
                        border: "1px dashed green",
                        width: "fit-content",
                        float: "left",
                        borderRadius: "7px"
                    } :
                    {
                        color: "brown",
                        border: "3px double gray",
                        borderRadius: "100%",
                        float: "right",
                        width: "fit-content",
                    }
            }>elemento com css inline</div>
            <br />
            <h2 className={valor ? "redTitle" : "normalTitle"}>titulo</h2>
            <button onClick={() => setValor(!valor)}>clique!!!</button>
            <Button /> */}

            {carros.map((carro) => {
                return <Cars key={carro.nome} nome={carro.nome} preco={carro.preco} ano={carro.ano} />
            })}

        </div>
    )
}

export default Componente