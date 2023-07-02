import React from "react";
import { CaretDown, CaretUp } from "@phosphor-icons/react";
import { gray } from "../../../../style/global-colors";

const CardSelect = ({
  children,
  isEnabled,
  open = false,
  clickFunction = () => {},
  title,
  icon,
}) => {
  return (
    <>
      <div
        className="items-center hover:bg-[var(--medium-light-black)] rounded-xl mx-4 py-[10px] px-[15px] flex justify-between my-1"
        onClick={() => clickFunction()}
      >
        <span className="flex items-center">
          {icon}
          <p className="text-[var(--gray)] text-base">{title || ""}</p>
        </span>
        {isEnabled && (
          <div>
            {open ? (
              <CaretUp fill={gray} size={20} className="" />
            ) : (
              <CaretDown fill={gray} size={20} className="" />
            )}
          </div>
        )}
      </div>
      {open && children}
    </>
  );
};

export default CardSelect;
