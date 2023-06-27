import React, { useState } from "react";
import "./style.css";
import { ArrowCircleLeft, ArrowCircleRight } from "@phosphor-icons/react";
import { DAYS, MONTHS } from "./count";
import { range, getDaysInMonth } from "./utils";

const CalendarScheduling = ({ startingDate }) => {
	const [currentMonth, setCurrentMonth] = useState(startingDate.getMonth());
	const [currentYear, setCurrentYear] = useState(startingDate.getFullYear());

	// parou aqui, integrar styledComponents no projeto: https://youtu.be/gcRZ8Ysgquc?t=662

	return (
		<>
			<div className="w-full h-screen  border border-solid m-[5px]">
				<div className="w-full flex h-10 justify-around items-center text-2xl">
					<ArrowCircleLeft size={32} />
					<p>
						{MONTHS[currentMonth]} {currentYear}
					</p>
					<ArrowCircleRight size={32} />
				</div>

				<div className="sevenColorGrid">
					{DAYS.map((day) => (
						<span className="text-center bg-green-400 text-xl">{day}</span>
					))}
				</div>

				<div className="CalenderBody">
					{range(getDaysInMonth(currentMonth, currentYear)).map((day) => (
						<span className="border-black border-[1px] text-right p-2 ">
							{day}
						</span>
					))}
				</div>
			</div>
		</>
	);
};

export default CalendarScheduling;