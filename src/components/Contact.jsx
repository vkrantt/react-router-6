import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const Contact = () => {
    return (
        <div>
            <h1>Contact page</h1>
            <h2>Here we have other business</h2>
            <ul style={{ display: 'flex' }}>
                <li style={{ margin: '0 20px' }}>
                    <NavLink to="company">Company</NavLink>
                </li>
                <li style={{ margin: '0 20px' }}>
                    <NavLink to="channel">Channel</NavLink>
                </li>
                <li style={{ margin: '0 20px' }}>
                    <NavLink to="other">Other</NavLink>
                </li>
            </ul>
            <Outlet />

        </div>
    )
}

export default Contact