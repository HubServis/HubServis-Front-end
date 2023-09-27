import { useState } from "react";

import crossIcon from "../../../../assets/Managment/plus.svg";

import { NewClientModal } from "./components/newClientModal";
import { ListUserModel } from "./components/listUserModel";
import SelectFilter from "../../../SelectFilter";
import { HeaderManagment } from "../../Header";

export const ClientList = () => {
  const [isOpen, setIsOpen] = useState(false);

  const MOCKAPIData = [
		{
			userName: "Ramilthon",
			userImageUrl:
				"https://cdn-7.motorsport.com/images/mgl/0mb95oa2/s800/lewis-hamilton-mercedes-1.jpg",
			date: "20/07/2023",
			price: "55,00",
			phone: "(11) 99962-4545",
		},
		{
			userName: "Ramilthon 2",
			userImageUrl:
				"https://cdn-7.motorsport.com/images/mgl/0mb95oa2/s800/lewis-hamilton-mercedes-1.jpg",
			date: "20/07/2023",
			price: "55,00",
			phone: "(11) 99962-4545",
		},
		{
			userName: "Ramilthon 3",
			userImageUrl:
				"https://cdn-7.motorsport.com/images/mgl/0mb95oa2/s800/lewis-hamilton-mercedes-1.jpg",
			date: "20/07/2023",
			price: "56,00",
			phone: "(11) 99962-4545",
		},
	];

  return (
		<>
			<HeaderManagment />
			<div className="mt-[60px] py-[22px] px-[17px] border-2 rounded-[8px] border-[var(--light-green)]">
				<h2 className="font-bold text-[20px]">Listagem de Clientes</h2>

				<div className="mt-[65px]">
					<div className="flex justify-between">
						<div
							className="w-[245px] gap-[13px] py-[10px] px-[19px] flex items-center border-2 rounded-[8px] border-[var(--light-green)] cursor-pointer"
							onClick={() => setIsOpen(true)}
						>
							<img src={crossIcon} alt="cross icon" />
							<p>Novo cliente</p>
						</div>

						<SelectFilter />
					</div>

					<div className="overflow-auto max-h-[500px] flex flex-col mt-[35px] gap-[20px]">
						{MOCKAPIData.map((item) => (
							<ListUserModel DataListUser={item} />
						))}
					</div>
				</div>

				<NewClientModal isOpen={isOpen} setIsOpen={setIsOpen} />
			</div>
		</>
	);
};
