import React, { useState } from 'react';
import logo from '../../assets/HS-DESIGN.png';
import CardSelect from './components/cardSelect';
import { House, CalendarCheck, CurrencyCircleDollar, UserCircle, Toolbox, Package, UsersThree } from "@phosphor-icons/react";
import { gray } from '../../style/global-colors';

const MenuSidebar = () => {
    const [selected, setSelected] = useState(1);

    return (
        <>
            <nav className="max-w-[296px] h-screen bg-[var(--black)] pt-10">
                <div className='flex items-center gap-2 ml-9 mb-10'>
                    <img src={logo} alt="HubServis Logo" className='w-[50px] rounded' />
                    <h1 className='font-extrabold text-[26px] text-[var(--dark-green)]'>HubServis</h1>
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
                    <p>Hello World</p>
                </CardSelect>

                <CardSelect
                    open={selected == 3 && true}
                    clickFunction={() => setSelected(3)}
                    title="Financeiro"
                    icon={<CurrencyCircleDollar fill={gray} size={30} className="" />}
                >
                    <p>Hello World</p>
                </CardSelect>

                <CardSelect
                    open={selected == 4 && true}
                    clickFunction={() => setSelected(4)}
                    title="Clientes"
                    icon={<UserCircle fill={gray} size={30} className="" />}
                >
                    <p>Hello World</p>
                </CardSelect>

                <CardSelect
                    open={selected == 5 && true}
                    clickFunction={() => setSelected(5)}
                    title="Serviços"
                    icon={<Toolbox fill={gray} size={30} className="" />}
                >
                    <p>Hello World</p>
                </CardSelect>

                <CardSelect
                    open={selected == 6 && true}
                    clickFunction={() => setSelected(6)}
                    title="Produtos"
                    icon={<Package fill={gray} size={30} className="" />}
                >
                    <p>Hello World</p>
                </CardSelect>

                <CardSelect
                    open={selected == 7 && true}
                    clickFunction={() => setSelected(7)}
                    title="Equipe"
                    icon={<UsersThree fill={gray} size={30} className="" />}
                >
                    <p>Hello World</p>
                </CardSelect>
            </nav>
        </>
    );
}

export default MenuSidebar;