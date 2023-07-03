import { useState } from "react";

import { BlockedUser } from "./components/blockedUser";
import { NewBlockModal } from "./components/newBlockModal";

import crossIcon from "../../../../assets/Managment/plus.svg";

export const BlockList = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="py-[22px] px-[17px] border-2 rounded-[8px] border-[var(--light-green)]">
      <h2 className="font-bold text-[20px]">Bloqueio de Agendamentos</h2>

      <div className="mt-[65px]">
        <div
          className="w-[245px] gap-[13px] py-[10px] px-[19px] flex items-center border-2 rounded-[8px] border-[var(--light-green)] cursor-pointer"
          onClick={() => setIsOpen(true)}
        >
          <img src={crossIcon} alt="cross icon" />
          <p>Criar novo bloqueio</p>
        </div>

        <div className="overflow-auto max-h-[500px] flex flex-col mt-[35px] gap-[20px]">
          <BlockedUser />
          <BlockedUser />
        </div>
      </div>

      <NewBlockModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
};
