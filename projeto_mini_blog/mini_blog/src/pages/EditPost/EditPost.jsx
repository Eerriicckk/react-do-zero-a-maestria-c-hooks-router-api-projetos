import { Alert, Box, Button, TextField } from '@mui/material'
import { useNavigate, useParams } from "react-router-dom"
import { useAuthValue } from '../../context/AuthContext'
import { useEffect, useState } from 'react'
import { useFetchOneDocument } from '../../hooks/useFetchOneDocument'
import { useUpdateDocument } from '../../hooks/useUpdateDocument'

const EditPost = () => {
	const { id } = useParams();
	const { docs: post } = useFetchOneDocument("posts", id)

	const [title, setTitle] = useState("");
	const [image, setImage] = useState("");
	const [body, setBody] = useState("");
	const [tags, setTags] = useState([]);
	const [formError, setFormError] = useState("");
	const navigate = useNavigate()

	const { user } = useAuthValue();

	const { updateDocument, response } = useUpdateDocument("posts");

	useEffect(() => {
		if (post) {
			setTitle(post.title);
			setImage(post.image);
			setBody(post.body);

			const textTags = post.tagsArray.join(",")
			setTags(textTags);

		}
	}, [post])

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

		const data = {
			title,
			image,
			body,
			tagsArray,
			uid: user.uid,
			createdBy: user.displayName
		}
		console.log(data)

		updateDocument(id, data)

		navigate("/dashboard")
	}

	return (
		<Box>
			{post &&
				<>
					<h1>Editar post {post.title}</h1>
					<p>Edite as informações do seu post!</p>
					<img src={image} alt="Imagem do post" style={{ maxHeight: "200px" }} />
					<form onSubmit={handleSubmit}>
						<TextField color="texto" variant="standard" label="Titulo:" value={title} onChange={(e) => setTitle(e.target.value)} name="title" />
						<br />
						<TextField color="texto" variant="standard" label="URL da imagem:" value={image} onChange={(e) => setImage(e.target.value)} name="image" />
						<br />
						<TextField color="texto" variant="standard" label="Conteúdo:" value={body} onChange={(e) => setBody(e.target.value)} name="body" multiline />
						<br />
						<TextField color="texto" variant="standard" label="Tags:" value={tags} onChange={(e) => setTags(e.target.value)} name="image" placeholder='Insira as tags separadas por virgula' />
						<br />
						<Button type='submit' disabled={response.loading} variant="contained" color="texto" >Editar</Button>
						{response.error && <Alert severity='error'>{response.error}</Alert>}
						{formError && <Alert severity='error'>{formError}</Alert>}
					</form>
				</>}
		</Box>
	)
}

export default EditPost