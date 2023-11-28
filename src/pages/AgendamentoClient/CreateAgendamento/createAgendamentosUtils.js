export const displayDurationService = (durationService) => {
	const hora = durationService?.split(":")[0];
	const min = durationService?.split(":")[1];

	if (!hora && !min) {
		return null;
	}

	if (hora != "00" && min == "00") {
		return `${hora} hora`;
	}

	if (hora == "00" && min != "00") {
		return `${min} minutos`;
	}

	if (hora != "00" && min != "00") {
		return `${hora} hora e ${min} minutos`;
	}

	return null;
};

export const displayExpedientBusiness = (expedients) => {
	if (!expedients || expedients?.length == 0) {
		return null;
	}

	const firstDayExpedient =
		expedients.at(0)?.weekDay?.split("")[0].toUpperCase() +
		expedients
			.at(0)
			?.weekDay?.split("")
			?.slice(1, expedients.at(0)?.weekDay?.length)
			?.join("");
	const lastDayExpedient =
		expedients.at(-1)?.weekDay?.split("")[0].toUpperCase() +
		expedients
			.at(-1)
			?.weekDay?.split("")
			?.slice(1, expedients.at(-1)?.weekDay?.length)
			?.join("");

	return `${firstDayExpedient} à ${lastDayExpedient}`;
};

export const getWeekDay = (date) => {
	const daysOfWeek = ["dom", "seg", "ter", "qua", "qui", "sex", "sáb"];
	return daysOfWeek[date.getDay()];
};

const padZero = (number) => {
	return number < 10 ? `0${number}` : number;
};

const generateTimeSlots = (lunchEnd, lunchStart, timeEnd, timeStart) => {
	const timeSlots = [];
	const interval = 15;

	const lunchEndTime = new Date(`2000-01-01T${lunchEnd}`);
	const lunchStartTime = new Date(`2000-01-01T${lunchStart}`);
	const workEndTime = new Date(`2000-01-01T${timeEnd}`);
	const workStartTime = new Date(`2000-01-01T${timeStart}`);

	for (
		let time = new Date(workStartTime);
		time <= workEndTime;
		time.setMinutes(time.getMinutes() + interval)
	) {
		const currentTime = new Date(time);
		const currentTimeString = `${padZero(currentTime.getHours())}:${padZero(
			currentTime.getMinutes()
		)}`;

		if (!(currentTime >= lunchStartTime && currentTime < lunchEndTime)) {
			timeSlots.push(currentTimeString);
		}
	}

	return timeSlots;
};

export const displayHoursAvailable = (expedients, date) => {
	if (!expedients || expedients.length == 0) {
		return null;
	}

	console.log(expedients, date);
	const weekDaySelect = getWeekDay(date);
	const expedientWeekDaySelect = expedients?.filter(
		(expedient) => expedient.weekDay == weekDaySelect
	)[0];

	return generateTimeSlots(
		expedientWeekDaySelect.lunchEnd,
		expedientWeekDaySelect.lunchStart,
		expedientWeekDaySelect.timeEnd,
		expedientWeekDaySelect.timeStart
	);
};

export const formatDateTime = (dateString, timeString) => {
    const inputDate = new Date(dateString);
    const [hours, minutes] = timeString.split(':');

    const formattedDate = `${inputDate.getFullYear()}-${padZero(inputDate.getMonth() + 1)}-${padZero(inputDate.getDate())}`;

    return `${formattedDate}T${hours}:${minutes}:00`;
}
