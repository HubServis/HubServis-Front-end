import { X } from "@phosphor-icons/react";

import checkMark from "../../../../../assets/Managment/selection.svg";
import CheckBox from "../../../../CheckBox";
import SexyCustomSelect from "../../../../Inputs/SexyCustomSelect";
import DefaultInput from "../../../../Inputs/DefaultInput";
import PhoneInput from "../../../../Inputs/PhoneInput";
import EmailInput from "../../../../Inputs/EmailInput";
import CPFInput from "../../../../Inputs/CPFInput";
import DateSelect from "../../../../Inputs/DateSelect";

const onModalOpen =
  "block absolute top-0 left-0 w-[100vw] h-[100vh] bg-[#4141414D]";

const onModalClosed = "hidden duration-300 ease-in-out";

export const NewClientModal = ({ isOpen, setIsOpen }) => {
  return (
    <div className={isOpen ? onModalOpen : onModalClosed}>
      <div className="bg-white w-[calc(650px-5%)] py-[30px] px-[30px] absolute left-[calc(50%-265px)] top-[calc(50%-400px)] rounded-[8px]">
        <div className="flex flex-col gap-[15px]">
          <div className="flex justify-between">
            <h2 className="font-semibold text-xl text-[var(--gray-opacity-50)]">Dados do cliente</h2>
            <X
              size={26}
              onClick={() => setIsOpen(false)}
              className="cursor-pointer"
            />
          </div>

          <div>
            <p className="font-medium text-[var(--gray-opacity-50)]">Nome do cliente:</p>
            <DefaultInput placeholder={"Ramilthon"}/>
          </div>

          <div className="flex flex-col">
            <p className="font-medium text-[var(--gray-opacity-50)]">Telefone do cliente:</p>
            <PhoneInput/>
          </div>

          <div className="flex flex-col">
            <p className="font-medium text-[var(--gray-opacity-50)]">Email do cliente:</p>
            <EmailInput/>
          </div>

          <div className="flex flex-col font-medium text-[var(--gray-opacity-50)]">
            <p>CPF do cliente:</p>
            <CPFInput/>
          </div>

          <div className="flex justify-between gap-20">
            <div className="w-[100%] flex flex-col">
              <p className="font-medium text-[var(--gray-opacity-50)]">Nascimento do cliente:</p>
              <DateSelect />
            </div>

            <div className="max-w-[300px] w-full flex flex-col">
              <p className="font-medium text-[var(--gray-opacity-50)]">Sexo</p>
              <SexyCustomSelect />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <p className="font-medium text-[var(--gray-opacity-50)]">Bloquear cliente</p>
            <CheckBox />
          </div>

          <div>
            <p id="reason" name="reason" className="font-medium text-[var(--gray-opacity-50)]">
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
