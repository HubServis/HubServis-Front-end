import { useState } from "react";
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
  ToggleRight,
  Gear,
} from "@phosphor-icons/react";
import { gray } from "../../../style/global-colors.js";
import imgProfile from "../../../assets/profile-exemple.png";

export const MenuSidebar = ({ children, context, setContext }) => {
  const [selected, setSelected] = useState(0);

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
  
  return (
    <div className="flex h-[100%]">
      <nav className="max-w-[90px] group/menu hover:max-w-[320px] bg-[var(--black)] pt-6 flex flex-col justify-between duration-200 h-screen">
        <div className="flex flex-col items-start mt-3 gap-[5px]">
          <div className="flex items-center gap-2 ml-5 mb-10">
            <img src={logo} alt="HubServis Logo" className="w-[50px] rounded" />
            <h1 className="hidden group-hover/menu:block font-extrabold text-[26px] text-[var(--dark-green)]">
              HubServis
            </h1>
          </div>

          <CardSelect
            open={selected == 1 && true}
            clickFunction={() => toogleBtnNavigation(1)}
            title="Home"
            icon={<House fill={gray} size={30} className="" />}
            isEnabled={true}
          >
            <div
              style={{ color: "white" }}
              className="hidden group-hover/menu:flex ml-[5rem] flex-col gap-[10px] max-w-[fit-content] "
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
              className="hidden group-hover/menu:flex ml-[5rem] flex-col gap-[10px] max-w-[fit-content] "
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
              className="hidden group-hover/menu:flex ml-[5rem] flex flex-col gap-[10px] max-w-[fit-content] "
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
              className="hidden group-hover/menu:flex ml-[5rem] flex flex-col gap-[10px] max-w-[fit-content] "
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
              className="hidden group-hover/menu:flex ml-[5rem] flex flex-col gap-[10px] max-w-[fit-content] "
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
              className="hidden group-hover/menu:flex ml-[5rem] flex flex-col gap-[10px] max-w-[fit-content] "
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
              className="hidden group-hover/menu:flex ml-[5rem] flex flex-col gap-[10px] max-w-[fit-content] "
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
              className="hidden group-hover/menu:flex ml-[5rem] flex flex-col gap-[10px] max-w-[fit-content] "
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

        <div className="mb-10 mt-3">
          <div className="bg-[#2C2C2C] mx-3 px-4 mb-3 py-2 rounded-[10px] w-[60px] h-[60px] flex items-center cursor-pointer">
            <ToggleRight fill={gray} size={30} />
          </div>

          <div className="flex bg-[#2C2C2C] mx-3 px-4 py-2 rounded-[10px] gap-1">
            <span className="max-w-[44px] max-h-11 overflow-hidden border border-[var(--strong-green)] rounded-full border-[2px]">
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
      {children}
    </div>
  );
  /*
    : (
      <div className="flex h-[100%]">
        <nav
          className="max-w-[90px] pt-6 bg-[var(--black)] flex flex-col items-center justify-between duration-200 h-screen"
          onMouseOver={() => setExpand(true)}
        >
          <div className="flex flex-col items-center mt-3">
            <img
              src={logo}
              alt="HubServis Logo"
              className="max-w-[50px] rounded mb-[45px] mt-[0px]"
            />
  
            <CardSelect
              isEnabled={false}
              icon={<House fill={gray} size={30} className="" />}
            />
  
            <CardSelect
              icon={<CalendarCheck fill={gray} size={30} className="" />}
            />
  
            <CardSelect
              icon={<CurrencyCircleDollar fill={gray} size={30} className="" />}
            />
  
            <CardSelect
              icon={<UserCircle fill={gray} size={30} className="" />}
            />
  
            <CardSelect icon={<Toolbox fill={gray} size={30} className="" />} />
  
            <CardSelect icon={<Package fill={gray} size={30} className="" />} />
  
            <CardSelect
              icon={<UsersThree fill={gray} size={30} className="" />}
            />
  
            <CardSelect icon={<Gear fill={gray} size={30} className="" />} />
  
            <hr className="w-[98%] m-auto bg-[var(--dark-gray)] border-[var(--dark-gray)] mt-7" />
          </div>
  
          <div className="flex flex-col items-center mb-10 mt-3">
            <div className="bg-[#2C2C2C] mx-3 px-4 mb-3 py-2 rounded-[10px] w-[60px] h-[60px] flex items-center cursor-pointer">
              <ToggleRight fill={gray} size={30} />
            </div>
  
            <div className="w-[60px] flex bg-[#2C2C2C] py-2 rounded-[10px] gap-1 justify-center">
              <span className="max-w-[44px] max-h-[44px] overflow-hidden border border-[var(--strong-green)] rounded-full border-[2px]">
                <img
                  src={imgProfile}
                  alt="profile photo"
                  className="object-cover"
                />
              </span>
            </div>
          </div>
        </nav>
        <main className="flex flex-col h-full">
          {children}
        </main>
      </div>
      );*/
};
