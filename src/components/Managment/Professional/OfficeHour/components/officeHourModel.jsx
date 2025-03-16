import pencil from "../../../../../assets/Managment/pencil.svg";
import trash from "../../../../../assets/Managment/trash.svg";
import checkMark from "../../../../../assets/Managment/selection.svg";
import clock from "../../../../../assets/Managment/clock.svg";
import cookingPot from '../../../../../assets/Managment/cookingPot.svg';
import CheckBox from "../../../../CheckBox";

export const OfficeHourModel = () => {
  return (
    <div className="py-[14px] px-[24px] flex justify-between items-center border-2 rounded-[8px] border-[var(--light-green)]">
      <div className="flex items-center">
        <div className="mr-[10px] bg-[var(--dark-green)] w-[5px] h-[45px] rounded-[10px]" />

        <div className="flex items-center gap-[6px]">
          <p>Horario nome</p>
        </div>
      </div>

      <div className="flex items-center">
        <p>Dia</p>
      </div>

      <div className="flex items-center">
        <p>Outro Nome</p>
      </div>

      <div className="flex gap-[10px]">
        <img src={clock} alt="clock icon" />
        <p>07 às 19 hrs</p>
      </div>

      <div className="flex gap-[10px]">
        <img src={cookingPot} alt="clock icon" />
        <p>12:30 ás 13:00</p>
      </div>

      <div className="flex gap-[10px] items-center">
        <img src={pencil} alt="pencil" />
        <img src={trash} alt="trash" />
        <CheckBox/>
      </div>
    </div>
  );
};
