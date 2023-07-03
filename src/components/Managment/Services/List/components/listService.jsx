import pencil from "../../../../../assets/Managment/pencil.svg";
import trash from "../../../../../assets/Managment/trash.svg";
import checkMark from "../../../../../assets/Managment/selection.svg";
import phone from '../../../../../assets/Managment/phone.svg';
import paypal from '../../../../../assets/Managment/paypalLogo.svg';
import timer from '../../../../../assets/Managment/timer.svg';

export const ListService = () => {
  return (
    <div className="py-[14px] px-[24px] flex justify-between items-center border-2 rounded-[8px] border-[var(--light-green)]">
      <div className="flex items-center">
        <div className="mr-[10px] bg-[var(--dark-green)] w-[5px] h-[45px] rounded-[10px]" />

        <div className="flex items-center gap-[6px]">
          <p>Teste</p>
        </div>
      </div>

      <div className="flex items-center">
		<img src={phone} alt="telephone" />
        <p>(11) 99962-4565</p>
      </div>

      <div className="flex items-center">
        <img src={paypal} alt="Calendar Check" />
        <p>R$ 55,00</p>
      </div>

      <div className="flex items-center">
        <img src={timer} alt="Calendar Check" />
        <p>20/07/2023 - 07:00 AM</p>
      </div>

      <div className="flex gap-[10px]">
        <img src={pencil} alt="pencil" />
        <img src={trash} alt="trash" />
        <img src={checkMark} alt="check mark" />
      </div>
    </div>
  );
};
