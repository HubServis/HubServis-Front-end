import React from 'react';
import { CaretDown, CaretUp } from "@phosphor-icons/react";
import { gray } from '../../../style/global-colors';

const CardSelect = ({children, open = false, clickFunction = () => {}, title = "Indefinido", icon}) => {
    return (
        <>
            <div className='items-center hover:bg-[var(--medium-light-black)] rounded-xl mx-4 py-[10px] px-[15px] flex justify-between my-1' onClick={() => clickFunction()}>
                <span className='flex items-center gap-4'>
                    {icon}
                    <p className='text-[var(--gray)] text-sm'>{title}</p>
                </span>
                {
                    open ? <CaretUp fill={gray} size={20} className="" /> :
                    <CaretDown fill={gray} size={20} className="" />
                }
            </div>
            {open && children}
        </>
    );
}

export default CardSelect;