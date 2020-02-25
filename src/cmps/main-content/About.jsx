import React from 'react'
import Modal from '../main-content/Modal.jsx';

export default function About() {
    return (
        <div className="about">
            <div className="about-content">
                <h1>More than just shorter links</h1>
                <p>Build your brand’s recognition and get detailed insights on how your links are performing.</p>
                <button className="main-btn">Get Started</button>
            </div>
            <img src={require('../../assets/images/about/illustration-working.svg')} alt=""/>
            <Modal/>
        </div>
    )
}
