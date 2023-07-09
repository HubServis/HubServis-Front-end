import calendarCheck from "../../../../../assets/Managment/CalendarCheckGreen.svg";
import pencil from "../../../../../assets/Managment/pencil.svg";
import trash from "../../../../../assets/Managment/trash.svg";
import checkMark from "../../../../../assets/Managment/selection.svg";
import person from "../../../../../assets/Managment/image 88.png";
import { CheckBox } from '../../../../../components';

export const ListUserModel = ({status}) => {

  const WidgetStatus = ({statusType = 1}) => {
    const types = {
      0: () => <p className="rounded-[4px] bg-[var(--gray-opacity-75)] px-2 py-1 text-[var(--medium-red)]">Cancelado</p>,
      1: () => <p className="rounded-[4px] bg-[var(--gray-opacity-75)] px-2 py-1 text-[var(--dark-green)]">Pendente</p>,
      2: () => <p className="rounded-[4px] bg-[var(--gray-opacity-75)] px-2 py-1 text-[var(--strong-green)]">Concluído</p>,
    }

    return types[statusType]();
  }

  return (
    <div className="py-[14px] px-[24px] flex justify-between items-center border-2 rounded-[8px] border-[var(--light-green)]">
      <div className="flex items-center">
        <div className="mr-[10px] bg-[var(--dark-green)] w-[5px] h-[45px] rounded-[10px]" />
        <div className="flex items-center gap-[6px]">
          <img src={person} alt="avatar" />
          <p>Ricardo Almeida</p>
        </div>
      </div>

      <p>Corte de cabelo</p>

      <div className="flex items-center gap-2">
        <img src={calendarCheck} alt="Calendar Check" />
        <p>20/07/2023 - 07:00 AM</p>
      </div>
      
      <WidgetStatus statusType={status}/>

      <div className="flex gap-[10px] items-center">
        <img src={pencil} alt="pencil"/>
        <img src={trash} alt="trash" />
        <CheckBox/>
      </div>
    </div>
  );
};
