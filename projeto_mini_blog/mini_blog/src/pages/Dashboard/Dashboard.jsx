import { Box } from '@mui/material'
import { Link } from 'react-router-dom'
import { useAuthValue } from '../../context/AuthContext'
import { useFetchDocuments } from '../../hooks/useFetchDocuments'
import PostDashbord from '../../components/PostDashbord'
import { useDeleteDocument } from '../../hooks/useDeleteDocument'

const Dashboard = () => {
	const { user } = useAuthValue();
	const uid = user.uid;
	const { deleteDocument } = useDeleteDocument("posts")

	const { docs: posts, loading } = useFetchDocuments("posts", null, uid);
	// const posts = [];

	return <>
		{loading ? <Box>Carregando...</Box> :
			<Box>
				<h1>Dashboard</h1>
				<h2>Gerencie seus posts</h2>

				<Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", justifyContent: "center" }}>
					{posts && posts.map((post) => (
						<PostDashbord key={post.id} post={post} deleteDocument={(id) => deleteDocument(id)} />
						// <>ok</>
					))}
					{posts && posts.length === 0 && (
						<Box>
							<p>Não foram encontrados posts</p>
						</Box>
					)}
				</Box>
			</Box>
		}
	</>

}

export default Dashboard