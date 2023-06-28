import React, { useState } from 'react';
import logo from '../../assets/HS-DESIGN.png';
import CardSelect from './components/CardSelect';
import { House, CalendarCheck, CurrencyCircleDollar, UserCircle, Toolbox, Package, UsersThree, ToggleRight, Gear } from "@phosphor-icons/react";
import { gray } from '../../style/global-colors';
import imgProfile from '../../assets/profile-exemple.png';

const MenuSidebar = ({ children }) => {
    const [selected, setSelected] = useState(0);

    const reduceString = (str, numCaracters) => {
        if (str.length <= numCaracters) {
            return str;
        } else {
            return str.slice(0, numCaracters) + "...";
        }
    }

    return (
        <div className='flex'>
            <nav className="max-w-[296px] h-screen bg-[var(--black)] pt-10 flex flex-col justify-between">
                <div>
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

                    <CardSelect
                        open={selected == 7 && true}
                        clickFunction={() => setSelected(7)}
                        title="Settings"
                        icon={<Gear fill={gray} size={30} className="" />}
                    >
                        <p>Hello World</p>
                    </CardSelect>

                    <hr className='w-full max-w-[230px] m-auto bg-[var(--dark-gray)] border-[var(--dark-gray)] mt-7' />
                </div>

                <div className='mb-10 mt-3'>
                    <div className='bg-[#2C2C2C] mx-3 px-4 mb-3 py-2 rounded-[10px] w-[60px] h-[60px] flex items-center cursor-pointer'>
                        <ToggleRight fill={gray} size={30} />
                    </div>

                    <div className='flex bg-[#2C2C2C] mx-3 px-4 py-2 rounded-[10px] gap-1'>
                        <span className='max-w-[44px] max-h-[44px] overflow-hidden border border-[var(--strong-green)] rounded-full border-[2px]'>
                            <img src={imgProfile} alt="profile photo" className='object-cover' />
                        </span>
                        <div>
                            <h4 className='text-[var(--strong-green)] font-medium text-base'>Ramilthon</h4>
                            <p className='text-[var(--gray-opacity-50)] font-medium text-sm'>{reduceString('ramilthonbmw@gmail.com', 16)}</p>
                        </div>
                    </div>
                </div>
            </nav>
            {children}
        </div>
    );
}

export default MenuSidebar;