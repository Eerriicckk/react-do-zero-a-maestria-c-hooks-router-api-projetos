import styles from './Home.module.css'
import { Box, Button, TextField } from '@mui/material'
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Home = () => {
  const [query, setQuery] = useState("")
  const [posts] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <Box>
      <h1>
        home
      </h1>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "row" }}>
        <TextField color="texto" variant="standard" label="Tags:" value={query} onChange={(e) => setQuery(e.target.value)} />
        <Button type='submit' variant="contained" color="texto" sx={{ mt: 2 }} >Pesquisar</Button>
      </form>
      <br />
      <Box>
        posts
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