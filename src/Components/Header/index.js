import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import LogoHeader from "../../Assets/Images/LogoHeader.svg";
import { Link } from "react-router-dom";


const Header = () => {

	return (
		<Box sx={{ flexGrow: 1, mb: 10}}>
			<AppBar sx={{ bgcolor: "#1AE1D6" }}>
				<Toolbar>
					<Toolbar sx={{ ml: 6}}>
						<Link to="/"><img src={LogoHeader} alt="logo" width="80%" height="73px"/></Link>
					</Toolbar>
					<Typography variant="h6" component="div" sx={{ flexGrow: 1, color: "#022D90", }} />
					<Button sx={{ color: "#022D90", mr: 3}} ><Link style={{ color :"#022D90", textDecoration: "none"}} to="/list">Ver Agendamentos</Link></Button>
					<Button variant="contained" sx={{backgroundColor: "#022D90", mr: 6}} ><Link style={{ color :"white", textDecoration: "none"}} to="/appointment">Agendar</Link></Button>
				</Toolbar>
			</AppBar>
		</Box>
	);
};
export default Header;