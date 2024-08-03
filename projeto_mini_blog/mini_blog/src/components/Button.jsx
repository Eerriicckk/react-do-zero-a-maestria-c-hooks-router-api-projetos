import { Button as ButtonMui } from '@mui/material'
import React from 'react'

const Button = ({ children, ...props }) => {
    return (
        <ButtonMui {...props} className='botao'>{children}</ButtonMui>
    )
}

export default Button