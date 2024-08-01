import { Alert, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Button from '../../components/Button'
import { useAuthentication } from '../../hooks/useAuthentication'

const Register = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [passwordConfirm, setPasswordConfirm] = useState("")
    const [error, setError] = useState("");
    const { createUser, error: authError, loading } = useAuthentication()

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        const user = {
            displayName: name,
            email,
            password
        }

        if (password !== passwordConfirm) return setError("as senhas devem ser iguais")

        const response = await createUser(user)

        console.log(user)
    }

    useEffect(() => {
        if (authError) setError(authError)
    }, [authError])

    return (
        <div>
            <h1>Crie seu user para poder criar posts</h1>
            <form onSubmit={handleSubmit}>
                <TextField label="Nome:" type="text" value={name} onChange={(e) => setName(e.target.value)} name="name" required />
                <TextField label="Email:" type="email" value={email} onChange={(e) => setEmail(e.target.value)} name="email" required />
                <TextField label="Senha:" type="password" value={password} onChange={(e) => setPassword(e.target.value)} name="password" required />
                <TextField label="Senha:" error={password != passwordConfirm} type="password" value={passwordConfirm} onChange={(e) => setPasswordConfirm(e.target.value)} name="passwordConfirm" required />
                <Button type='submit' disabled={loading}>Enviar</Button>
                {error && <Alert severity='error'>{error}</Alert>}
            </form>
        </div>
    )
}

export default Register