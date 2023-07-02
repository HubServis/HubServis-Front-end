import { useState } from "react";

import searchIcon from "../../../assets/search.svg";
import calendarIcon from "../../../assets/Managment/headerManagment/calendar.svg";
import clockIcon from "../../../assets/Managment/headerManagment/clock.svg";
import bellIcon from "../../../assets/Managment/headerManagment/bellManagment.svg";

const date = new Date();

export const HeaderManagment = () => {
  const [search, setSearch] = useState("");

  return (
    <div className="flex justify-between">
      <div className="flex border-2 border-[var(--light-green)] rounded-[4px] py-[6px] px-[10px] gap-[5px]">
        <img src={searchIcon} alt="search icon" />
        <input
          className="text-[#30883F] outline-none"
          placeholder="Search here"
          onChange={(event) => setSearch(event.target.value)}
        />
      </div>

      <div className="flex gap-[45px]">
        <div className="flex items-center gap-[10px]">
          <img src={calendarIcon} alt="calendar icon" />
          <p className="w-max whitespace-nowrap">
            Hoje {date.getDay()} de {date.getMonth()}
          </p>
        </div>

        <div className="flex items-center gap-[10px]">
          <img src={clockIcon} alt="clock icon" />
          <p className="whitespace-nowrap">{date.getHours()}</p>
        </div>

        <div className="p-[9px] border-[1px] rounded-[8px] border-black">
          <img src={bellIcon} alt="bell icon" />
        </div>
      </div>
    </div>
  );
};
