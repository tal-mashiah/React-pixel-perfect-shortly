import React from 'react'

export default function Modal() {
    return (
        <div className="modal flex justify-between align-center">
            <input type="text" placeholder="Shorten a link here..."/>
            <button className="main-btn">Shorten It!</button>
            <img src={require('../../assets/images/modal/bg-shorten-desktop.svg')} alt=""/>
        </div>
    )
}
