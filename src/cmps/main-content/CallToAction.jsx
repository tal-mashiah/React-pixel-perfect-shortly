import React from 'react'

export default function CallToAction() {
    return (
        <div className="call-to-action flex align-center justify-center column">
                <h3>Boost your links today</h3>
                <button className="main-btn">Get Started</button>
                <img src={require('../../assets/images/call to action/bg-boost-desktop.svg')} alt=""/>
        </div>
    )
}
