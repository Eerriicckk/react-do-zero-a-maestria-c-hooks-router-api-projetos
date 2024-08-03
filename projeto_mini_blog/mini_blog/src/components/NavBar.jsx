import { Box, Button } from '@mui/material'
import React, { useState } from 'react'
import styles from './NavBar.module.css'
import { NavLink } from 'react-router-dom'
import { useAuthentication } from '../hooks/useAuthentication'
import { useAuthValue } from '../context/AuthContext'

const NavBar = () => {
    const { user } = useAuthValue();
    const { logOut } = useAuthentication();


    return (
        <Box className={styles.navBar}>
            <Box>
                Blog erick
            </Box>
            <Box className={styles.linkContainer}>
                <NavLink to="/" className={({ isActive }) => (isActive ? styles.active : styles.links)}>Home</NavLink>
                <NavLink to="/about" className={({ isActive }) => (isActive ? styles.active : styles.links)}>Sobre</NavLink>
                {!user ?
                    <>
                        <NavLink to="/login" className={({ isActive }) => (isActive ? styles.active : styles.links)}>Entrar</NavLink>
                        <NavLink to="/register" className={({ isActive }) => (isActive ? styles.active : styles.links)}>Cadastrar</NavLink>
                    </>
                    :
                    <>
                        <NavLink to="/posts/create" className={({ isActive }) => (isActive ? styles.active : styles.links)}>Criar post</NavLink>
                        <NavLink to="/dasboard" className={({ isActive }) => (isActive ? styles.active : styles.links)}>Dashboard</NavLink>
                        <Button onClick={() => logOut()} variant='text'>Sair</Button>
                    </>
                }
            </Box>
        </Box>
    )
}

export default NavBar