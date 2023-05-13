import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <ul style={{ display: 'flex' }}>
                <li style={{ margin: '0 20px' }}> <NavLink to="/">Home</NavLink> </li>
                <li style={{ margin: '0 20px' }}><NavLink to="about"> About </NavLink></li>
                <li style={{ margin: '0 20px' }}><NavLink to="contact"> Contact </NavLink></li>
                <li style={{ margin: '0 20px' }}><NavLink to="filter"> Filter </NavLink></li>
            </ul>
        </div>
    )
}

export default Navbar