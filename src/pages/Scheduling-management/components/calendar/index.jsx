import React, { useState } from "react";
import "./style.css";
import { ArrowCircleLeft, ArrowCircleRight } from "@phosphor-icons/react";
import { DAYS, MONTHS } from "./count";
import {
	range,
	getDaysInMonth,
	getSortedDays,
	getDateObj,
	areDatesTheSame,
} from "./utils";
import { CalenderBody, StyledDay } from "./styled";

const CalendarScheduling = ({ startingDate }) => {
	const [currentMonth, setCurrentMonth] = useState(startingDate.getMonth());
	const [currentYear, setCurrentYear] = useState(startingDate.getFullYear());
	const DAYSINAMONTH = getDaysInMonth(currentMonth, currentYear);

	const nextMonth = () => {
		if (currentMonth < 11) {
			setCurrentMonth((prev) => prev + 1);
		} else {
			setCurrentMonth(0);
			setCurrentYear((prev) => prev + 1);
		}
	};

	const prevMonth = () => {
		if (currentMonth > 0) {
			setCurrentMonth((prev) => prev - 1);
		} else {
			setCurrentMonth(11);
			setCurrentYear((prev) => prev - 1);
		}
	};

	return (
		<>
			<div className="w-full h-screen  border border-solid m-[5px]">
				<div className="w-full flex h-10 justify-around items-center text-2xl">
					<ArrowCircleLeft size={32} onClick={prevMonth} />
					<p>
						{MONTHS[currentMonth]} {currentYear}
					</p>
					<ArrowCircleRight size={32} onClick={nextMonth} />
				</div>
				<div className="sevenColorGrid">
					{getSortedDays(currentMonth, currentYear).map((day) => (
						<span className="text-center bg-green-400 text-xl">{day}</span>
					))}
				</div>
				<CalenderBody fourCol={DAYSINAMONTH === 28}>
					{range(DAYSINAMONTH).map((day) => (
						<StyledDay
							active={areDatesTheSame(
								new Date(),
								getDateObj(day, currentMonth, currentYear)
							)}
						>
							{day}
						</StyledDay>
					))}
				</CalenderBody>
			</div>
		</>
	);
};

export default CalendarScheduling;
