import { Alert, Box, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Button from '../../components/Button'
import { useAuthentication } from '../../hooks/useAuthentication'

const Login = () => {
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const [error, setError] = useState("");
	const { signIn, error: authError, loading } = useAuthentication()

	const handleSubmit = async (e) => {
		e.preventDefault();
		setError("");
		const user = {
			email,
			password
		}

		const response = await signIn(user)
	}

	useEffect(() => {
		if (authError) setError(authError)
	}, [authError])

	return (
		<Box>
			<h1>Entrar</h1>
			<form onSubmit={handleSubmit}>
				<TextField color="texto" variant="standard" label="Email:" type="email" value={email} onChange={(e) => setEmail(e.target.value)} name="email" required />
				<TextField color="texto" variant="standard" label="Senha:" type="password" value={password} onChange={(e) => setPassword(e.target.value)} name="password" required />
				<Button type='submit' disabled={loading} variant="contained" color="texto" >Entrar</Button>
				{error && <Alert severity='error'>{error}</Alert>}
			</form>
		</Box>
	)
}

export default Login