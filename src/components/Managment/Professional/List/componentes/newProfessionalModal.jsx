import { X } from "@phosphor-icons/react";

import { BtnToggle } from "../../../../Buttons/BtnToggle";

const onModalOpen =
  "block absolute top-0 left-0 w-[100vw] h-[100vh] bg-[#4141414D]";

const onModalClosed = "hidden duration-300 ease-in-out";

export const NewProfessionalModal = ({ isOpen, setIsOpen }) => {
  return (
    <div className={isOpen ? onModalOpen : onModalClosed}>
      <div className="bg-white w-[calc(650px-5%)] py-[30px] px-[30px] absolute left-[calc(50%-265px)] top-[calc(50%-400px)] rounded-[8px]">
        <div className="flex flex-col gap-[15px]">
          <div className="flex justify-between">
            <h2 className="font-normal text-[20px]">Nova Categoria</h2>
            <X
              size={26}
              onClick={() => setIsOpen(false)}
              className="cursor-pointer"
            />
          </div>

          <div>
            <p>Nome da categoria:</p>
            <input
              id=""
              name=""
              className="py-[10px] px-[6px] w-[100%] border-2 rounded-[8px] border-[var(--light-green)] outline-none"
            />
          </div>

          <div className="flex justify-left w-[100%] gap-[20px]">
            <div className="flex gap-[10px]">
              <input
                type="radio"
                className="border-[var(--light-green)] outline-none"
              />
              <p>Serviço</p>
            </div>

            <div className="flex gap-[10px]">
              <input
                type="radio"
                className="py-[10px] px-[6px] border-2 rounded-[8px] border-[var(--light-green)] outline-none"
              />
              <p>Serviço</p>
            </div>
          </div>

          <div className="flex items-center justify-left gap-[10px]">
            <p>Ativado: </p>
            <BtnToggle />
          </div>

          <div className="flex flex-col">
            <p>Profissionais:</p>

            <div className="py-[10px] px-[6px] flex justify-left gap-[10px] border-2 rounded-[8px] border-[var(--light-green)]">
              <input
                type="checkbox"
                className="w-[22px] h-[22px] border-2 rounded-[8px] border-[var(--light-green)] outline-none"
              />
              <p>Nome</p>
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
