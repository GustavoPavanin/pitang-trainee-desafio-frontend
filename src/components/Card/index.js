//import { Button, Table } from "@mantine/core";
import React from "react";
import { useFormik } from "formik";
import DatePicker from "react-datepicker";
import "./bootstrap.min.css";
import "./style.css";
import "react-datepicker/dist/react-datepicker.css";

const CardComponent = () => {

	const formik = useFormik({
		initialValues: {
			name: "",
			email: "",
			birthdate: "",
			appointmentDate: ""
		},
		onSubmit: values => {
			alert(JSON.stringify(values, null, 2));
		},
	});

	const startDate = new Date();

	return (
		<form onSubmit={formik.handleSubmit}>

			<label htmlFor="name">Name</label>
			<input
				id="name"
				name="name"
				type="text"
				onChange={formik.handleChange}
				value={formik.values.name}
			/>

			<label htmlFor="email">Email Address</label>
			<input
				id="email"
				name="email"
				type="email"
				onChange={formik.handleChange}
				value={formik.values.email}
			/>

			<label htmlFor="birthdate">Birthdate</label>
			<input
				id="birthdate"
				name="birthdate"
				type="date"
				onChange={formik.handleChange}
				value={formik.values.birthdate}
			/>

			<DatePicker id="appointmentDate" selected={startDate} onChange={formik.handleChange} value={formik.values.appointmentDate} showTimeSelect dateFormat="Pp"/>

			<button type="submit">Submit</button>
		</form>
	);
};




export default CardComponent;