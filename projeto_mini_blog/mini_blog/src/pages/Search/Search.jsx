import { Box, Button } from '@mui/material'
import React, { useState } from 'react'
import { useQuery } from '../../hooks/useQuery'
import { useFetchDocuments } from '../../hooks/useFetchDocuments'
import PostDetail from '../../components/PostDetail'
import { useNavigate } from 'react-router-dom'

const Search = () => {
    const query = useQuery()
    const search = query.get("q")
    const { docs: posts, loading } = useFetchDocuments("posts", search)
	const navigate = useNavigate()


    return (
        <Box>
            <h1>
                Você pesquisou por: {search}
            </h1>
            <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center", textAlign: "center", justifyContent: "center" }}>
                {posts && posts.map((post) => (
                    <PostDetail key={post.id} post={post} />
                ))}
                {posts && posts.length === 0 && (
                    <Box>
                        <p>Não foram encontrados posts a partir da sua busca</p>
                        <Button onClick={() => navigate(`/posts`)} variant='outlined' color='texto'>Voltar</Button>
                    </Box>
                )}
            </Box>
        </Box>
    )
}

export default Search