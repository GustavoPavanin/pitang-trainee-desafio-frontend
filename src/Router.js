import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Appointment from "./Pages/Appointment";
import List from "./Pages/List";
import Home from "./Pages/Home";
import { createMuiTheme, ThemeProvider} from "@mui/material/styles";
//import Layout from "./components/Layout";
const theme = createMuiTheme({
	typography: {
		button: {
			textTransform: "capitalize"
		}
	}
});
const Router = () => {
	return (
		<ThemeProvider theme={theme}>
			<BrowserRouter>
				<Routes>
					<Route path="*" element={<Home />} />
					<Route path="/list" element={<List />} />
					<Route path="/appointment" element={<Appointment />} />
				</Routes>
			
			</BrowserRouter>
		</ThemeProvider>
	);
};

export default Router;
