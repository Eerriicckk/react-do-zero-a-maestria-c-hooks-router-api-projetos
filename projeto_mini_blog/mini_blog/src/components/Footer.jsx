import { Box, Typography } from '@mui/material'
import React from 'react'
import styles from './Footer.module.css'

const Footer = () => {
    return (
        <Box className={styles.footerBar}>
            <Box>
                <Typography variant='h7'>Blog de teste</Typography>
                <p>Teste &copy;</p>
            </Box>
        </Box>
    )
}

export default Footer