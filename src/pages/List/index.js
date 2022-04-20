import React from "react";
import { Container, Typography } from "@mui/material";
import ListView from "../../Components/ListView";
import Header from "../../Components/Header";

const titulo = {
	fontFamily: "Arial",
	fontWeight:"600",
	fontSize:" 34px",
	lineHeight:" 51px",
	color: "#1AE1D6",
	paddingTop: 3,
	paddingBottom: 2
};

const List = () => {
	return (
		<Container>
			<Header />
			<Typography variant="h4" sx={titulo}>Agendamentos</Typography>
			<ListView />
		</Container>
		
	);
};

export default List;