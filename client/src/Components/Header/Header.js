import React from 'react'
import { NavLink } from 'react-router-dom'
import './Header.css'

const Header = () => {
    const navLinkStyles = ({ isActive }) => {
        return {
            fontWeight: isActive ? 'bold' : 'normal',
            color: isActive ? 'red' : '#1D2939',
        }
    }
    return (
        <div className='topnav'>
            <img className='split' src="./img/logo.png" alt="" />
            <NavLink style={navLinkStyles} to="/tutorials">Tutorials</NavLink>
            <NavLink style={navLinkStyles} to="/designtools">Design Tools</NavLink>
            <NavLink style={navLinkStyles} to="/dailydigest">Daily Digest</NavLink>
            <NavLink style={navLinkStyles} to="/">Home</NavLink>
        </div>
    )
}

export default Header
