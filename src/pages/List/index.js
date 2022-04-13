import React from "react";
import ListView from "../../components/ListView";

const onClickActionButton = (movie) => {
	alert({ data: movie });
};
  
const List = () => {
	return (
		<ListView 
			columns={[
				{ key: "id", value: "ID" },
				{ key: "name", value: "Name" },
				{ key: "email", value: "Email" },
				{ key: "birthdate", value: "Birthdate" },
				{ key: "appointmentDate", value: "Appointment Date" },
				{ key: "appointment", value: "Appointment Hour" },
			]}
			onClickActionButton={onClickActionButton}
		/>
	);
};

export default List;