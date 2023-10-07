import DateSelectDefault from "../../../Inputs/DateSelectDefault";
import BtnFillGreen from "../../../Buttons/BtnFillGreen/BtnFillGreen";
import Shortly from "../../../Shortly";
import { HeaderManagment } from "../../Header";

const Report = () => {
  return (
    <>
      <HeaderManagment/>
      <h2 className="mt-[60px] font-bold text-[20px]">Relatórios</h2>
      <div className="mb-4 py-[15px] border-2 rounded-[8px] border-[var(--light-green)]">
        <div className="flex justify-around pb-[15px] border-b-2 border-[var(--light-green)]">
          <p className="cursor-pointer font-bold text-lg">PRINCIPAL</p>
          <p className="cursor-pointer font-bold text-lg">AGENDA</p>
          <p className="cursor-pointer font-bold text-lg">FINANCEIRO</p>
          <p className="cursor-pointer font-bold text-lg">AVANÇADO</p>
        </div>

        <div className="mt-[65px] mx-[17px]">
          <div className="flex justify-between items-end">
            <div className="flex gap-[10px]">
              <div>
                <p className="text-sm text-[var(--gray-opacity-25)]">
                  Data Inicío
                </p>
                <DateSelectDefault />
              </div>
              <div>
                <p className="text-sm text-[var(--gray-opacity-25)]">
                  Data Fim
                </p>
                <DateSelectDefault />
              </div>
            </div>
            <BtnFillGreen>Filtrar</BtnFillGreen>
          </div>
        </div>

        <div className="mt-[50px] mx-[17px] flex justify-between gap-[50px]">
          <div className="px-[15px] py-[10px] border-2 border-[var(--light-green)] max-w-[300px] w-full rounded-[8px]">
            <h4 className="font-medium text-base">FATURAMENTO</h4>
            <p className="text-[var(--strong-green)] font-semibold text-2xl">
              R$ 0,00
            </p>
          </div>
          <div className="px-[15px] py-[10px] border-2 border-[var(--light-green)] max-w-[300px] w-full rounded-[8px]">
            <h4 className="font-medium text-base">DESPESAS</h4>
            <p className="text-[var(--strong-green)] font-semibold text-2xl">
              R$ 0,00
            </p>
          </div>
          <div className="px-[15px] py-[10px] border-2 border-[var(--light-green)] max-w-[300px] w-full rounded-[8px]">
            <h4 className="font-medium text-base">AGENDAMENTOS ONLINE</h4>
            <p className="text-[var(--strong-green)] font-semibold text-2xl">
              0
            </p>
          </div>
          <div className="px-[15px] py-[10px] border-2 border-[var(--light-green)] max-w-[300px] w-full rounded-[8px]">
            <h4 className="font-medium text-base">SALDO</h4>
            <p className="text-[var(--strong-green)] font-semibold text-2xl">
              R$ 0,00
            </p>
          </div>
        </div>

        <Shortly />
      </div>
    </>
  );
};

export default Report;
