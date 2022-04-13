/* eslint-disable react/react-in-jsx-scope */
import { useEffect, useState } from "react";
import { Pencil, Trash } from "tabler-icons-react";
import axios from "../../services/api";
import Table from "../Table";

const ListView = (
	columns,
	onClickActionButton = () => {},
) => {
	const [rows, setRows] = useState([]);

	const onDelete = (row) => {
		alert(row.id);
	};

	const actions = [
		{
			leftIcon: <Pencil />,
			onClick: (item) => onClickActionButton(item),
		},
		{
			mt: 8,
			color: "red",
			leftIcon: <Trash />,
			onClick: onDelete,
		},
	];

	useEffect(() => {
		axios.get()
			.then((response) => setRows(response.data.list))
			.catch(console.error);
	}, []);

	return (
		<>
			<Table columns={columns} rows={rows} actions={actions}/>
		</>
	);
};

export default ListView;
