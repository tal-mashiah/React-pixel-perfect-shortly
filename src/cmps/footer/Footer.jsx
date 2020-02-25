import React from 'react';

import FooterLogo from '../footer/FooterLogo.jsx';
import FooterNav from './FooterNav.jsx';
import SocialLink from './SocialLink.jsx';

export default function Footer() {
    return (
        <footer className="flex justify-between">
            <FooterLogo />
            <div className="footer-content flex">
                <FooterNav />
                <SocialLink />
            </div>
        </footer>
    )
}
