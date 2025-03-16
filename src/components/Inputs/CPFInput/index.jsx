import React from "react";

const CPFInput = () => {
  return (
    <>
      <input
        type="text"
        placeholder="___.___.___-__"
        className="py-[10px] px-[6px] w-[100%] border-2 rounded-[8px] border-[var(--light-green)] outline-none text-sm placeholder:text-sm"
      />
    </>
  );
};

export default CPFInput;
