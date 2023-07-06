import calendarBlackIcon from '../../../../assets/Managment/calendarBlank.svg'

import { useState } from "react";
import { BarChart } from "./components/barChart";
import { PizzaChart } from "./components/pizzaChart";
import { CommandListModel } from './components/commandListModel';

export const Command = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="py-[22px] px-[17px] border-2 rounded-[8px] border-[var(--light-green)]">
      <div className="flex items-start justify-between gap-[20px]">
        <button className="py-[12px] px-[30px] rounded-[8px] border-[var(--light-green)] border-[2px]">
          Nova Venda
        </button>

        <div>
          <div>
            <p>Faturamento e Gastos</p>
            <p>Mensal</p>
          </div>

          <BarChart />
        </div>

        <div>
          <div>
            <p>Tipos de Pagamentos</p>
            <p>5.987,34</p>
            <p>mensal</p>
          </div>

          <PizzaChart />
        </div>
      </div>

      <div className="py-[22px] px-[17px] border-2 rounded-[8px] border-[var(--light-green)]">
        <h2 className="font-bold text-[20px]">Comandas</h2>

        <div className="mt-[65px]">
          <div className="flex justify-between items-end">
            <div className="flex gap-[10px]">
              <div className="flex flex-col">
                <p>Data Inicío</p>

                <div className="flex py-[10px] px-[19px] border-2 rounded-[8px] border-[var(--light-green)]">
                  <img src={calendarBlackIcon} alt="blank calendar" />
                  <input type="date" />
                </div>
              </div>

              <div>
                <p>Data Fim</p>

                <div className="flex py-[10px] px-[19px] border-2 rounded-[8px] border-[var(--light-green)]">
                  <img src={calendarBlackIcon} alt="blank calendar" />
                  <input type="date" />
                </div>
              </div>
            </div>

            <div className="flex w-[150px] h-[56px] py-[10px] px-[19px] border-2 rounded-[8px] border-[var(--light-green)]">
              <select
                className="w-[100%] text-[20px] outline-none"
                placeholder="Test"
              >
                <option>Ativos</option>
                <option>Pendentes</option>
                <option>Cancelados</option>
              </select>
            </div>
          </div>
        </div>

      <div className="overflow-auto max-h-[500px] flex flex-col mt-[40px] gap-[20px]">
        <CommandListModel />
        <CommandListModel />
      </div>
      </div>
    </div>
  );
};
