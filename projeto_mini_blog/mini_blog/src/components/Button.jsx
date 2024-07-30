import { Button as ButtonMui } from '@mui/material'
import React from 'react'

const Button = ({ children, ...props }) => {
    return (
        <ButtonMui sx={{ border: "1px solid gold", color: "black" }} {...props} className='botao'>{children}</ButtonMui>
    )
}

export default Button