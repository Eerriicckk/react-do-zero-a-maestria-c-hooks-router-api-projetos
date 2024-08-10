import { Box, Button, Chip, Divider, Typography } from '@mui/material';
import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useFetchOneDocument } from '../../hooks/useFetchOneDocument';

const PostInfo = () => {
    const { id } = useParams();
    const navigate = useNavigate()
    const { docs: post } = useFetchOneDocument("posts", id)

    return (
        <Box>
            {post &&
                <>
                    <Box>
                        <Typography variant='h2'>{post.title}</Typography>
                        <img src={post.image} alt={post.title} style={{ maxHeight: "200px" }} />
                    </Box>
                    <Box sx={{ mt: 3 }}>
                        <Typography>By: {post.createdBy}</Typography>
                        <Typography>{new Date(post.createdAt.seconds * 1000).toLocaleString()}</Typography>
                        <Box sx={{ m: 5 }}>
                            {post.body}
                        </Box>
                        <Divider />
                        <br />
                        tags
                        <Box sx={{ display: "flex", flexDirection: "row", alignContent: "center", justifyContent: "center", gap: "8px", m: 3 }}>
                            {post.tagsArray && post.tagsArray.map((tag) => (
                                <Chip label={"#" + tag} key={tag} />
                            ))}
                        </Box>
                        <Button onClick={() => navigate(`/`)} variant='outlined' color='texto'>Voltar</Button>
                    </Box>
                </>}
        </Box>
    )
}

export default PostInfo