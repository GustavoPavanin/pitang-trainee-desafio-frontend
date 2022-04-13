/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import axios from "../../services/api";
import Table from "../Table";

const ListView = () => {
	const [rows, setRows] = useState([]);

	useEffect(() => {
		axios.get()
			.then((response) => setRows(response.data.list))
			.catch(console.error);
	}, []);
	return (
		<>
			<Table 
				columns={[
					{ key: "id", value: "ID" },
					{ key: "name", value: "Name" },
					{ key: "email", value: "Email" },
					{ key: "birthdate", value: "Birthdate" },
					{ key: "appointmentDate", value: "Appointment Date" },
					{ key: "appointment", value: "Appointment Hour" },
				]}
				rows={rows}/>
		</>
	);
};

export default ListView;
