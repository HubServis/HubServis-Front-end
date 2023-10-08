import React, { useContext, useRef } from "react";
import "./style.css";
import logo from "../../assets/HS-ICON.png";
import iconNotification from "../../assets/Bell.svg";
import { Menu } from 'primereact/menu';
import { Toast } from 'primereact/toast';
import { useNavigate } from "react-router-dom";
import { List } from "@phosphor-icons/react";
import { userDataApi } from '../../api/userApi';
import { AuthContext } from '../../context/AuthContext';

const AppBar = ({ children }) => {
  const reduceString = (str, numCaracters) => {
    if (str.length <= numCaracters) {
      return str;
    } else {
      return str.slice(0, numCaracters) + "...";
    }
  };

  const permissionBusiness = true;
  const permissionAdmin = true;
  const navigation = useNavigate();
  const { singOut } = useContext(AuthContext);
  const menuLeft = useRef(null);
  const toast = useRef(null);
  const { img_profile } = userDataApi;
  const items = [
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
    },
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
        {
          label: "Meus agendamentos",
          command: () => {
            navigation("/agendamentos");
          },
        },
        {
          label: "Agendar serviço",
          command: () => {
            navigation("/service/agenda/0");
          },
        },
        permissionBusiness && 
        {
          label: "Minha empresa",
          command: () => {
            navigation("/managment");
          },
        },
        {
          label: "Sair da Conta",
          command: () => singOut(),
        },
      ],
    },
  ];

  return (
    <>
      <nav id="navbar" className="py-4 px-[15px] md:px-5">
        <div className="container-logo-nav-links">
          <div className="logo-container">
            <img loading="lazy" src={logo} alt="icon logo" />
            <h1 id="title" className="font-extrabold text-[26px] hidden lg:block" onClick={() => navigation("/")}>
              HubServis
            </h1>
          </div>
          <div className="nav-links hidden md:flex ml-0 lg:ml-10">{children}</div>
        </div>

        <div onClick={(event) => menuLeft.current.toggle(event)} className="md:hidden">
          <List size={32} weight="light" className="cursor-pointer text-[var(--gray)]"/>
          <Toast ref={toast}></Toast>
          <Menu model={items} popup ref={menuLeft} id="popup_menu_left" />
        </div>

        <div className="profile hidden md:flex" onClick={(event) => menuLeft.current.toggle(event)}>
          <img src={iconNotification} alt="" className="icon-notification" />
          <div className="profile-preview">
            <img
              loading="lazy"
              src={img_profile}
              alt="photo profile"
              className="photo-profile"
            />
            <span id="preview-data-profile" className="hidden sm:block">
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
