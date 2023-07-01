import React from "react";
import "./style.css";
import logo from "../../assets/HS-ICON.png";
import profileExemple from "../../assets/profile-exemple.png";
import iconOpen from "../../assets/Down.svg";
import iconNotification from "../../assets/Bell.svg";
import { appUrl } from "../../utils/loadConfigs";

const AppBar = ({ children }) => {
  const reduceString = (str, numCaracters) => {
    if (str.length <= numCaracters) {
      return str;
    } else {
      return str.slice(0, numCaracters) + "...";
    }
  };

  return (
    <>
      <nav id="navbar">
        <div className="container-logo-nav-links">
          <div className="logo-container">
            <img loading="lazy" src={logo} alt="icon logo" />
            <h1 id="title" onClick={() => (window.location.href = appUrl)}>
              HubServis
            </h1>
          </div>
          <div className="nav-links">{children}</div>
        </div>
        <div className="profile">
          <img src={iconNotification} alt="" className="icon-notification" />
          <div className="profile-preview">
            <img
              loading="lazy"
              src={profileExemple}
              alt="photo profile"
              className="photo-profile"
            />
            <span id="preview-data-profile">
              <p id="name-profile">Ramilthon</p>
              <p id="email-profile">
                {reduceString("ramilthonbmw@gmail.com", 16)}
              </p>
            </span>
          </div>
          <img src={iconOpen} alt="" className="icon-open" />
        </div>
      </nav>
    </>
  );
};

export default AppBar;
