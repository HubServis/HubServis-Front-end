import React, { useRef } from "react";
import "./style.css";
import logo from "../../assets/HS-ICON.png";
import profileExemple from "../../assets/profile-exemple.png";
import iconOpen from "../../assets/Down.svg";
import iconNotification from "../../assets/Bell.svg";
import { appUrl } from "../../utils/loadConfigs";
import { Menu } from 'primereact/menu';
import { Toast } from 'primereact/toast';
import { useNavigate } from "react-router-dom";

const AppBar = ({ children }) => {
  const reduceString = (str, numCaracters) => {
    if (str.length <= numCaracters) {
      return str;
    } else {
      return str.slice(0, numCaracters) + "...";
    }
  };

  const navigation = useNavigate();
  const permissionBusiness = true;
  const permissionAdmin = true;
  const menuLeft = useRef(null);
  const toast = useRef(null);
  const items = [
    {
      label: "Opções Gerais",
      items: [
        {
          label: "Profile",
          // command: () => {
          //   toast.current.show({
          //     severity: "success",
          //     summary: "Updated",
          //     detail: "Data Updated",
          //     life: 3000,
          //   });
          // },
          command: () => {
            navigation("/profile");
          }
        },
        permissionBusiness && 
          {
            label: "Minha empresa",
            command: () => {
              navigation("/managment");
            },
          },
      ],
    },
    permissionAdmin && 
    {
      label: "Admin",
      items: [
        {
          label: "Dashboard",
          command: () => {
            navigation("/admin/dashboard");
          },
        },
      ]
    }
  ];

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

        <div className="profile" onClick={(event) => menuLeft.current.toggle(event)}>
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
          <Toast ref={toast}></Toast>
          <Menu model={items} popup ref={menuLeft} id="popup_menu_left" />
        </div>
      </nav>
    </>
  );
};

export default AppBar;
