import styles from './Home.module.css'
import { Box, Button, TextField } from '@mui/material'
import { useState } from 'react';
import { useNavigate, Link, Navigate } from 'react-router-dom';
import { useFetchDocuments } from '../../hooks/useFetchDocuments';
import PostDetail from '../../components/PostDetail';

const Home = () => {
	const [query, setQuery] = useState("")
	const { docs: posts, loading } = useFetchDocuments("posts")
	const navigate = useNavigate()

	const handleSubmit = (e) => {
		e.preventDefault();
		if (query) return navigate(`/search?q=${query}`);

	}

	return (
		<Box>
			<h1>
				home
			</h1>
			<form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "row", alignItems: "center", textAlign: "center", justifyContent: "center" }}>
				<TextField color="texto" variant="standard" label="Tags:" value={query} onChange={(e) => setQuery(e.target.value)} />
				<Button type='submit' variant="contained" color="texto" sx={{ mt: 2 }} >Pesquisar</Button>
			</form>
			<br />
			<Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", justifyContent: "center" }}>
				{posts && posts.map((post) => (
					<PostDetail key={post.id} post={post} />
				))}
				{posts && posts.length === 0 && (
					<Box>
						<p>Não foram encontrados posts</p>
					</Box>
				)}
			</Box>
		</Box>
	)
}

export default Home