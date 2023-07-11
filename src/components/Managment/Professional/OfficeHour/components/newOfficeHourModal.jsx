import React, { useState } from "react";
import { X } from "@phosphor-icons/react";
import HoursOrMinutsSelect from "../../../../Inputs/HoursOrMinutsSelect";
import { CheckBox } from "../../../../";
import { InputMask } from 'primereact/inputmask';

const onModalOpen =
"block absolute top-0 left-0 w-[100vw] h-[100vh] bg-[#4141414D]";

const onModalClosed = "hidden duration-300 ease-in-out";

const TableList = ({ day, checked }) => {
  const [value, setValue] = useState('');

  return(

    <tr className="relative">
      <div className="absolute bg-[var(--light-green)] h-[3px] w-[100%]"></div>
  
      <div className="h-[60px]"></div>
  
      <td>
        <div className="flex gap-[5px]">
          <CheckBox/>
          <p className="text-[var(--gray-opacity-50)]">{day}</p>
        </div>
      </td>
  
      <td>
        <div className="flex justify-center">
          <HoursOrMinutsSelect />
        </div>
      </td>
  
      <td>
        <div className="flex justify-center">
          <InputMask className="max-w-[75px]" value={value} onChange={(e) => setValue(e.target.value)} mask="99:99" placeholder="__:__"/>
        </div>
      </td>
  
      <td>
        <div className="flex justify-center">
          <HoursOrMinutsSelect />
        </div>
      </td>
    </tr>
  );
}

export const NewOfficeHourModal = ({ isOpen, setIsOpen }) => {

  return (
    <div className={isOpen ? onModalOpen : onModalClosed}>
      <div className="bg-white w-full max-w-[800px] py-[30px] px-[30px] relative m-auto top-[calc(50%-400px)] rounded-[8px]">
        <div className="flex flex-col gap-[15px]">
          <div className="flex justify-between">
            <h2 className="font-normal text-[20px]">Novo expediente</h2>
            <X
              size={26}
              onClick={() => setIsOpen(false)}
              className="cursor-pointer"
            />
          </div>

          <div>
            <p>Nome do expediente:</p>
            <input
              id=""
              name=""
              className="py-[10px] px-[6px] w-[100%] border-2 rounded-[8px] border-[var(--light-green)] outline-none"
            />
          </div>
        </div>

        <div className="flex flex-col gap-[15px] mt-[15px]">
          <p>
            Informe os horários de começo e termino do expediente. Porém,
            lembre-se que o almoço é opcional
          </p>
          <table className="relative">
            <tr>
              <th></th>
              <th>Dia</th>
              <th>Entrada</th>
              <th>Intervalo</th>
              <th>Saida</th>
            </tr>
            <TableList day={"Domingo"} />
            <TableList day={"Segunda"} />
            <TableList day={"Terça"} />
            <TableList day={"Quarta"} />
            <TableList day={"Quinta"} />
            <TableList day={"Sexta"} />
            <TableList day={"Sábado"} />

            <div className="absolute bg-[var(--light-green)] h-[3px] w-[100%]"></div>
          </table>
        </div>

        <div className="mt-[30px] flex justify-end">
          <button className="py-[12px] px-[30px] rounded-[8px] border-[var(--light-green)] bg-[var(--strong-green)] text-white font-bold">
            Salvar
          </button>
        </div>
      </div>
    </div>
  );
};
