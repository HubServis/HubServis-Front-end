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
	getRandomDarkColor,
} from "./utils";
import { CalenderBody, StyledDay, StyledEvents } from "./styled";

const CalendarScheduling = ({ startingDate, eventsArr, addEvent }) => {
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

	const onAddEvent = (date) => {
		addEvent(date, getRandomDarkColor());
	}

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
					{getSortedDays(currentMonth, currentYear).map((day, index) => (
						<span className="text-center bg-green-400 text-xl" key={index}>{day}</span>
					))}
				</div>
				<CalenderBody fourCol={DAYSINAMONTH === 28}>
					{range(DAYSINAMONTH).map((day, index) => (
						<StyledDay key={index}
							onClick={() =>
								onAddEvent(getDateObj(day, currentMonth, currentYear))
							}
							active={areDatesTheSame(
								new Date(),
								getDateObj(day, currentMonth, currentYear)
							)}
						>
							<p>{day}</p>
							{eventsArr.map(
								(event, index) =>
									areDatesTheSame(
										getDateObj(day, currentMonth, currentYear),
										event.date
									) && <StyledEvents key={index} bgColor={event?.color}>{event.title}</StyledEvents>
							)}
						</StyledDay>
					))}
				</CalenderBody>
			</div>
		</>
	);
};

export default CalendarScheduling;
