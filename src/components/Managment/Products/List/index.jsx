import { useState } from "react";

import crossIcon from "../../../../assets/Managment/plus.svg";

import { ListProductsModel } from "./components/listProductsModel";
import { NewProductModal } from "./components/newProductModal";
import SelectFilter from "../../../SelectFilter";
import { HeaderManagment } from "../../Header";

export const ProductList = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <HeaderManagment />
      <div className="mt-[60px] py-[22px] px-[17px] border-2 rounded-[8px] border-[var(--light-green)]">
        <h2 className="font-bold text-[20px]">Listagem de Produtos</h2>

        <div className="mt-[65px]">
          <div className="flex justify-between">
            <div
              className="w-[245px] gap-[13px] py-[10px] px-[19px] flex items-center border-2 rounded-[8px] border-[var(--light-green)] cursor-pointer"
              onClick={() => setIsOpen(true)}
            >
              <img src={crossIcon} alt="cross icon" />
              <p>Novo Produto</p>
            </div>

            <SelectFilter />
          </div>

          <div className="overflow-auto max-h-[500px] flex flex-col mt-[35px] gap-[20px]">
            <ListProductsModel />
            <ListProductsModel />
          </div>
        </div>

        <NewProductModal isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    </>
  );
};
