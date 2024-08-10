import { Box, Button, Chip, Container, Typography } from '@mui/material'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const PostDashbord = ({ post, deleteDocument }) => {
    const navigate = useNavigate();


    return (
        <Box sx={{ display: "flex", mt: 3 }}>
            <Container>
                <Typography variant='h4'>{post.title}</Typography>
                <Typography>Created at: {new Date(post.createdAt.seconds * 1000).toLocaleString()}</Typography>
                <Box sx={{ display: "flex", flexDirection: "row", alignContent: "center", justifyContent: "center", gap: "8px", m: 3 }}>
                    {post.tagsArray && post.tagsArray.map((tag) => (
                        <Chip label={"#" + tag} key={tag} size="small" />
                    ))}
                </Box>
                <Box sx={{ display: "flex", gap: "10px", flexDirection: "row", alignItems: "center", textAlign: "center", justifyContent: "center" }}>
                    <Button onClick={() => navigate(`/posts/${post.id}`)} variant='outlined' color='texto'>Ler</Button>
                    <Button onClick={() => navigate(`/posts/edit/${post.id}`)} variant='outlined' color='texto'>Editar</Button>
                    <Button variant='outlined' color='texto' onClick={() => deleteDocument(post.id)}>Excluir</Button>
                </Box>
            </Container>
        </Box>
    )
}

export default PostDashbord