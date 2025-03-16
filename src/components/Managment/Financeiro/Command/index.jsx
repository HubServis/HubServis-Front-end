import { useState } from "react";
import { BarChart } from "./components/barChart";
import { PizzaChart } from "./components/pizzaChart";
import { CommandListModel } from "./components/commandListModel";
import { CommandModalSteps } from "./components/commandModalSteps";

import SelectFilter from "../../../SelectFilter";
import DateSelectDefault from "../../../Inputs/DateSelectDefault";
import { HeaderManagment } from "../../Header";

export const Command = () => {
	const [isOpen, setIsOpen] = useState(false);

	const MOCKAPIData = [
		{
			userName: "Ramilthon",
			userImageUrl:
				"https://cdn-7.motorsport.com/images/mgl/0mb95oa2/s800/lewis-hamilton-mercedes-1.jpg",
			dateAndTime: "20/07/2023 - 07:00 AM",
			price: "55,00",
			typePayment: "Dinheiro",
			status: 2,
		},
		{
			userName: "Ramilthon 2",
			userImageUrl:
				"https://cdn-7.motorsport.com/images/mgl/0mb95oa2/s800/lewis-hamilton-mercedes-1.jpg",
			dateAndTime: "20/07/2023 - 07:00 AM",
			price: "55,00",
			typePayment: "Pix",
			status: 1,
		},
		{
			userName: "Ramilthon 2",
			userImageUrl:
				"https://cdn-7.motorsport.com/images/mgl/0mb95oa2/s800/lewis-hamilton-mercedes-1.jpg",
			dateAndTime: "20/07/2023 - 07:00 AM",
			price: "55,00",
			typePayment: "Dinheiro",
			status: 0,
		},
	];

	return (
		<>
			<HeaderManagment />
			<div className="mt-[60px] py-[22px] px-[17px]">
				<div className="flex items-start justify-between gap-[20px]">
					<button
						className="py-[12px] px-[30px] rounded-[8px] border-[var(--light-green)] border-[2px]"
						onClick={() => setIsOpen(true)}
					>
						Nova Venda
					</button>

					<div className=" w-[400px] h-[100%] shadow-lg rounded-[6px]">
						<div className="flex flex-col py-[20px] px-[40px]">
							<p className="text-[#828282] font-semibold">
								Faturamento e Gastos
							</p>
							<p className="text-[14px]">Mensal</p>
						</div>

						<div className="w-[100%] h-[3px] px-[8px] bg-black"></div>

						<div className="py-[20px] px-[40px]">
							<BarChart />
						</div>
					</div>

					<div className="w-[400px] h-[100%] shadow-lg rounded-[6px]">
						<div className="flex flex-col py-[20px] px-[40px]">
							<p className="text-[#828282] font-semibold">
								Tipos de Pagamentos
							</p>
							<p className="text-[var(--dark-gray)] text-[40px]">5.987,34</p>
							<p className="text-[14px]">Mensal</p>
						</div>

						<div className="w-[100%] h-[3px] px-[8px] bg-black"></div>

						<div className="py-[20px] px-[40px]">
							<PizzaChart />
						</div>
					</div>
				</div>

				<div className="py-[22px] px-[17px] mt-[40px] border-4 rounded-[8px] border-[var(--light-green)]">
					<h2 className="font-bold text-[20px]">Comandas</h2>

					<div className="mt-[65px]">
						<div className="flex justify-between items-end">
							<div className="flex gap-[10px]">
								<div>
									<p>Data Inicío</p>
									<DateSelectDefault />
								</div>
								<div>
									<p>Data Fim</p>
									<DateSelectDefault />
								</div>
							</div>

							<SelectFilter />
						</div>
					</div>

					<div className="overflow-auto max-h-[500px] flex flex-col mt-[40px] gap-[20px]">
						{MOCKAPIData.map((item) => {
							return <CommandListModel ListInfos={item} />;
						})}
					</div>
				</div>

				<CommandModalSteps isOpen={isOpen} setIsOpen={setIsOpen} />
			</div>
		</>
	);
};
