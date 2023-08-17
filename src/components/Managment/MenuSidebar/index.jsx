import React, { useState, useRef } from "react";
import logo from "../../../assets/HS-DESIGN.png";
import CardSelect from "./components/CardSelect";
import {
  House,
  CalendarCheck,
  CurrencyCircleDollar,
  UserCircle,
  Toolbox,
  Package,
  UsersThree,
  // ToggleRight,
  Gear,
} from "@phosphor-icons/react";
import { gray } from "../../../style/global-colors.js";
import imgProfile from "../../../assets/profile-exemple.png";
import { Menu } from 'primereact/menu';
import { Toast } from 'primereact/toast';
import { useNavigate } from "react-router-dom";

export const MenuSidebar = ({ children, context, setContext }) => {
  const [selected, setSelected] = useState(0);
  const [expanded, setExpanded] = useState(false);
  const navigation = useNavigate();

  const menuLeft = useRef(null);
  const toast = useRef(null);

  const reduceString = (str, numCaracters) => {
    if (str.length <= numCaracters) {
      return str;
    } else {
      return str.slice(0, numCaracters) + "...";
    }
  };

  const toogleBtnNavigation = (num) => {
    if (selected == num) {
      setSelected(0);
      return;
    }

    setSelected(num);
  };

  const items = [
    {
      label: "Opções",
      items: [
        {
          label: "Voltar para home",
          // command: () => {
          //   toast.current.show({
          //     severity: "success",
          //     summary: "Updated",
          //     detail: "Data Updated",
          //     life: 3000,
          //   });
          // },
          command: () => {
            navigation("/");
          }
        },
      ],
    },
  ];

  return (
    <div className="flex">
      <nav className="max-w-[90px] group/menu hover:max-w-[320px] bg-[var(--black)] pt-6 flex flex-col justify-start duration-200 h-auto">
        <div className="flex flex-col items-start mt-3 gap-[5px]">
          <div className="flex items-center gap-2 ml-5 mb-10">
            <img src={logo} alt="HubServis Logo" className="w-[50px] rounded" />
            <h1 className="hidden group-hover/menu:block font-extrabold text-[26px] text-[var(--dark-green)]">
              HubServis
            </h1>
          </div>

          <CardSelect
            open={selected == 1 && true}
            clickFunction={() => {
              toogleBtnNavigation(1);
              setExpanded(!expanded);
            }}
            title="Home"
            icon={<House fill={gray} size={30} className="" />}
            isEnabled={true}
          >
            <div
              style={{ color: "white" }}
              className="cursor-pointer hidden group-hover/menu:flex ml-[5rem] flex-col gap-[10px] max-w-[fit-content] "
            >
              <p>Hello World</p>
            </div>
          </CardSelect>

          <CardSelect
            open={selected == 2 && true}
            clickFunction={() => toogleBtnNavigation(2)}
            title="Agenda"
            icon={<CalendarCheck fill={gray} size={30} className="" />}
            isEnabled={true}
          >
            <div
              style={{ color: "white" }}
              className="cursor-pointer hidden group-hover/menu:flex ml-[5rem] flex-col gap-[10px] max-w-[fit-content] "
            >
              <p className="max-w-[fit-content]" onClick={() => setContext(0)}>
                Agendamentos
              </p>
              <p className="max-w-[fit-content]" onClick={() => setContext(1)}>
                Listagem
              </p>
              <p className="max-w-[fit-content]" onClick={() => setContext(2)}>
                Bloqueios
              </p>
            </div>
          </CardSelect>

          <CardSelect
            open={selected == 3 && true}
            clickFunction={() => toogleBtnNavigation(3)}
            title="Financeiro"
            icon={<CurrencyCircleDollar fill={gray} size={30} className="" />}
            isEnabled={true}
          >
            <div
              style={{ color: "white" }}
              className="cursor-pointer hidden group-hover/menu:flex ml-[5rem] flex flex-col gap-[10px] max-w-[fit-content] "
            >
              <p className="max-w-[fit-content]" onClick={() => setContext(3)}>
                Comandas
              </p>
              <p className="max-w-[fit-content]" onClick={() => setContext(4)}>
                Relatórios
              </p>
            </div>
          </CardSelect>

          <CardSelect
            open={selected == 4 && true}
            clickFunction={() => toogleBtnNavigation(4)}
            title="Clientes"
            icon={<UserCircle fill={gray} size={30} className="" />}
            isEnabled={true}
          >
            <div
              style={{ color: "white" }}
              className="cursor-pointer hidden group-hover/menu:flex ml-[5rem] flex flex-col gap-[10px] max-w-[fit-content] "
            >
              <p className="max-w-[fit-content]" onClick={() => setContext(5)}>
                Listagem
              </p>
            </div>
          </CardSelect>

          <CardSelect
            open={selected == 5 && true}
            clickFunction={() => toogleBtnNavigation(5)}
            title="Serviços"
            icon={<Toolbox fill={gray} size={30} className="" />}
            isEnabled={true}
          >
            <div
              style={{ color: "white" }}
              className="cursor-pointer hidden group-hover/menu:flex ml-[5rem] flex flex-col gap-[10px] max-w-[fit-content] "
            >
              <p className="max-w-[fit-content]" onClick={() => setContext(6)}>
                Listagem
              </p>
              <p className="max-w-[fit-content]" onClick={() => setContext(7)}>
                Categorias
              </p>
            </div>
          </CardSelect>

          <CardSelect
            open={selected == 6 && true}
            clickFunction={() => toogleBtnNavigation(6)}
            title="Produtos"
            icon={<Package fill={gray} size={30} className="" />}
            isEnabled={true}
          >
            <div
              style={{ color: "white" }}
              className="cursor-pointer hidden group-hover/menu:flex ml-[5rem] flex flex-col gap-[10px] max-w-[fit-content] "
            >
              <p className="max-w-[fit-content]" onClick={() => setContext(8)}>
                Listagem
              </p>
              <p className="max-w-[fit-content]" onClick={() => setContext(9)}>
                Categorias
              </p>
            </div>
          </CardSelect>

          <CardSelect
            open={selected == 7 && true}
            clickFunction={() => toogleBtnNavigation(7)}
            title="Equipe"
            icon={<UsersThree fill={gray} size={30} className="" />}
            isEnabled={true}
          >
            <div
              style={{ color: "white" }}
              className="cursor-pointer hidden group-hover/menu:flex ml-[5rem] flex flex-col gap-[10px] max-w-[fit-content] "
            >
              <p className="max-w-[fit-content]" onClick={() => setContext(10)}>
                Profissionais
              </p>
              <p className="max-w-[fit-content]" onClick={() => setContext(11)}>
                Expedientes
              </p>
            </div>
          </CardSelect>

          <CardSelect
            open={selected == 8 && true}
            clickFunction={() => toogleBtnNavigation(8)}
            title="Settings"
            icon={<Gear fill={gray} size={30} className="" />}
            isEnabled={true}
          >
            <div
              style={{ color: "white" }}
              className="cursor-pointer hidden group-hover/menu:flex ml-[5rem] flex flex-col gap-[10px] max-w-[fit-content] "
            >
              <p className="max-w-[fit-content]" onClick={() => setContext(12)}>
                Agendamentos
              </p>
              <p className="max-w-[fit-content]" onClick={() => setContext(13)}>
                Listagem
              </p>
            </div>
          </CardSelect>

          <hr className="w-[60px] group-hover/menu:w-full max-w-[230px] m-auto bg-[var(--dark-gray)] border-[var(--dark-gray)] mt-7" />
        </div>

        <div className="mb-10 mt-3 cursor-pointer">
          <Toast ref={toast}></Toast>
          <Menu model={items} popup ref={menuLeft} id="popup_menu_left" />
          <div className="flex bg-[#2C2C2C] mx-3 px-4 py-2 rounded-[10px] gap-1" onClick={(event) => menuLeft.current.toggle(event)}>
            <span className="max-w-[44px] max-h-11 overflow-hidden border-[var(--strong-green)] rounded-full border-[2px]">
              <img
                src={imgProfile}
                alt="profile photo"
                className="object-cover"
              />
            </span>
            <div className="hidden group-hover/menu:block">
              <h4 className="text-[var(--strong-green)] font-medium text-base">
                Ramilthon
              </h4>
              <p className="text-[var(--gray-opacity-50)] font-medium text-sm">
                {reduceString("ramilthonbmw@gmail.com", 16)}
              </p>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};
