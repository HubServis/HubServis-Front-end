import { useState } from "react";
import { X } from "@phosphor-icons/react";
import { RadioButton } from "primereact/radiobutton";
import { InputSwitch } from 'primereact/inputswitch';
import CheckBox from "../../../../CheckBox";
import DefaultInput from "../../../../Inputs/DefaultInput";

const onModalOpen =
  "block absolute top-0 left-0 w-[100vw] h-[100vh] bg-[#4141414D]";

const onModalClosed = "hidden duration-300 ease-in-out";

const categories = [
  { name: "Serviço", key: "A" },
  { name: "Produto", key: "M" },
];

export const NewCategoryModal = ({ isOpen, setIsOpen }) => {
  const [checked, setChecked] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState(categories[1]);

  return (
    <div className={isOpen ? onModalOpen : onModalClosed}>
      <div className="bg-white w-[calc(650px-5%)] py-[30px] px-[30px] absolute left-[calc(50%-265px)] top-[calc(50%-400px)] rounded-[8px]">
        <div className="flex flex-col gap-[15px]">
          <div className="flex justify-between">
            <h2 className="font-semibold text-[20px] text-[var(--gray-opacity-50)]">Nova Categoria</h2>
            <X
              size={26}
              onClick={() => setIsOpen(false)}
              className="cursor-pointer"
            />
          </div>

          <div>
            <p>Nome da categoria:</p>
            <DefaultInput placeholder={"Elite..."}/>
          </div>

          <div className="flex flex-column gap-3">
            {categories.map((category) => {
              return (
                <div key={category.key} className="flex align-items-center">
                  <RadioButton
                    inputId={category.key}
                    name="category"
                    value={category}
                    onChange={(e) => setSelectedCategory(e.value)}
                    checked={selectedCategory.key === category.key}
                  />
                  <label htmlFor={category.key} className="ml-2">
                    {category.name}
                  </label>
                </div>
              );
            })}
          </div>

          <div className="flex items-center justify-left gap-[10px]">
            <p>Ativado: </p>
            <InputSwitch checked={checked} onChange={(e) => setChecked(e.value)} />
          </div>

          <div className="flex flex-col">
            <p>Profissionais:</p>

            <div className="py-[10px] px-[6px] flex flex-col gap-[10px] border-2 rounded-[8px] border-[var(--light-green)]">
              <div className="flex gap-2">
                <CheckBox/>
                <p className="text-sm text-[var(--gray-opacity-50)]">Ramilthon</p>
              </div>
              <div className="flex gap-2">
                <CheckBox/>
                <p className="text-sm text-[var(--gray-opacity-50)]">Vethel</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-[30px] flex justify-end">
          <button className="py-[12px] px-[30px] rounded-[8px] border-[var(--light-green)] bg-[var(--strong-green)] text-white font-bold">
            Salvar
          </button>
        </div>
      </div>
    </div>
  );
};
