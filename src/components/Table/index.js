/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
import React from "react";
import { Paper, TableRow, TableHead, TableContainer, TableBody, TableCell, Table, styled } from "@mui/material";
import Modal from "./Modal";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import Tooltip from "@mui/material/Tooltip";

const StyledTableRow = styled(TableRow)(({ theme }) => ({
	"&:nth-of-type(odd)": {
		backgroundColor: theme.palette.action.hover,
	}
}));

const TableComponent = ({ rows = []}) => {


	return (
		<div style={{ height: 400, width: "100%"}}>
			<TableContainer component={Paper}>
				<Table sx={{ minWidth: 650 }} aria-label="simple table">
					<TableHead>
						<TableRow>
							<TableCell align="center">Nome</TableCell>
							<TableCell align="center">E-mail</TableCell>
							<TableCell align="center">Data de Nascimento</TableCell>
							<TableCell align="center">Data de Agendamento</TableCell>
							<TableCell align="center">Horário</TableCell>
							<TableCell align="center">Status</TableCell>
							<TableCell colSpan={2}></TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{rows ? rows.map((row, key) => (
							<StyledTableRow key={key}>
								<TableCell align="center">{row.name}</TableCell>
								<TableCell align="center">{row.email}</TableCell>
								<TableCell align="center">{row.birthdate}</TableCell>
								<TableCell align="center">{row.appointmentDate}</TableCell>
								<TableCell align="center">{row.appointmentHour}</TableCell>
								<TableCell align="center">{row.status ? "Concluído" : "Pendente"}</TableCell>
								<TableCell align="center">
									<Modal id={row.id} disabled={row.status} />
								</TableCell>
								<TableCell >
									<Tooltip title={row.conclusion ? row.conclusion : "Agendamento Pendente"}>
										<InfoOutlinedIcon />
									</Tooltip>
								</TableCell>
							</StyledTableRow>
						)) : ""}
					</TableBody>
				</Table>
			</TableContainer>
				
		</div>
	);
};


export default TableComponent;
