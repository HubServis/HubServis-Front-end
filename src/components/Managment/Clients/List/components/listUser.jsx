import pencil from "../../../../../assets/Managment/pencil.svg";
import trash from "../../../../../assets/Managment/trash.svg";
import checkMark from "../../../../../assets/Managment/selection.svg";
import person from "../../../../../assets/Managment/image 88.png";
import phone from '../../../../../assets/Managment/phone.svg';
import paypal from '../../../../../assets/Managment/paypalLogo.svg';
import eye from '../../../../../assets/Managment/eye.svg';

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

      <div className="flex items-center">
		<img src={phone} alt="telephone" />
        <p>(11) 99962-4565</p>
      </div>

      <div className="flex items-center">
        <img src={paypal} alt="Calendar Check" />
        <p>R$ 55,00</p>
      </div>

      <div className="flex items-center">
        <img src={eye} alt="Calendar Check" />
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
