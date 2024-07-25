import React from 'react'
import { Link, NavLink } from 'react-router-dom'


const NavBar = () => {
    return (
        <div className="NavBar">
            <NavLink to="/" className={({isActive})=> (isActive?"estaAtivo":"inativo")}>Home</NavLink>
            <NavLink to="/about">Sobre</NavLink>
            {/* <Link to="/">Home</Link>
            <Link to="/about">Sobre</Link> */}
        </div>
    )
}

export default NavBar