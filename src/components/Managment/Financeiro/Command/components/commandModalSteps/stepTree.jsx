import { StepsIndicator } from "./components/stepsIndicator";

import { Plus, Trash } from "@phosphor-icons/react";

import BtnIconOutlinedCustom from "../../../../../../components/Buttons/BtnIconOutlinedCustom/BtnIconOutlinedCustom.jsx";

export const StepTree = () => {
  return (
    <div>
      <div>
        <StepsIndicator steps={2} />
      </div>

      <div className="flex flex-col overflow-scroll max-h-[300px]">
        <div className="flex items-center gap-[40px]">
          <div>
            <p className="text-[var(--dark-gray)]">Tipo</p>
            <input
              type="text"
              placeholder="Lorem"
              className="py-[15px] px-[6px] w-[100%] border-2 rounded-[8px] border-[var(--light-green)] outline-none"
            />
          </div>

          <div>
            <p className="text-[var(--dark-gray)]">Valor Total</p>
            <input
              type="text"
              placeholder="example@example.com"
              className="py-[15px] px-[6px] w-[100%] border-2 rounded-[8px] border-[var(--light-green)] outline-none"
            />
          </div>

          <div className="flex justify-between">
            <div>
              <p className="text-[var(--dark-gray)]">Desconto</p>
              <input
                type="text"
                placeholder="xxx.xxx.xxx-xx"
                className="py-[15px] px-[6px] w-[100%] border-2 rounded-[8px] border-[var(--light-green)] outline-none"
              />
            </div>
          </div>

          <div className="h-[100%] flex items-center pt-5">
            <Trash color="red" width={30} height={30} cursor='pointer'/>
          </div>
        </div>

        <div className="flex items-center gap-[40px]">
          <div>
            <p className="text-[var(--dark-gray)]">Tipo</p>
            <input
              type="text"
              placeholder="Lorem"
              className="py-[15px] px-[6px] w-[100%] border-2 rounded-[8px] border-[var(--light-green)] outline-none"
            />
          </div>

          <div>
            <p className="text-[var(--dark-gray)]">Valor Total</p>
            <input
              type="text"
              placeholder="example@example.com"
              className="py-[15px] px-[6px] w-[100%] border-2 rounded-[8px] border-[var(--light-green)] outline-none"
            />
          </div>

          <div className="flex justify-between">
            <div>
              <p className="text-[var(--dark-gray)]">Desconto</p>
              <input
                type="text"
                placeholder="xxx.xxx.xxx-xx"
                className="py-[15px] px-[6px] w-[100%] border-2 rounded-[8px] border-[var(--light-green)] outline-none"
              />
            </div>
          </div>

          <div className="h-[100%] flex items-center pt-5">
            <Trash color="red" width={30} height={30} cursor='pointer'/>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between mt-10">
        <BtnIconOutlinedCustom>
          <Plus />
          <p>Forma de Pagamento</p>
        </BtnIconOutlinedCustom>

        <p>Total a pagar: R$600,00</p>
      </div>
    </div>
  );
};
