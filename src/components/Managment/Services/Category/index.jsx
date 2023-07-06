import { useState } from "react";

import crossIcon from "../../../../assets/Managment/plus.svg";

import { ListCategoryModel } from "./components/listCategoryModel";
import { NewCategoryModal } from "./components/newCategoryModal";

export const CategoryServiceList = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="py-[22px] px-[17px] border-2 rounded-[8px] border-[var(--light-green)]">
      <h2 className="font-bold text-[20px]">Categoria de Serviços</h2>

      <div className="mt-[65px]">
        <div className="flex justify-between">
          <div
            className="w-[245px] gap-[13px] py-[10px] px-[19px] flex items-center border-2 rounded-[8px] border-[var(--light-green)] cursor-pointer"
            onClick={() => setIsOpen(true)}
          >
            <img src={crossIcon} alt="cross icon" />
            <p>Nova categoria</p>
          </div>
        </div>

        <div className="overflow-auto max-h-[500px] flex flex-col mt-[35px] gap-[20px]">
          <ListCategoryModel />
          <ListCategoryModel />
        </div>
      </div>

      <NewCategoryModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
};
