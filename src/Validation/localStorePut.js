const localStorePut = (id, comment) => {
	let scheduleList = JSON.parse(localStorage.getItem("schedule"));
	const position = scheduleList.findIndex(object => { return object.id === id;});

	scheduleList[position].status = true;
	scheduleList[position].conclusion = comment;
	localStorage.setItem("schedule", JSON.stringify(scheduleList));
};

export default localStorePut;