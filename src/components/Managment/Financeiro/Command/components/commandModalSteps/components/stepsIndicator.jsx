import personGreen from "../../../../../../../assets/Managment/account-outline-green.svg";
import persionWhite from "../../../../../../../assets/Managment/account-outline 1.svg";

import brefcaseGreen from "../../../../../../../assets/Managment/briefcase.svg";
import brefcaseWhite from "../../../../../../../assets/Managment/briefcase-outline-white.png";

import moneyGreen from "../../../../../../../assets/Managment/money.svg";
import moneyWhite from "../../../../../../../assets/Managment/Money-white.svg";

const hiddenElement = "hidden";

export const StepsIndicator = ({ steps }) => {
  return (
    <div className="flex justify-between items-center mb-[40px] py-[10px] px-[40px] border-[2px] rounded">
      <div className="flex gap-[10px] pr-[25px]">
        <div
          className={`rounded-full ${
            (steps === 0 && "bg-[var(--strong-green)]") ||
            "bg-[var(--light-gree!n)]"
          } w-[54px] h-[54px] flex rounded-[50%] justify-center items-center`}
        >
          {(steps === 0 && <img src={persionWhite} alt="person" />) || (
            <img src={personGreen} alt="person" />
          )}
        </div>

        <div className={`${(steps !== 0 && hiddenElement) || "block"}`}>
          <p className="text-[var(--dark-green)]">Step 1/3</p>
          Dados do cliente
        </div>
      </div>

      <div className="h-[60px] w-[1px] border-[1px]" ></div>

      <div className="flex gap-[10px] pl-[25px] pr-[25px]">
        <div
          className={`rounded-full ${
            (steps === 1 && "bg-[var(--strong-green)]") ||
            "bg-[var(--light-green)]"
          } w-[54px] h-[54px] flex rounded-[50%] justify-center items-center`}
        >
          {(steps === 1 && <img src={brefcaseWhite} alt="person" />) || (
            <img src={brefcaseGreen} alt="person" />
          )}
        </div>

        <div className={`${(steps !== 1 && hiddenElement) || "block"}`}>
          <p className="text-[var(--dark-green)]">Step 2/3</p>
          Dados do Serviço
        </div>
      </div>

      <div className="h-[60px] w-[1px] border-[1px]" ></div>

      <div className="flex gap-[10px] pl-[25px]">
        <div
          className={`rounded-full ${
            (steps === 2 && "bg-[var(--strong-green)]") ||
            "bg-[var(--light-green)]"
          } w-[54px] h-[54px] flex rounded-[50%] justify-center items-center`}
        >
          {(steps === 2 && <img src={moneyWhite} alt="person" />) || (
            <img src={moneyGreen} alt="person" />
          )}
        </div>

        <div className={`${(steps !== 2 && hiddenElement) || "block"}`}>
          <p className="text-[var(--dark-green)]">Step 3/3</p>
          Dados do Pagamento
        </div>
      </div>
    </div>
  );
};
