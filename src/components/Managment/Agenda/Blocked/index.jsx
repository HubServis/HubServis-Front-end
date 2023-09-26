import { useState } from "react";

import { BlockedUserModel } from "./components/blockedUserModel";
import { NewBlockModal } from "./components/newBlockModal";

import BtnIconOutlinedCustom from "../../../Buttons/BtnIconOutlinedCustom/BtnIconOutlinedCustom";
import { Plus } from "@phosphor-icons/react";
import { HeaderManagment } from "../../Header";

export const BlockList = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <HeaderManagment/>
      <div className="mt-[60px] py-[22px] px-[17px] border-2 rounded-[8px] border-[var(--light-green)]">
        <h2 className="font-bold text-[20px]">Bloqueio de Agendamentos</h2>

        <div className="mt-[65px]">
        
          <BtnIconOutlinedCustom onclick={() => setIsOpen(true)}>
            <Plus size={32} className="text-[var(--dark-green)]"/>
            <p className="text-base font-medium">Criar novo bloqueio</p>
          </BtnIconOutlinedCustom>

          <div className="overflow-auto max-h-[500px] flex flex-col mt-[35px] gap-[20px]">
            <BlockedUserModel />
            <BlockedUserModel />
          </div>
        </div>

        <NewBlockModal isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    </>
  );
};
