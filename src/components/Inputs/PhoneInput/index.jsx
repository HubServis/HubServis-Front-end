import React from "react";

const PhoneInput = () => {
  return (
    <>
      <input
        type="tel"
        placeholder="(__) _____-____"
        className="text-sm py-[10px] px-[6px] w-[100%] border-2 rounded-[8px] border-[var(--light-green)] outline-none placeholder:text-sm"
      />
    </>
  );
};

export default PhoneInput;
