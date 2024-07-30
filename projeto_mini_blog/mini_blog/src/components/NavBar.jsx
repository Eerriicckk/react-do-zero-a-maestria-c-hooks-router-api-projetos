import { Box } from '@mui/material'
import React from 'react'
import styles from './NavBar.module.css'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
    return (
        <Box className={styles.navBar}>
            <Box>
                Blog erick
            </Box>
            <Box className={styles.links}>
                <NavLink to="/" >home</NavLink>
                <NavLink to="/about" >about</NavLink>
                <NavLink to="/login" >entrar</NavLink>
                <NavLink to="/register" >cadastrar</NavLink>
            </Box>
        </Box>
    )
}

export default NavBar