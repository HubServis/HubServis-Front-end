import React from 'react';
import './style.css';
import logo from '../../assets/HS-ICON.png'
import profileExemple from '../../assets/profile-exemple.png'
import iconOpen from '../../assets/Down.svg';
import iconNotification from '../../assets/Bell.svg';

const AppBar = () => {
    const reduceString = (str, numCaracters) => {
        if (str.length <= numCaracters) {
            return str;
        } else {
            return str.slice(0, numCaracters) + "...";
        } 
    }

    return (
        <>
            <nav id="navbar">
                <div className="container-logo-nav-links">
                    <div className="logo-container">
                        <img src={logo} alt="icon logo" />
                        <h1 id="title">HubServis</h1>
                    </div>
                    <div className="nav-links">
                        <a href="#">Sobre</a>
                        <a href="#">Planos</a>
                        <a href="#">Anuncios e eventos</a>
                        <a href="#">Suporte</a>
                    </div>
                </div>
                <div className="profile">
                    <img src={iconNotification} alt="" className="icon-notification" />
                    <div className="profile-preview">
                        <img src={profileExemple} alt="photo profile" className="photo-profile" />
                        <span id="preview-data-profile">
                            <p id="name-profile">Ramilthon</p>
                            <p id="email-profile">{reduceString('ramilthonbmw@gmail.com', 16)}</p>
                        </span>
                    </div>
                    <img src={iconOpen} alt="" className="icon-open" />
                </div>
            </nav>
        </>
    );
}

export default AppBar;