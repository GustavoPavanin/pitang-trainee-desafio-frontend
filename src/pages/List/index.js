import React from "react";
import { Container, Typography } from "@mui/material";
import ListView from "../../Components/ListView";
import Header from "../../Components/Header";
const List = () => {
	return (
		<Container>
			<Header />
			<Typography variant="h4">Schedule</Typography>
			<ListView />
		</Container>
		
	);
};

export default List;