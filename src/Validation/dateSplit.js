const dateFormat = (date) => {
	const monthDayYear = date.split("/");

	return monthDayYear[1] + "/" + monthDayYear[0] + "/" + monthDayYear[2];
};

export default dateFormat;