import { Plus } from "@phosphor-icons/react";
import React from "react";
import "./Styles.css";

const BtnIconOutlinedCustom = ({ children, onclick = () => {} }) => {
  return (
    <>
      <button
        onClick={() => onclick()}
        className="inline-flex gap-[13px] py-[10px] px-[19px] items-center border-2 rounded-[8px] border-[var(--light-green)] cursor-pointer"
      >
		{children}
      </button>
    </>
  );
};

export default BtnIconOutlinedCustom;
