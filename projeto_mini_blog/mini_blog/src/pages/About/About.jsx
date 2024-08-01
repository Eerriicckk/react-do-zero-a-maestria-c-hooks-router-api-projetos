import React from 'react'
import styles from './About.module.css'
import { Link } from 'react-router-dom'
import { Box } from '@mui/material'

const About = () => {
  return (
    <Box sx={{ textAlign: "center" }}>
      <h2>Sobre o projeto do Mini Blog</h2>
      <p>Projeto feito usando React e Firebase</p>
      <Link to="/posts/create" style={{ padding: "5px", backgroundColor: "lightblue", borderRadius: "5px" }}>Criar Post</Link>
    </Box>
  )
}

export default About