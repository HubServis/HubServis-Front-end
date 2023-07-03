import { X } from "@phosphor-icons/react";

import checkMark from "../../../../../assets/Managment/selection.svg";

const onModalOpen =
  "block absolute top-0 left-0 w-[100vw] h-[100vh] bg-[#4141414D]";

const onModalClosed = "hidden duration-300 ease-in-out";

export const NewClientModal = ({ isOpen, setIsOpen }) => {
  return (
    <div className={isOpen ? onModalOpen : onModalClosed}>
      <div className="bg-white w-[calc(650px-5%)] py-[30px] px-[30px] absolute left-[calc(50%-265px)] top-[calc(50%-400px)] rounded-[8px]">
        <div className="flex flex-col gap-[15px]">
          <div className="flex justify-between">
            <h2 className="font-normal text-[20px]">Dados do cliente</h2>
            <X
              size={26}
              onClick={() => setIsOpen(false)}
              className="cursor-pointer"
            />
          </div>

          <div>
            <p>Nome do cliente:</p>
            <input
              id=""
              name=""
              className="py-[10px] px-[6px] w-[100%] border-2 rounded-[8px] border-[var(--light-green)] outline-none"
            />
          </div>

          <div className="flex flex-col">
            <p>Telefone do cliente:</p>
            <input
              type="tel"
              placeholder="(__) _____-____"
              className="py-[10px] px-[6px] w-[100%] border-2 rounded-[8px] border-[var(--light-green)] outline-none"
            />
          </div>

          <div className="flex flex-col">
            <p>Email do cliente:</p>
            <input
              type="email"
              placeholder="email@email.com"
              className="py-[10px] px-[6px] w-[100%] border-2 rounded-[8px] border-[var(--light-green)] outline-none"
            />
          </div>

          <div className="flex flex-col">
            <p>CPF do cliente:</p>
            <input
              type="text"
              placeholder="___.___.___-__"
              className="py-[10px] px-[6px] w-[100%] border-2 rounded-[8px] border-[var(--light-green)] outline-none"
            />
          </div>

          <div className="flex justify-between gap-[120px]">
            <div className="w-[100%] flex flex-col">
              <p>Nascimento do cliente:</p>
              <input
                type="date"
                className="py-[10px] px-[6px] w-[100%] border-2 rounded-[8px] border-[var(--light-green)] outline-none"
              />
            </div>

            <div className="w-[100%] flex flex-col">
              <p>Sexo</p>
              <select
                id=""
                name=""
                className="py-[10px] px-[6px] w-[100%] border-2 rounded-[8px] border-[var(--light-green)]"
              >
                <option value="">M</option>
                <option value="">F</option>
                <option value="">O</option>
              </select>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <p>Bloquear cliente</p>
            <img src={checkMark} alt="check mark" />
          </div>

          <div>
            <p id="reason" name="reason">
              Dados adicionais:
            </p>
            <textarea
              id="reason"
              name="reason"
              rows="5"
              maxLength="200"
              className="py-[5px] px-[5px] border-2 border-[var(--light-green)] rounded-[8px] w-[100%]"
            ></textarea>
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
