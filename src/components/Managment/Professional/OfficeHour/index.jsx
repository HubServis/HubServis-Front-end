import { useState } from "react";

import crossIcon from "../../../../assets/Managment/plus.svg";

import { OfficeHourModel } from "./components/officeHourModel";
import { NewOfficeHourModal } from "./components/newOfficeHourModal";
import { HeaderManagment } from "../../Header";

export const OfficeHour = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <HeaderManagment />
      <div className="mt-[60px] py-[22px] px-[17px] border-2 rounded-[8px] border-[var(--light-green)]">
        <h2 className="font-bold text-[20px]">Expediente de profissionais</h2>

        <div className="mt-[65px]">
          <div className="flex justify-between">
            <div
              className="w-[245px] gap-[13px] py-[10px] px-[19px] flex items-center border-2 rounded-[8px] border-[var(--light-green)] cursor-pointer"
              onClick={() => setIsOpen(true)}
            >
              <img src={crossIcon} alt="cross icon" />
              <p>Novo expediente</p>
            </div>
          </div>

          <div className="overflow-auto max-h-[500px] flex flex-col mt-[35px] gap-[20px]">
            <OfficeHourModel />
            <OfficeHourModel />
          </div>
        </div>

        <NewOfficeHourModal isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    </>
  );
};
