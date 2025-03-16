import { useState } from "react";

import { X } from "@phosphor-icons/react";
import { StepOne } from "./stepOne";
import { StepTree } from "./stepTree";
import { StepTwo } from "./stepTwo";

import { ArrowLeft } from "@phosphor-icons/react";

import BtnFillGreen from "../../../../../Buttons/BtnFillGreen/BtnFillGreen";

const modalSteps = [
  { component: <StepOne /> },
  { component: <StepTwo /> },
  { component: <StepTree /> },
];

const onModalOpen = "absolute top-0 left-0 w-[100vw] h-[100%] bg-[#4141414D] z-50";

const onModalClosed = "hidden";

export const CommandModalSteps = ({ isOpen, setIsOpen }) => {
  const [step, setStep] = useState(0);

  return (
    <div className={`${isOpen ? onModalOpen : onModalClosed}`}>
      <div className="bg-white w-full max-w-[800px] py-[30px] px-[30px] m-auto mt-[10%] rounded-[8px]">
        <div className="flex justify-between">
          <h2 className="font-bold text-[20px] text-[var(--dark-gray)] mb-5">Nova comanda/Pagamento</h2>
          <X
            size={26}
            onClick={() => setIsOpen(false)}
            className="cursor-pointer"
          />
        </div>

        {modalSteps[step].component}

        <div className="flex justify-end gap-[50px]">
          {(step < 2 && (
            <>
              <button
                onClick={() => setStep(step > 0 && step - 1 || 0)}
                className="flex items-center text-[var(--gray-opacity-44)]"
              >
                <ArrowLeft />
                <p>Back</p>
              </button>

              <BtnFillGreen onclick={() => setStep(step + 1)}>
                Next
              </BtnFillGreen>
            </>
          )) || (
            <>
              <button
                onClick={() => setStep(step - 1)}
                className="flex items-center"
              >
                <ArrowLeft />
                <p>Back</p>
              </button>

              <BtnFillGreen onClick={() => console.log("envia pro back")}>
                Enviar
              </BtnFillGreen>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
