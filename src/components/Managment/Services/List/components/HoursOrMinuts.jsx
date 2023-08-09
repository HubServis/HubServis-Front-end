import React from "react";

const HoursOrMinuts = ({ borderDirection = "l", type = "h" }) => {
  const View = () => {
    const options = [];
    if (type == "h") {
      for (let i = 0; i <= 23; i++) {
        let hour = i < 10 ? `0${i}` : i;
        options.push(
          <option key={hour} value={hour}>
            {hour} h
          </option>
        );
      }
    } else {
      for (let i = 0; i <= 12; i++) {
        let min = i * 5 < 10 ? `0${i * 5}` : i * 5;
        options.push(
          <option key={min} value={min}>
            {min} m
          </option>
        );
      }
    }

    return options;
  };

  return (
    <>
      <select
        id=""
        name=""
        className={`bg-transparent py-[10px] px-[6px] w-[100%] ${
          borderDirection == "r" && "border-r-2"
        } border-[var(--light-green)]`}
      >
        <View />
      </select>
    </>
  );
};

export default HoursOrMinuts;
