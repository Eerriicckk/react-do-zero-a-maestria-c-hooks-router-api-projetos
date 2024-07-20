import React, { useState } from 'react'
import './FormTeste.css'


const FormTeste = ({ user }) => {
    const [name, setName] = useState(user ? user.nome : "")
    const [email, setEmail] = useState(user ? user.email : "")
    const [bio, setBio] = useState("")
    const [gender, setGender] = useState("")

    const onSubmit = (e) => {
        e.preventDefault()
        console.log(name, email, bio, gender)
        setName("")
        setEmail("")
        setBio("")
        setGender("")
    }
    return (
        <div>
            <form onSubmit={onSubmit}>
                <div>
                    <label htmlFor="name">Nome:</label>
                    <input type="text" name="name" placeholder='escreva!!!' value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <label >
                    <span>Email:</span>
                    <input type="text" name='email' placeholder='digite o seu email!!!' value={email} onChange={(e) => setEmail(e.target.value)} />
                </label>
                <label>
                    Bio:
                    <textarea placeholder='Digite sua bio :o' value={bio} onChange={(e) => setBio(e.target.value)}></textarea>
                </label>
                <label>
                    Gênero
                    <select name="gender" defaultValue={gender} onChange={(e) => setGender(e.target.value)}>
                        <option value="" disabled>Selecione um gênero</option>
                        <option value="F">Feminino</option>
                        <option value="M">Masculino</option>
                        <option value="O">Outro</option>
                    </select>
                </label>
                <button type="submit">enviar :)</button>
            </form>
        </div >
    )
}

export default FormTeste