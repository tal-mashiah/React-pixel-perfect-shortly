import React from 'react'
import { NavLink } from 'react-router-dom';

export default function Logo() {
    return (
        <div className='main-logo'>
            <NavLink activeClassName="active" to='/' exact>
                <img src={require('../../assets/images/header/main-logo.svg')} alt="logo" />
            </NavLink>
        </div>
    )
}
