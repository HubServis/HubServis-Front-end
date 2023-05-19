import React from 'react';
import './style.css';
import logo from '../../assets/HS-ICON.png'
import profileExemple from '../../assets/profile-exemple.png'
import iconOpen from '../../assets/Down.svg';
import iconNotification from '../../assets/Bell.svg';

const AppBar = () => {
    return (
        <>
            <nav id="navbar">
                <div className="container-logo-nav-links">
                    <div className="logo-container">
                        <img src={logo} alt="icon logo" />
                        <h1 id="title">HubServis</h1>
                    </div>
                    <div className="nav-links">
                        <a href="http://">Sobre</a>
                        <a href="http://">Planos</a>
                        <a href="http://">Anuncios e eventos</a>
                        <a href="http://">Suporte</a>
                    </div>
                </div>
                <div className="profile">
                    <img src={iconNotification} alt="" className="icon-notification" />
                    <div className="profile-preview">
                        <img src={profileExemple} alt="photo profile" className="photo-profile" />
                        <span>
                            <p id="name-profile">Ramilthon</p>
                            <p id="email-profile">ramilthonbmw@gmail.co...</p>
                        </span>
                    </div>
                    <img src={iconOpen} alt="" className="icon-open" />
                </div>
            </nav>
        </>
    );
}

export default AppBar;