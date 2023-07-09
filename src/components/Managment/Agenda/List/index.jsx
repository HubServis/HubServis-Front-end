import React, { useState } from "react";
import calendarBlackIcon from "../../../../assets/Managment/calendarBlank.svg";
import { ListUserModel } from "./components/listUserModel";
import SelectFilter from "../../../SelectFilter";

export const ListAgenda = () => {
  const ApiResponse = [
    {
      name: "Ricardo Sla",
      service: "Corte de Cabelo",
      date: "20/07/2023 - 07:00 AM",
      status: 0,
    },
    {
      name: "Ricardo Sla 2",
      service: "Alisamento de Cabelo",
      date: "23/07/2023 - 07:00 AM",
      status: 1,
    },
    {
      name: "Amanda",
      service: "Alisamento de Cabelo",
      date: "20/07/2023 - 07:00 AM",
      status: 2,
    },
    {
      name: "Ricardo Sla 2",
      service: "Alisamento de Cabelo",
      date: "21/07/2023 - 07:00 AM",
      status: 1,
    },
    {
      name: "Ramilthon",
      service: "Corte afro",
      date: "22/07/2023 - 07:00 AM",
      status: 0,
    },
  ];

  const ListRows = () => {
    return ApiResponse.map((data) => {
      return (
        <ListUserModel
          name={data.name}
          service={data.service}
          date={data.date}
          status={data.status}
        />
      );
    });
  };

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

          <SelectFilter/>
        </div>
      </div>

      <div className="overflow-auto max-h-[500px] flex flex-col mt-[40px] gap-[20px]">
        <ListRows />
      </div>
    </div>
  );
};
