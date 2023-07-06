import { X } from "@phosphor-icons/react";

const onModalOpen =
  "block absolute top-0 left-0 w-[100vw] h-[100vh] bg-[#4141414D]";

const onModalClosed = "hidden duration-300 ease-in-out";

const TableList = ({ day, checked }) => (
  <tr className="relative">
    <div className="absolute bg-[var(--light-green)] h-[3px] w-[100%]"></div>

    <div className="h-[60px]"></div>

    <td>
      <div className="flex gap-[5px]">
        <input type="checkbox" />
        <p>{day}</p>
      </div>
    </td>

    <td>
      <div className="flex justify-center">
        <select>
          <option>09:00</option>
          <option>08:00</option>
          <option>07:00</option>
        </select>
      </div>
    </td>

    <td>
      <div className="flex justify-center">
        <p>Das</p>
        <input type="text" className="w-[50px]" />
        <p>ás</p>
        <input type="text" className="w-[50px]" />
      </div>
    </td>

    <td>
      <div className="flex justify-center">
        <select>
          <option>09:00</option>
          <option>08:00</option>
          <option>07:00</option>
        </select>
      </div>
    </td>
  </tr>
);

export const NewOfficeHourModal = ({ isOpen, setIsOpen }) => {
  return (
    <div className={isOpen ? onModalOpen : onModalClosed}>
      <div className="bg-white w-[calc(650px-5%)] py-[30px] px-[30px] absolute left-[calc(50%-265px)] top-[calc(50%-400px)] rounded-[8px]">
        <div className="flex flex-col gap-[15px]">
          <div className="flex justify-between">
            <h2 className="font-normal text-[20px]">Novo expediente</h2>
            <X
              size={26}
              onClick={() => setIsOpen(false)}
              className="cursor-pointer"
            />
          </div>

          <div>
            <p>Nome do expediente:</p>
            <input
              id=""
              name=""
              className="py-[10px] px-[6px] w-[100%] border-2 rounded-[8px] border-[var(--light-green)] outline-none"
            />
          </div>
        </div>

        <div className="flex flex-col gap-[15px] mt-[15px]">
          <p>
            Informe os horários de começo e termino do expediente. Porém,
            lembre-se que o almoço é opcional
          </p>
          <table className="relative">
            <tr>
              <th></th>
              <th>Dia</th>
              <th>Entrada</th>
              <th>Intervalo</th>
              <th>Saida</th>
            </tr>
            <TableList day={"Domingo"} />
            <TableList day={"Segunda"} />
            <TableList day={"Terça"} />
            <TableList day={"Quarta"} />
            <TableList day={"Quinta"} />
            <TableList day={"Sexta"} />
            <TableList day={"Sábado"} />

            <div className="absolute bg-[var(--light-green)] h-[3px] w-[100%]"></div>
          </table>
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
