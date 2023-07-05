import { useState } from "react";

import crossIcon from "../../../../assets/Managment/plus.svg";

import { ListServiceModel } from "./components/listServiceModel";
import { NewServiceModal } from "./components/newServiceModal";

export const ServiceList = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="py-[22px] px-[17px] border-2 rounded-[8px] border-[var(--light-green)]">
      <h2 className="font-bold text-[20px]">Listagem de Serviço</h2>

      <div className="mt-[65px]">
        <div className="flex justify-between">
          <div
            className="w-[245px] gap-[13px] py-[10px] px-[19px] flex items-center border-2 rounded-[8px] border-[var(--light-green)] cursor-pointer"
            onClick={() => setIsOpen(true)}
          >
            <img src={crossIcon} alt="cross icon" />
            <p>Novo Serviço</p>
          </div>

          <div className="flex w-[150px] h-[56px] py-[10px] px-[19px] border-2 rounded-[8px] border-[var(--light-green)]">
            <select
              className="w-[100%] text-[16px] outline-none"
              placeholder="Test"
            >
              <option>Ativos</option>
              <option>Pendentes</option>
              <option>Cancelados</option>
            </select>
          </div>
        </div>

        <div className="overflow-auto max-h-[500px] flex flex-col mt-[35px] gap-[20px]">
          <ListServiceModel />
          <ListServiceModel />
        </div>
      </div>

      <NewServiceModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
};
