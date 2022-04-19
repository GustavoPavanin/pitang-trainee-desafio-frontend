import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Appointment from "./Pages/Appointment";
import List from "./Pages/List";
import Home from "./Pages/Home";
//import Layout from "./components/Layout";

const Router = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="*" element={<Home />} />
				<Route path="/list" element={<List />} />
				<Route path="/appointment" element={<Appointment />} />
			</Routes>
			
		</BrowserRouter>
	);
};

export default Router;
