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
				?.join("");;

    return `${firstDayExpedient} à ${lastDayExpedient}`;
};

export const displayHoursAvailable = (expedients) => {
    console.log(expedients);
}