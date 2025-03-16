import pencil from "../../../../../assets/Managment/pencil.svg";
import trash from "../../../../../assets/Managment/trash.svg";
import checkMark from "../../../../../assets/Managment/selection.svg";
import person from "../../../../../assets/Managment/image 88.png";
import phone from "../../../../../assets/Managment/phone.svg";
import paypal from "../../../../../assets/Managment/paypalLogo.svg";
import eye from "../../../../../assets/Managment/eye.svg";
import { CheckBox } from "../../../../../components";

const DataExemple = {
	userName: "Ramilthon 3",
	userImageUrl:
		"https://cdn-7.motorsport.com/images/mgl/0mb95oa2/s800/lewis-hamilton-mercedes-1.jpg",
	date: "20/07/2023",
	price: "56,00",
	phone: "(11) 99962-4545",
};

export const ListUserModel = ({ DataListUser = DataExemple }) => {
	return (
		<div className="py-[14px] px-[24px] flex justify-between items-center border-2 rounded-[8px] border-[var(--light-green)]">
			<div className="flex items-center">
				<div className="mr-[10px] bg-[var(--dark-green)] w-[5px] h-[45px] rounded-[10px]" />
				<div className="flex items-center gap-[6px] w-[200px]">
					<img
						src={DataListUser.userImageUrl}
						alt="user image"
						className="w-[50px] h-[50px] object-cover rounded-full"
					/>
					<p>{DataListUser.userName}</p>
				</div>
			</div>

			<div className="flex items-center w-[200px]">
				<img src={phone} alt="telephone" />
				<p>{DataListUser.phone}</p>
			</div>

			<div className="flex items-center">
				<img src={paypal} alt="Calendar Check" />
				<p>R$ {DataListUser.price}</p>
			</div>

			<div className="flex items-center">
				<img src={eye} alt="Calendar Check" />
				<p>{DataListUser.date}</p>
			</div>

			<div className="flex gap-[10px] items-center">
				<img src={pencil} alt="pencil" />
				<img src={trash} alt="trash" />
				<CheckBox />
			</div>
		</div>
	);
};
