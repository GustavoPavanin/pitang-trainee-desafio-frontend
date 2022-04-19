import { Container, Box, Typography } from "@mui/material";
import React from "react";
//import { useFormik } from "formik";
import Header from "../../Components/Header";

const titulo = {
	fontFamily: "Arial",
	fontStyle:" normal",
	fontWeight:"600",
	fontSize:" 46px",
	lineHeight:" 69px",
	color: "#1AE1D6" 
};

const subtitulo = {
	fontFamily: "Arial",
	fontStyle:" normal",
	fontWeight:"400",
	fontSize:" 24px",
	lineHeight:" 36px",
	color: "#FFFFFF" 
};

const Home = () => {
	return (
		<Container >
			<Header />
			<Box  sx={{ position: "absolute", width: "50%", height: "145px", left: "146px", top: "25%" }}>
				<Typography sx={titulo}>
						Agende suas vacinas de COVID-19 de modo fácil, rápido e seguro!
				</Typography>
				<Typography sx={subtitulo}>
					O cuidado com a saúde é extremamente importante. Por isso, manter a vacinação em dia deve ser prioridade. Não descuide da sua saúde, vacine-se!
				</Typography>
			</Box>
		</Container>
	);
};

export default Home;