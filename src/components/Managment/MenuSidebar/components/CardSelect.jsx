import { CaretDown, CaretUp } from "@phosphor-icons/react";

import { gray } from "../../../../style/global-colors";

const CardSelect = ({
  children,
  isEnabled,
  open = false,
  clickFunction,
  title,
  icon,
}) => {
  return (
    <>
      <div
        className={`${ isEnabled ? "w-[265px]" : "w-[auto]"} items-center hover:bg-[var(--medium-light-black)] rounded-xl mx-4 py-[10px] px-[15px] flex justify-between my-1`}
        onClick={() => clickFunction()}
      >
        <span className={`flex items-center ${ isEnabled ? "gap-[15px]" : "gap-[0px]" }`}>
          {icon}
          <p className="hidden group-hover/menu:block text-[var(--gray)] text-base">{title || ""}</p>
        </span>
        {isEnabled && (
          <div className="hidden group-hover/menu:block">
            {open ? (
              <CaretUp fill={gray} size={20} />
            ) : (
              <CaretDown fill={gray} size={20} />
            )}
          </div>
        )}
      </div>
      {open && children}
    </>
  );
};

export default CardSelect;
