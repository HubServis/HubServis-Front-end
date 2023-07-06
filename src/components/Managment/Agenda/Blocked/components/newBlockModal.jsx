import { X } from "@phosphor-icons/react";

import checkMark from "../../../../../assets/Managment/selection.svg";

const onModalOpen =
  "block absolute top-0 left-0 w-[100vw] h-[100vh] bg-[#4141414D]";

const onModalClosed = "hidden duration-300 ease-in-out";

export const NewBlockModal = ({ isOpen, setIsOpen }) => {
  return (
    <div className={isOpen ? onModalOpen : onModalClosed}>
      <div className="bg-white w-[calc(650px-5%)] py-[30px] px-[30px] absolute left-[calc(50%-265px)] top-[calc(50%-350px)] rounded-[8px]">
        <div className="flex flex-col gap-[15px]">
          <div className="flex justify-between">
            <h2 className="font-normal text-[20px]">Nova agenda de bloquieo</h2>
            <X size={26} onClick={() => setIsOpen(false)} className="cursor-pointer"/>
          </div>

          <div>
            <p>Selecione os profissionais</p>
            <select
              id=""
              name=""
              className="py-[10px] px-[6px] w-[100%] border-2 rounded-[8px] border-[var(--light-green)]"
            >
              <option value=""></option>
              <option value=""></option>
              <option value=""></option>
            </select>
          </div>

          <div className="flex items-center justify-between">
            <p>Bloquear o dia inteiro</p>
            <img src={checkMark} alt="check mark" />
          </div>

          <div className="flex flex-col">
            <p>Data Inicío:</p>

            <div className="flex gap-[31px]">
              <div className="py-[10px] px-[6px] w-[290px] border-2 rounded-[8px] border-[var(--light-green)]">
                <input type="date" className="w-[100%]" />
              </div>

              <div className="w-[120px]">
                <select
                  id=""
                  name=""
                  className="py-[10px] px-[6px] w-[100%] border-2 rounded-[8px] border-[var(--light-green)]"
                >
                  <option value=""></option>
                  <option value=""></option>
                  <option value=""></option>
                  <option value=""></option>
                </select>
              </div>

              <div className="w-[120px]">
                <select
                  id=""
                  name=""
                  className="py-[10px] px-[6px] w-[100%] border-2 rounded-[8px] border-[var(--light-green)]"
                >
                  <option value=""></option>
                  <option value=""></option>
                  <option value=""></option>
                  <option value=""></option>
                </select>
              </div>
            </div>
          </div>

          <div className="flex flex-col">
            <p>Data Fim:</p>

            <div className="flex gap-[31px]">
              <div className="py-[10px] px-[6px] w-[290px] border-2 rounded-[8px] border-[var(--light-green)]">
                <input type="date" className="w-[100%]" />
              </div>

              <div className="w-[120px]">
                <select
                  id=""
                  name=""
                  className="py-[10px] px-[6px] w-[100%] border-2 rounded-[8px] border-[var(--light-green)]"
                >
                  <option value=""></option>
                  <option value=""></option>
                  <option value=""></option>
                  <option value=""></option>
                </select>
              </div>

              <div className="w-[120px]">
                <select
                  id=""
                  name=""
                  className="py-[10px] px-[6px] w-[100%] border-2 rounded-[8px] border-[var(--light-green)]"
                >
                  <option value=""></option>
                  <option value=""></option>
                  <option value=""></option>
                  <option value=""></option>
                </select>
              </div>
            </div>
          </div>

          <div>
            <p id="reason" name="reason">
              Motivo do bloquieo:
            </p>
            <textarea
              id="reason"
              name="reason"
              rows="5"
              maxLength="200"
              className="py-[5px] px-[5px] border-2 border-gray rounded-[8px] w-[100%]"
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
