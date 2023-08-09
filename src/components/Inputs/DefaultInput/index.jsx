import React from "react";

const DefaultInput = ({placeholder}) => {
  return (
    <>
      <input
        id=""
        name=""
        className="text-[var(--dark-gray)] text-sm py-[10px] px-[6px] w-[100%] border-2 rounded-[8px] border-[var(--light-green)] outline-none placeholder:text-sm"
        placeholder={placeholder}
      />
    </>
  );
};

export default DefaultInput;
