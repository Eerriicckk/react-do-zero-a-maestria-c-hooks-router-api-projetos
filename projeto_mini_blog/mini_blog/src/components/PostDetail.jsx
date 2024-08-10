import { Box, Button, Chip, Typography } from '@mui/material'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const PostDetail = ({ post }) => {
    const navigate = useNavigate()
    return (
        <Box sx={{ display: "flex", mt: 3 }}>
            <Box>
                <Typography variant='h2'>{post.title}</Typography>
                <img src={post.image} alt={post.title} style={{ maxHeight: "200px" }} />
            </Box>
            <Box sx={{ mt: 3 }}>
                <Typography>By: {post.createdBy}</Typography>
                <Typography>{new Date(post.createdAt.seconds * 1000).toLocaleString()}</Typography>
                <Box sx={{ display: "flex", flexDirection: "row", alignContent: "center", justifyContent: "center", gap: "8px", m: 3 }}>
                    {post.tagsArray && post.tagsArray.map((tag) => (
                        <Chip label={"#" + tag} key={tag} />
                    ))}
                </Box>
                <Button onClick={() => navigate(`/posts/${post.id}`)} variant='outlined' color='texto'>Ler</Button>
            </Box>
        </Box>
    )
}

export default PostDetail