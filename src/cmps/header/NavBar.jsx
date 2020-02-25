import React from 'react';
import { NavLink } from 'react-router-dom';

export default function NavBar() {
    return (
        <nav className='flex justify-between'>
            <div className='links-container flex align-center'>
                <NavLink activeClassName="active" to='/'>Features</NavLink>
                <NavLink activeClassName="active" to='/'>Pricing</NavLink>
                <NavLink activeClassName="active" to='/'>Resources</NavLink>
            </div>
            <div className="login-container">
                <NavLink activeClassName="active" to='/'>Login</NavLink>
                <button className="main-btn">Sign Up</button>
            </div>
        </nav>
    )
}
