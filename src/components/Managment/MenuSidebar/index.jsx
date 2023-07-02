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
  const [expand, setExpand] = useState(false);

  const reduceString = (str, numCaracters) => {
    if (str.length <= numCaracters) {
      return str;
    } else {
      return str.slice(0, numCaracters) + "...";
    }
  };

  return expand ? (
    <div className="flex">
      <nav
        className="max-w-[320px] bg-[var(--black)] pt-6 flex flex-col justify-between duration-200 h-100%"
        onMouseLeave={() => setExpand(false)}
      >
        <div className="flex flex-col items-start mt-3">
          <div className="flex items-center gap-2 ml-5 mb-10">
            <img src={logo} alt="HubServis Logo" className="w-[50px] rounded" />
            <h1 className="font-extrabold text-[26px] text-[var(--dark-green)]">
              HubServis
            </h1>
          </div>

          <CardSelect
            open={selected == 1 && true}
            clickFunction={() => setSelected(1)}
            title="Home"
            icon={<House fill={gray} size={30} className="" />}
          >
            <p>Hello World</p>
          </CardSelect>

          <CardSelect
            open={selected == 2 && true}
            clickFunction={() => setSelected(2)}
            title="Agenda"
            icon={<CalendarCheck fill={gray} size={30} className="" />}
          >
            <div
              style={{ color: "white" }}
              className="ml-[5rem] max-w-[fit-content] "
            >
              <p className="max-w-[fit-content]" onClick={() => setContext(0)}>Agendamentos</p>
              <p className="max-w-[fit-content]" onClick={() => setContext(1)}>Listagem</p>
              <p className="max-w-[fit-content]" onClick={() => setContext(2)}>Bloqueios</p>
            </div>
          </CardSelect>

          <CardSelect
            open={selected == 3 && true}
            clickFunction={() => setSelected(3)}
            title="Financeiro"
            icon={<CurrencyCircleDollar fill={gray} size={30} className="" />}
          >
            <div
              style={{ color: "white" }}
              className="ml-[5rem] max-w-[fit-content] "
            >
              <p className="max-w-[fit-content]" onClick={() => setContext(3)}>Comandas</p>
              <p className="max-w-[fit-content]" onClick={() => setContext(4)}>Relatórios</p>
            </div>
          </CardSelect>

          <CardSelect
            open={selected == 4 && true}
            clickFunction={() => setSelected(4)}
            title="Clientes"
            icon={<UserCircle fill={gray} size={30} className="" />}
          >
            <div
              style={{ color: "white" }}
              className="ml-[5rem] max-w-[fit-content] "
            >
              <p className="max-w-[fit-content]" onClick={() => setContext(5)}>Listagem</p>
            </div>
          </CardSelect>

          <CardSelect
            open={selected == 5 && true}
            clickFunction={() => setSelected(5)}
            title="Serviços"
            icon={<Toolbox fill={gray} size={30} className="" />}
          >
            <div
              style={{ color: "white" }}
              className="ml-[5rem] max-w-[fit-content] "
            >
              <p className="max-w-[fit-content]" onClick={() => setContext(6)}>Listagem</p>
              <p className="max-w-[fit-content]" onClick={() => setContext(7)}>Categorias</p>
            </div>
          </CardSelect>

          <CardSelect
            open={selected == 6 && true}
            clickFunction={() => setSelected(6)}
            title="Produtos"
            icon={<Package fill={gray} size={30} className="" />}
          >
            <div
              style={{ color: "white" }}
              className="ml-[5rem] max-w-[fit-content] "
            >
              <p className="max-w-[fit-content]" onClick={() => setContext(8)}>Listagem</p>
              <p className="max-w-[fit-content]" onClick={() => setContext(9)}>Categorias</p>
            </div>
          </CardSelect>

          <CardSelect
            open={selected == 7 && true}
            clickFunction={() => setSelected(7)}
            title="Equipe"
            icon={<UsersThree fill={gray} size={30} className="" />}
          >
            <div
              style={{ color: "white" }}
              className="ml-[5rem] max-w-[fit-content] "
            >
              <p className="max-w-[fit-content]" onClick={() => setContext(10)}>Profissionais</p>
              <p className="max-w-[fit-content]" onClick={() => setContext(11)}>Expedientes</p>
            </div>
          </CardSelect>

          <CardSelect
            open={selected == 7 && true}
            clickFunction={() => setSelected(7)}
            title="Settings"
            icon={<Gear fill={gray} size={30} className="" />}
          >
            <div
              style={{ color: "white" }}
              className="ml-[5rem] max-w-[fit-content] "
            >
              <p className="max-w-[fit-content]" onClick={() => setContext(12)}>Agendamentos</p>
              <p className="max-w-[fit-content]" onClick={() => setContext(13)}>Listagem</p>
            </div>
          </CardSelect>

          <hr className="w-full max-w-[230px] m-auto bg-[var(--dark-gray)] border-[var(--dark-gray)] mt-7" />
        </div>

        <div className="mb-10 mt-3">
          <div className="bg-[#2C2C2C] mx-3 px-4 mb-3 py-2 rounded-[10px] w-[60px] h-[60px] flex items-center cursor-pointer">
            <ToggleRight fill={gray} size={30} />
          </div>

          <div className="flex bg-[#2C2C2C] mx-3 px-4 py-2 rounded-[10px] gap-1">
            <span className="max-w-[44px] max-h-[44px] overflow-hidden border border-[var(--strong-green)] rounded-full border-[2px]">
              <img
                src={imgProfile}
                alt="profile photo"
                className="object-cover"
              />
            </span>
            <div>
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
  ) : (
    <div className="flex">
      <nav
        className="max-w-[90px] pt-6 bg-[var(--black)] flex flex-col items-center justify-between duration-200 h-100%"
        onMouseOver={() => setExpand(true)}
      >
        <div className="flex flex-col items-center mt-3">
          <img
            src={logo}
            alt="HubServis Logo"
            className="max-w-[50px] rounded mb-[10px] mt-[10px]"
          />

          <CardSelect
            icon={<House fill={gray} size={30} className="" />}
            isEnabled={expand}
          >
            <p>Hello World</p>
          </CardSelect>

          <CardSelect
            clickFunction={() => setSelected(2)}
            icon={<CalendarCheck fill={gray} size={30} className="" />}
            isEnabled={expand}
          >
            <p>Hello World</p>
          </CardSelect>

          <CardSelect
            clickFunction={() => setSelected(3)}
            icon={<CurrencyCircleDollar fill={gray} size={30} className="" />}
            isEnabled={expand}
          >
            <p>Hello World</p>
          </CardSelect>

          <CardSelect
            clickFunction={() => setSelected(4)}
            icon={<UserCircle fill={gray} size={30} className="" />}
            isEnabled={expand}
          >
            <p>Hello World</p>
          </CardSelect>

          <CardSelect
            clickFunction={() => setSelected(5)}
            icon={<Toolbox fill={gray} size={30} className="" />}
            isEnabled={expand}
          >
            <p>Hello World</p>
          </CardSelect>

          <CardSelect
            clickFunction={() => setSelected(6)}
            icon={<Package fill={gray} size={30} className="" />}
            isEnabled={expand}
          >
            <p>Hello World</p>
          </CardSelect>

          <CardSelect
            clickFunction={() => setSelected(7)}
            icon={<UsersThree fill={gray} size={30} className="" />}
            isEnabled={expand}
          >
            <p>Hello World</p>
          </CardSelect>

          <CardSelect
            clickFunction={() => setSelected(7)}
            icon={<Gear fill={gray} size={30} className="" />}
            isEnabled={expand}
          >
            <p>Hello World</p>
          </CardSelect>

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
      {children}
    </div>
  );
};
