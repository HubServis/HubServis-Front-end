import calendarBlackIcon from "../../../../assets/Managment/calendarBlank.svg";

import { useState } from "react";
import { BarChart } from "./components/barChart";
import { PizzaChart } from "./components/pizzaChart";
import { CommandListModel } from "./components/commandListModel";
import SelectFilter from "../../../SelectFilter";
import DateSelectDefault from "../../../Inputs/DateSelectDefault";

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
              <div>
                <p>Data Inicío</p>
                <DateSelectDefault />
              </div>
              <div>
                <p>Data Fim</p>
                <DateSelectDefault />
              </div>
            </div>

            <SelectFilter />
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
