import pencil from "../../../../../assets/Managment/pencil.svg";
import trash from "../../../../../assets/Managment/trash.svg";
import checkMark from "../../../../../assets/Managment/selection.svg";
import paypal from "../../../../../assets/Managment/paypalLogo.svg";
import receipt from "../../../../../assets/Managment/Receipt.svg";
import { CheckBox } from "../../../../../components";

const ExempleInfos = {
	userName: "Ramilthon",
	userImageUrl:
		"https://cdn-7.motorsport.com/images/mgl/0mb95oa2/s800/lewis-hamilton-mercedes-1.jpg",
	dateAndTime: "20/07/2023 - 07:00 AM",
	price: "55,00",
	typePayment: "Dinheiro",
	status: 0,
};

export const CommandListModel = ({ ListInfos = ExempleInfos }) => {
	const WidgetStatus = ({ statusType = 1 }) => {
		const types = {
			0: () => (
				<p className="rounded-[4px] bg-[var(--gray-opacity-75)] px-2 py-1 text-[var(--medium-red)]">
					Cancelado
				</p>
			),
			1: () => (
				<p className="rounded-[4px] bg-[var(--gray-opacity-75)] px-2 py-1 text-[var(--dark-green)]">
					Pendente
				</p>
			),
			2: () => (
				<p className="rounded-[4px] bg-[var(--gray-opacity-75)] px-2 py-1 text-[var(--strong-green)]">
					Concluído
				</p>
			),
		};

		return types[statusType]();
	};

	return (
		<div className="py-[14px] px-[24px] flex justify-between items-center border-2 rounded-[8px] border-[var(--light-green)]">
			<div className="flex items-center">
				<div className="mr-[10px] bg-[var(--dark-green)] w-[5px] h-[45px] rounded-[10px]" />

				<div className="flex items-center gap-[6px] w-[200px]">
					<img
						src={ListInfos.userImageUrl}
						alt="user image"
						className="w-[50px] h-[50px] object-cover rounded-full"
					/>
					<p>{ListInfos.userName}</p>
				</div>
			</div>

			<div className="flex items-center w-[200px]">
				<p>{ListInfos.dateAndTime}</p>
			</div>

			<div className="flex items-center w-[200px]">
				<img src={paypal} alt="Calendar Check" />
				<p>
					{ListInfos.price} ({ListInfos.typePayment})
				</p>
			</div>

			<WidgetStatus statusType={ListInfos.status} />

			<div className="flex gap-[10px] items-center">
				<img src={pencil} alt="pencil" />
				<img src={trash} alt="trash" />
				<CheckBox />
			</div>
		</div>
	);
};
