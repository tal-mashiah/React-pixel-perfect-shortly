import React from 'react'
import { NavLink } from 'react-router-dom';

export default function FooterLogo() {
    return (
        <div className='footer-logo'>
            <NavLink activeClassName="active" to='/' exact>
                <img src={require('../../assets/images/footer/main-logo.svg')} alt="logo" />
            </NavLink>
        </div>
    )
}
