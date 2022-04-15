/* eslint-disable react/react-in-jsx-scope */
import { useEffect, useState } from "react";
import axios from "../../services/api";
import Table from "../Table";

const ListView = (
) => {
	const [rows, setRows] = useState([]);
	const data = localStorage.getItem("schedule");
	
	useEffect(() => {
		if(data && data != "[]"){
			setRows(JSON.parse(data));
			console.log("pegou localStorage");
		}else{
			axios.get()
				.then((response) => {
					setRows(response.data.list);
					localStorage.setItem("schedule", JSON.stringify(response.data.list));
				})
				.catch(console.error);
				
			console.log("fez get");
		}
	}, []);
	
	return (
		<>
			<Table rows={rows} />
		</>
	);
};

export default ListView;
