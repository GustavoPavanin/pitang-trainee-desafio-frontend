import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Appointment from "./pages/Appointment";
import List from "./pages/List";

//import Layout from "./components/Layout";

const Router = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="*" element={<h1>not found</h1>} />
				<Route path="/list" element={<List />} />
				<Route path="/appointment" element={<Appointment />} />
			</Routes>
			
		</BrowserRouter>
	);
};

export default Router;
