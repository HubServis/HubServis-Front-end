import calendarCheck from "../../../../../assets/Managment/CalendarCheckGreen.svg";
import pencil from "../../../../../assets/Managment/pencil.svg";
import trash from "../../../../../assets/Managment/trash.svg";
import checkMark from "../../../../../assets/Managment/selection.svg";
import person from "../../../../../assets/Managment/image 88.png";

export const ListUser = () => {
  return (
    <div className="py-[14px] px-[24px] flex justify-between items-center border-2 rounded-[8px] border-[var(--light-green)]">
      <div className="flex items-center">
        <div className="mr-[10px] bg-[var(--dark-green)] w-[5px] h-[45px] rounded-[10px]" />
        <div className="flex items-center gap-[6px]">
          <img src={person} alt="avatar" />
          <p>Teste</p>
        </div>
      </div>

      <p>Serviço</p>

      <div className="flex items-center">
        <img src={calendarCheck} alt="Calendar Check" />
        <p>20/07/2023 - 07:00 AM</p>
      </div>

      <p>Status</p>

      <div className="flex gap-[10px]">
        <img src={pencil} alt="pencil" />
        <img src={trash} alt="trash" />
        <img src={checkMark} alt="check mark" />
      </div>
    </div>
  );
};
