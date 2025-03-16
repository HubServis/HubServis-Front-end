import { useState } from "react";
import { StepsIndicator } from "./components/stepsIndicator";
import { RadioButton } from "primereact/radiobutton";

export const StepOne = () => {
  const [selected, setSelected] = useState(null);

  return (
    <div>
      <div>
        <StepsIndicator steps={0} />
      </div>

      <div className="flex flex-col gap-[20px]">
        <div>
          <p className="text-[var(--dark-gray)]">Nome do cliente</p>
          <input
            type="text"
            placeholder="Lorem"
            className="py-[15px] px-[6px] w-[100%] border-2 rounded-[8px] border-[var(--light-green)] outline-none"
          />
        </div>

        <div>
          <p className="text-[var(--dark-gray)]">Email</p>
          <input
            type="text"
            placeholder="example@example.com"
            className="py-[15px] px-[6px] w-[100%] border-2 rounded-[8px] border-[var(--light-green)] outline-none"
          />
        </div>

        <div className="flex justify-between gap-20">
          <div className="w-[100%]">
            <p className="text-[var(--dark-gray)]">CPF</p>
            <input
              type="text"
              placeholder="xxx.xxx.xxx-xx"
              className="py-[15px] px-[6px] w-[100%] border-2 rounded-[8px] border-[var(--light-green)] outline-none"
            />
          </div>
          <div className="w-[100%]">
            <p className="text-[var(--dark-gray)]">Telefone</p>
            <input
              type="tel"
              placeholder="(xx) xxxxx-xxxx"
              className="py-[15px] px-[6px] w-[100%] border-2 rounded-[8px] border-[var(--light-green)] outline-none"
            />
          </div>
        </div>

        <div className="flex justify-between gap-20">
          <div className="w-[100%]">
            <p className="text-[var(--dark-gray)]">Data</p>
            <input
              type="date"
              placeholder="0,00"
              className="py-[15px] px-[6px] w-[100%] border-2 rounded-[8px] border-[var(--light-green)] outline-none"
            />
          </div>

          <div className="flex flex-col w-[100%]">
            <p>Status</p>
            <div className="flex flex-col">
              <div className="flex">
                <RadioButton
                  inputId="0"
                  name="status"
                  value={true}
                  onClick={() => setSelected(0)}
                  checked={selected === 0}
                />
                <p>Aberto</p>
              </div>

              <div className="flex">
                <RadioButton
                  color="green"
                  inputId="1"
                  name="status"
                  value={false}
                  onClick={() => setSelected(1)}
                  checked={selected === 1}
                />
                <p>Fechado</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
