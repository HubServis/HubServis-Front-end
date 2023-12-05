import { useRef } from "react";
import "./style.css";
import logo from "../../assets/HS-ICON.png";
import { Menu } from "primereact/menu";
import { Toast } from "primereact/toast";
import { useNavigate } from "react-router-dom";
import { Bell, CaretDown, List, User } from "@phosphor-icons/react";
import { reduceString } from "../../utils/reduceString";
import { useLogout } from "../../hooks/useLogout";
import { Navigate } from "react-router-dom";
import { Button } from "primereact";

const AppBar = ({ children, user, permission }) => {
  const navigation = useNavigate();
  const menuLeft = useRef(null);
  const toast = useRef(null);
  const navigate = useNavigate();
  const [logout] = useLogout();

  const items = [
    /* permission && {
      label: "Admin",
      items: [
        {
          label: "Dashboard",
          command: () => {
            navigation("/admin/dashboard");
          },
        },
      ],
    }, */
    {
      label: "Opções Gerais",
      items: [
        {
          label: "Profile",
          command: () => {
            navigation("/profile");
          },
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
        /* permission && {
          label: "Minha empresa",
          command: () => {
            navigation("/managment");
          },
        }, */
        {
          label: "Sair da Conta",
          command: async () => {
            const result = await logout();

            if (result) navigate("/login");
          },
        },
      ],
    },
  ];

  return (
    <>
      <nav id="navbar" className="py-4 px-[15px] md:px-5">
        <div className="container-logo-nav-links">
          <div className="logo-container" onClick={() => navigation("/")}>
            <img
              className="cursor-pointer"
              loading="lazy"
              src={logo}
              alt="icon logo"
            />
            <h1
              id="title"
              className="font-extrabold text-[26px] hidden lg:block cursor-pointer"
            >
              HubServis
            </h1>
          </div>
          <div className="nav-links hidden md:flex ml-0 lg:ml-10">
            {children}
          </div>
        </div>

        <div
          onClick={(event) => menuLeft.current.toggle(event)}
          className="md:hidden"
        >
          <List
            size={32}
            weight="light"
            className="cursor-pointer text-[var(--gray)]"
          />
          <Toast ref={toast}></Toast>
          <Menu model={items} popup ref={menuLeft} id="popup_menu_left" />
        </div>

        {(user && (
          <div
            className="profile hidden md:flex"
            onClick={(event) => menuLeft.current.toggle(event)}
          >
            <Bell size={26} color="#20712D" />
            <div className="profile-preview">
              <img
                loading="lazy"
                src={
                  user?.image ||
                  (user?.username &&
                    `https://ui-avatars.com/api/?name=${user?.username[0]}${user?.username[1]}&format=svg&background=97FFA8`) ||
                  ""
                }
                alt={User}
                className="photo-profile"
              />
              <span id="preview-data-profile" className="hidden sm:block">
                <p id="name-profile">{user?.name}</p>
                <p id="email-profile">
                  {(user?.username && reduceString(user?.email)) || ""}
                </p>
              </span>
            </div>
            <CaretDown size={24} color="rgba(126, 128, 130, 0.5)" />

            <Toast ref={toast}></Toast>
            <Menu model={items} popup ref={menuLeft} id="popup_menu_left" />
          </div>
        )) || (
          <div className="profile hidden md:flex">
            <div className="profile-preview">
              <Button onClick={() => navigate("/login")}>Login</Button>
            </div>

            <div>
              <Button onClick={() => navigate("/register")}>
                Registrar-se
              </Button>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default AppBar;
