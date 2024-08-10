import React from 'react'
import { NavLink } from 'react-router-dom'


const NavBar = () => {
    return (
        <>
            <div className="NavBar" style={{ display: "flex", gap: "16px" }}>
                <NavLink to="/" className={({ isActive }) => (isActive ? "estaAtivo" : "inativo")}>Home</NavLink>
                <NavLink to="/about">Sobre</NavLink>
            </div>
            <hr />
        </>

    )
}

export default NavBar