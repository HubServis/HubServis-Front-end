import { useRef, useState } from "react";
import {
	ArrowCircleLeft,
	ArrowCircleRight,
	Trash,
	X,
	MapPin,
} from "@phosphor-icons/react";
import {
	SevenColGrid,
	Wrapper,
	HeadDays,
	DateControls,
	StyledEvent,
	SeeMore,
	PortalWrapper,
	Header,
} from "./styled";
import { DAYS, MOCKAPPS, MONTHS, MOCKDATAAPI } from "./conts";
import {
	datesAreOnSameDay,
	getDarkColor,
	getDaysInMonth,
	getSortedDays,
	nextMonth,
	prevMonth,
} from "./utils";
import { dark_gray, gray_opacity_50 } from "../../../../style/global-colors";

const CalendarScheduling = () => {
	const [currentDate, setCurrentDate] = useState(new Date());
	const [events, setEvents] = useState(MOCKAPPS);
	const dragDateRef = useRef();
	const dragindexRef = useRef();
	const [showPortal, setShowPortal] = useState(false);
	const [portalData, setPortalData] = useState({});

	const addEvent = (date, event) => {
		if (!event.target.classList.contains("StyledEvent")) {
			const text = window.prompt("name");
			if (text) {
				date.setHours(0);
				date.setSeconds(0);
				date.setMilliseconds(0);
				setEvents((prev) => [
					...prev,
					{ date, title: text, color: getDarkColor() },
				]);
			}
		}
	};

	const drag = (index, e) => {
		dragindexRef.current = { index, target: e.target };
	};

	const onDragEnter = (date, e) => {
		e.preventDefault();
		dragDateRef.current = { date, target: e.target.id };
	};

	const drop = (ev) => {
		ev.preventDefault();

		setEvents((prev) =>
			prev.map((ev, index) => {
				if (index === dragindexRef.current.index) {
					ev.date = dragDateRef.current.date;
				}
				return ev;
			})
		);
	};

	const handleOnClickEvent = (event) => {
		setShowPortal(true);
		setPortalData(event);
	};

	const handlePotalClose = () => setShowPortal(false);

	const handleDelete = () => {
		setEvents((prevEvents) =>
			prevEvents.filter((ev) => ev.title !== portalData.title)
		);
		handlePotalClose();
	};

	return (
		<Wrapper>
			<Header>
				<div className="title-header">
					<h1>Tabela de Horários</h1>
					<h2>
						{MONTHS[currentDate.getMonth()]} de {currentDate.getFullYear()}
					</h2>
				</div>
				<DateControls>
					<ArrowCircleLeft
						size={40}
						onClick={() => prevMonth(currentDate, setCurrentDate)}
						color={dark_gray}
					/>
					<ArrowCircleRight
						size={40}
						onClick={() => nextMonth(currentDate, setCurrentDate)}
						color={dark_gray}
					/>
					<div className="location">
						<MapPin size={20} color={gray_opacity_50} />
						<p>{MOCKDATAAPI.location}, {MOCKDATAAPI.country}</p>
					</div>
				</DateControls>
			</Header>
			<SevenColGrid>
				{DAYS.map((day, index) => (
					<HeadDays className="nonDRAG" key={index}>
						{day}
					</HeadDays>
				))}
			</SevenColGrid>
			<SevenColGrid
				fullheight={true}
				is28Days={getDaysInMonth(currentDate) === 28}
			>
				{getSortedDays(currentDate).map((day, index) => (
					<div
						key={index}
						id={`${currentDate.getFullYear()}/${currentDate.getMonth()}/${day}`}
						// onDragEnter={(e) =>
						// 	onDragEnter(
						// 		new Date(
						// 			currentDate.getFullYear(),
						// 			currentDate.getMonth(),
						// 			day
						// 		),
						// 		e
						// 	)
						// }
						// onDragOver={(e) => e.preventDefault()}
						// onDragEnd={drop}
						
						// onClick={(e) =>{ // add new event
						// 	addEvent(
						// 		new Date(
						// 			currentDate.getFullYear(),
						// 			currentDate.getMonth(),
						// 			day
						// 		),
						// 		e
						// 	)}
						// }
					>
						<span
							className={`nonDRAG ${
								datesAreOnSameDay(
									new Date(),
									new Date(
										currentDate.getFullYear(),
										currentDate.getMonth(),
										day
									)
								)
									? "active"
									: ""
							}`}
						>
							<p className="day">{day}</p>
						</span>
						<EventWrapper>
							{events.map(
								(ev, index) =>
									datesAreOnSameDay(
										ev.date,
										new Date(
											currentDate.getFullYear(),
											currentDate.getMonth(),
											day
										)
									) && (
										<StyledEvent
											// onDragStart={(e) => drag(index, e)}
											onClick={() => handleOnClickEvent(ev)}
											// draggable
											id={`${ev.color} ${ev.title}`}
											key={ev.title}
										>
											<p>{ev.title}</p>
										</StyledEvent>
									)
							)}
						</EventWrapper>
					</div>
				))}
			</SevenColGrid>
			{showPortal && (
				<Portal
					{...portalData}
					handleDelete={handleDelete}
					handlePotalClose={handlePotalClose}
				/>
			)}
		</Wrapper>
	);
};

export default CalendarScheduling;

const EventWrapper = ({ children }) => {
	if (children.filter((child) => child).length)
		return (
			<>
				{children}
				{children.filter((child) => child).length > 2 && (
					<SeeMore
						onClick={(e) => {
							e.stopPropagation();
							console.log("clicked p");
						}}
					>
						Ver mais...
					</SeeMore>
				)}
			</>
		);
};

const Portal = ({ title, date, handleDelete, handlePotalClose }) => {
	return (
		<PortalWrapper>
			<h2>{title}</h2>
			<p>{date.toDateString()}</p>
			<Trash onClick={handleDelete} size={32} />
			<X onClick={handlePotalClose} size={32} />
		</PortalWrapper>
	);
};
