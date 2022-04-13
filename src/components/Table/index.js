/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
//import { Button, Table } from "@mantine/core";
import React from "react";
import {Button, Paper, TableRow, TableHead, TableContainer, TableBody, TableCell, Table } from "@mui/material";

const TableComponent = ({ rows = []}) => {

	const onClick = (values) =>{
		console.log("SUBMIT", values);
		alert(JSON.stringify(values, null, 2));
	};
	return (
		<div style={{ height: 400, width: "100%"}}>
			<TableContainer component={Paper}>
				<Table sx={{ minWidth: 650 }} aria-label="simple table">
					<TableHead>
						<TableRow>
							<TableCell align="center">Name</TableCell>
							<TableCell align="center">Email</TableCell>
							<TableCell align="center">Birthdate</TableCell>
							<TableCell align="center">Appointment Date</TableCell>
							<TableCell align="center">Appointment Hour</TableCell>
							<TableCell align="center">Actions</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{rows.map((row) => (
							<TableRow>
								<TableCell align="center">{row.name}</TableCell>
								<TableCell align="center">{row.email}</TableCell>
								<TableCell align="center">{row.birthdate}</TableCell>
								<TableCell align="center">{row.appointmentDate}</TableCell>
								<TableCell align="center">{row.appointmentHour}</TableCell>
								<TableCell align="center"><Button onClick={() => onClick(row.id)} variant="outlined">Confirm</Button></TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</div>
	);
};


export default TableComponent;
