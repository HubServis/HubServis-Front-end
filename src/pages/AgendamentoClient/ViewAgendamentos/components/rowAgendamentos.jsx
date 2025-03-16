import React from "react";
import calendarCheck from "../../../../assets/Managment/CalendarCheckGreen.svg";
import { Money, ShoppingCart, X } from "@phosphor-icons/react";

const padZero = (number) => {
	return number < 10 ? `0${number}` : number;
}

const formatDateTime = (dateTimeString) => {
    const dateTime = new Date(dateTimeString);

    const day = padZero(dateTime.getDate());
    const month = padZero(dateTime.getMonth() + 1);
    const year = dateTime.getFullYear();
    const hours = padZero(dateTime.getHours());
    const minutes = padZero(dateTime.getMinutes());

    return `${day}/${month}/${year} - ${hours}:${minutes}`;
}

const formatMoney = (moneyString) => {
    const amount = parseFloat(moneyString);
    
    if (isNaN(amount)) {
        return "Invalid input";
    }

    const formattedMoney = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(amount);

    return formattedMoney;
}


const RowAgendamentos = ({ appointmentInfos }) => {
	const { date_time, id, service } = appointmentInfos;

	return (
		<>
			<div className="py-[14px] px-[24px] flex flex-col md:flex-row md:justify-between md:items-center border-2 rounded-[8px] border-[var(--light-green)]">
				<div className="flex items-center">
					<div className="mr-[10px] bg-[var(--dark-green)] w-[5px] h-[45px] rounded-[10px]" />
					<div className="flex items-center gap-[6px] w-[200px]">
						{/* <p>Corte de Cabelo</p> */}
						{service?.name}
					</div>
				</div>

				<div className="flex items-center gap-2 w-[250px]">
					<img src={calendarCheck} alt="Calendar Check" />
					{/* <p>20/07/2023 - 07:00 AM</p> */}
					<p>{formatDateTime(date_time)}</p>
				</div>

				<div className="w-full flex justify-between md:max-w-[34%]">
					<div className="flex items-center gap-2 w-[150px]">
						<Money size={32} className="text-[var(--dark-green)]" />
						{/* <p>R$ 29,90</p> */}
						{formatMoney(service?.price)}
					</div>

					<div className="flex gap-[10px] items-center">
						<ShoppingCart
							size={32}
							weight="bold"
							className="text-[var(--dark-green)] cursor-pointer"
                            onClick={() => alert('Esta função estará disponivel em breve!')}        
						/>
						<X
							size={32}
							weight="bold"
							className="text-[var(--medium-red)] cursor-pointer"
                            onClick={() => alert('Esta função estará disponivel em breve!')}                                
						/>
					</div>
				</div>
			</div>
		</>
	);
};

export default RowAgendamentos;
