import React from "react";
import { useFormik } from "formik";

const Appointment = () => {

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

			<button type="submit">Submit</button>
		</form>
	);
};

export default Appointment;
