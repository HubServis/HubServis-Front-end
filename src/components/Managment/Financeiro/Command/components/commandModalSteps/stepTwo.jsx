import BtnIconOutlinedCustom from "../../../../../Buttons/BtnIconOutlinedCustom/BtnIconOutlinedCustom";

import { StepsIndicator } from "./components/stepsIndicator";

import plus from "../../../../../../assets/Managment/plus.svg";

export const StepTwo = () => {
  return (
    <div>
      <div>
        <StepsIndicator steps={1} />
      </div>

      <div className="flex flex-col gap-[20px] overflow-scroll h-[200px]">
        <div className="flex gap-10">
          <div className="flex flex-col gap-3">
            <div>
              <p className="text-[var(--dark-gray)]">Profissional</p>
              <input
                type="text"
                placeholder="Lorem"
                className="py-[15px] px-[6px] w-[100%] border-2 rounded-[8px] border-[var(--light-green)] outline-none"
              />
            </div>

            <div className="flex gap-10 justify-between">
              <div>
                <p className="text-[var(--dark-gray)]">Quantidade</p>
                <input
                  type="text"
                  placeholder="xxx.xxx.xxx-xx"
                  className="py-[15px] px-[6px] w-[100%] border-2 rounded-[8px] border-[var(--light-green)] outline-none"
                />
              </div>
              <div>
                <p className="text-[var(--dark-gray)]">Preço</p>
                <input
                  type="tel"
                  placeholder="(xx) xxxxx-xxxx"
                  className="py-[15px] px-[6px] w-[100%] border-2 rounded-[8px] border-[var(--light-green)] outline-none"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <div>
              <p className="text-[var(--dark-gray)]">Serviço ou Produto</p>
              <input
                type="text"
                placeholder="example@example.com"
                className="py-[15px] px-[6px] w-[100%] border-2 rounded-[8px] border-[var(--light-green)] outline-none"
              />
            </div>

            <div className="flex gap-10 justify-between">
              <div>
                <p className="text-[var(--dark-gray)]">Valor total</p>
                <input
                  type="text"
                  placeholder="xxx.xxx.xxx-xx"
                  className="py-[15px] px-[6px] w-[100%] border-2 rounded-[8px] border-[var(--light-green)] outline-none"
                />
              </div>
              <div>
                <p className="text-[var(--dark-gray)]">Comissão</p>
                <input
                  type="tel"
                  placeholder="(xx) xxxxx-xxxx"
                  className="py-[15px] px-[6px] w-[100%] border-2 rounded-[8px] border-[var(--light-green)] outline-none"
                />
              </div>
            </div>
          </div>
        </div>

        <hr className="w-[100%] h-[2px] bg-gray" />

        <div className="flex gap-10">
          <div>
            <div>
              <p className="text-[var(--dark-gray)]">Profissional</p>
              <input
                type="text"
                placeholder="Lorem"
                className="py-[15px] px-[6px] w-[100%] border-2 rounded-[8px] border-[var(--light-green)] outline-none"
              />
            </div>

            <div className="flex gap-10 justify-between">
              <div>
                <p className="text-[var(--dark-gray)]">Quantidade</p>
                <input
                  type="text"
                  placeholder="xxx.xxx.xxx-xx"
                  className="py-[15px] px-[6px] w-[100%] border-2 rounded-[8px] border-[var(--light-green)] outline-none"
                />
              </div>
              <div>
                <p className="text-[var(--dark-gray)]">Preço</p>
                <input
                  type="tel"
                  placeholder="(xx) xxxxx-xxxx"
                  className="py-[15px] px-[6px] w-[100%] border-2 rounded-[8px] border-[var(--light-green)] outline-none"
                />
              </div>
            </div>
          </div>

          <div>
            <div>
              <p className="text-[var(--dark-gray)]">Serviço ou Produto</p>
              <input
                type="text"
                placeholder="example@example.com"
                className="py-[15px] px-[6px] w-[100%] border-2 rounded-[8px] border-[var(--light-green)] outline-none"
              />
            </div>

            <div className="flex gap-10 justify-between">
              <div>
                <p className="text-[var(--dark-gray)]">Valor total</p>
                <input
                  type="text"
                  placeholder="xxx.xxx.xxx-xx"
                  className="py-[15px] px-[6px] w-[100%] border-2 rounded-[8px] border-[var(--light-green)] outline-none"
                />
              </div>
              <div>
                <p className="text-[var(--dark-gray)]">Comissão</p>
                <input
                  type="tel"
                  placeholder="(xx) xxxxx-xxxx"
                  className="py-[15px] px-[6px] w-[100%] border-2 rounded-[8px] border-[var(--light-green)] outline-none"
                />
              </div>
            </div>
          </div>
        </div>

        <hr className="w-[100%] h-[2px] bg-gray" />
      </div>

      <div className="flex justify-between mt-[20px]">
        <BtnIconOutlinedCustom>
          <img src={plus} alt="+" />
          <p>Serviço ou Produto</p>
        </BtnIconOutlinedCustom>

        <h2>Total: R$600,00</h2>
      </div>
    </div>
  );
};
