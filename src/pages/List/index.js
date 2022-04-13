import React from "react";
import { Container, Typography } from "@mui/material";
import ListView from "../../components/ListView";

const List = () => {
	return (
		<Container>
			<Typography variant="h4">Schedule</Typography>
			<ListView />
		</Container>
		
	);
};

export default List;