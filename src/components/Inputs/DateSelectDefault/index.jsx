import React from "react";
import calendarBlackIcon from "../../../assets/Managment/calendarBlank.svg";

const DateSelectDefault = () => {
  return (
    <>
      <div className="flex py-[10px] px-[19px] border-2 rounded-[8px] border-[var(--light-green)]">
        <img src={calendarBlackIcon} alt="blank calendar" />
        <input type="date" />
      </div>
    </>
  );
};

export default DateSelectDefault;
