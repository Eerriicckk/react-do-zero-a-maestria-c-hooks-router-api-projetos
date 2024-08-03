import { Alert, Box, Button, TextField } from '@mui/material'
import { useNavigate } from "react-router-dom"
import { useAuthValue } from '../../context/AuthContext'
import { useState } from 'react'
import { useInsertDocument } from '../../hooks/useInsertDocuments'

const CreatePost = () => {
	const [title, setTitle] = useState("");
	const [image, setImage] = useState("");
	const [body, setBody] = useState("");
	const [tags, setTags] = useState([]);
	const [formError, setFormError] = useState("");
	const navigate = useNavigate()

	const { user } = useAuthValue();

	const { insertDocument, response } = useInsertDocument("posts");
	const loading = false

	const handleSubmit = (e) => {
		e.preventDefault();
		setFormError("")

		try {
			new URL(image)
		} catch (error) {
			setFormError("Imagem está com erros")
			return
		}

		const tagsArray = tags.split(",").map((tag) => tag.trim().toLowerCase())

		console.log("bruh")
		insertDocument({
			title,
			image,
			body,
			tagsArray,
			uid: user.uid,
			createdBy: user.displayName
		})

		setTitle("");
		setImage("");
		setBody("");
		setTags([]);
		navigate("/")
	}

	console.log(response)
	return (
		<Box>
			<h1>Criar post</h1>
			<p>Crie um novo post de sucesso!</p>
			<form onSubmit={handleSubmit}>
				<TextField color="texto" variant="standard" label="Titulo:" value={title} onChange={(e) => setTitle(e.target.value)} name="title" required />
				<br />
				<TextField color="texto" variant="standard" label="URL da imagem:" value={image} onChange={(e) => setImage(e.target.value)} name="image" required />
				<img src={image} alt="Imagem do post" />
				<br />
				<TextField color="texto" variant="standard" label="Conteúdo:" value={body} onChange={(e) => setBody(e.target.value)} name="body" required multiline />
				<br />
				<TextField color="texto" variant="standard" label="Tags:" value={tags} onChange={(e) => setTags(e.target.value)} name="image" required placeholder='Insira as tags separadas por virgula' />
				<br />
				<Button type='submit' disabled={response.loading} variant="contained" color="texto" >Criar</Button>
				{response.error && <Alert severity='error'>{response.error}</Alert>}
				{formError && <Alert severity='error'>{formError}</Alert>}
			</form>
		</Box>
	)
}

export default CreatePost