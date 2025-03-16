import React from "react";

const EmailInput = () => {
  return (
    <>
      <input
        type="email"
        placeholder="email@email.com"
        className="text-sm py-[10px] px-[6px] w-[100%] border-2 rounded-[8px] border-[var(--light-green)] outline-none placeholder:text-sm"
      />
    </>
  );
};

export default EmailInput;
