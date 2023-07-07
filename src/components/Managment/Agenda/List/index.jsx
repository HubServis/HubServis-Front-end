import calendarBlackIcon from "../../../../assets/Managment/calendarBlank.svg";

import { ListUserModel } from "./components/listUserModel";

export const ListAgenda = () => {
  return (
    <div className="py-[22px] px-[17px] border-2 rounded-[8px] border-[var(--light-green)]">
      <h2 className="font-bold text-[20px]">Agendamentos</h2>

      <div className="mt-[65px]">
        <div className="flex justify-between items-end">
          <div className="flex gap-[10px]">
            <div className="flex flex-col">
              <p>Data Inicío</p>

              <div className="flex py-[10px] px-[19px] border-2 rounded-[8px] border-[var(--light-green)]">
                <img src={calendarBlackIcon} alt="blank calendar" />
                <input type="date"/>
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

          <div className="flex min-w-[200px] h-[56px] py-[10px] px-[19px] border-2 rounded-[8px] border-[var(--light-green)]">
            <select className="w-[100%] text-[16px] outline-none bg-transparent" placeholder="Test">
              <option>Ativos</option>
              <option>Pendentes</option>
              <option>Cancelados</option>
            </select>
          </div>
        </div>
      </div>

      <div className="overflow-auto max-h-[500px] flex flex-col mt-[40px] gap-[20px]">
        <ListUserModel />
        <ListUserModel />
      </div>
    </div>
  );
};
