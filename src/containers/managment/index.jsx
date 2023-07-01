import { useState } from "react";

import searchIcon from "../../assets/search.svg";
import calendarIcon from "../../assets/Managment/headerManagment/calendar.svg";
import clockIcon from "../../assets/Managment/headerManagment/clock.svg";
import bellIcon from "../../assets/Managment/headerManagment/bellManagment.svg";

const date = new Date();

export const Management = () => {
  const [search, setSearch] = useState("");

  return (
    <div>
      <div>
        <img src={searchIcon} alt="search icon" />
        <input
          placeholder="Search here"
          onChange={(event) => setSearch(event.target.value)}
        />
      </div>

      <div>
        <div>
          <img src={calendarIcon} alt="calendar icon" />
          <p>
            Hoje {date.getDay()} de {date.getMonth()}
          </p>
        </div>

        <div>
          <img src={clockIcon} alt="clock icon" />
          <p>{date.getHours()}</p>
        </div>

        <div>
          <img src={bellIcon} alt="bell icon" />
        </div>
      </div>
    </div>
  );
};
