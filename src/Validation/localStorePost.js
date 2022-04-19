import dataSort from "./dataSort";
const localStorePost = (data) => {
	let scheduleList = JSON.parse(localStorage.getItem("schedule"));
	scheduleList.push(data);
	dataSort(scheduleList);
	localStorage.setItem("schedule", JSON.stringify(scheduleList));
};

export default localStorePost;