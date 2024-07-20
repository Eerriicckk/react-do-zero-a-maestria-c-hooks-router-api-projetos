import { useState } from 'react';

const ListRender = () => {
    const [lista, setUsers] = useState([
        { nome: "erick", id: 1 }, 
        { nome: "adrian", id: 2 }, 
        { nome: "fenrir", id: 3 },
    ]);
    // console.log(lista);
    const deleteUser = () => {
        const randNum = Math.floor(Math.random() * 4);
        setUsers((prevUser) => {
            return prevUser.filter((user) => randNum !== user.id)
        });
    }
    return (
        <div>
            <ul>
                {lista.map((nome) => (<li key={nome.id}>{nome.nome}</li>))}
            </ul>

            <button onClick={deleteUser}>apaga user</button>

        </div>
    )
}

export default ListRender