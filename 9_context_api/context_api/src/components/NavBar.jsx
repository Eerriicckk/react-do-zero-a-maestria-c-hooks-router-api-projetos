import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
    return (
        <div className='navBar'>
            <NavLink className="linkNavBar" to="/page1">page1</NavLink>
            <NavLink className="linkNavBar" to="/page2">page2</NavLink>
            <NavLink className="linkNavBar" to="/page3">page3</NavLink>
        </div>
    )
}

export default NavBar