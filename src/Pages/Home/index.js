import { Container, Box, Typography, Button } from "@mui/material";
import React from "react";
//import { useFormik } from "formik";
import { Link } from "react-router-dom";
import Header from "../../Components/Header";
import Ilustracao from "../../Assets/Images/Ilustracao_Home.svg";
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

const ilustracao = {
	position: "absolute",
	width: "274px",
	height: "420px",
	left: "800px",
	top: "15px"
};
const Home = () => {
	return (
		<Container >
			<Header />
			<Box  sx={{ position: "absolute", width: "60%", height: "145px", left: "146px", top: "25%" }}>
				<Typography sx={titulo}>
						Agende suas vacinas de COVID-19 de modo fácil, rápido e seguro!
				</Typography>
				<Box  sx={{ width: "80%", height: "145px", left: "146px", top: "25%" }}>
					<Typography sx={subtitulo}>
					O cuidado com a saúde é extremamente importante. Por isso, manter a vacinação em dia deve ser prioridade. Não descuide da sua saúde, vacine-se!
					</Typography>
				</Box>
				<Button sx={{backgroundColor: "#1AE1D6", mt: 3}} >
					<Link style={{ color : "#022D90", textDecoration: "none"}} to="/appointment">Agendar minha vacina</Link>
				</Button>
				<Box>
					<img style={ilustracao} src={Ilustracao} alt="logo"/>
				</Box>
			</Box>
			
		</Container>
	);
};

export default Home;