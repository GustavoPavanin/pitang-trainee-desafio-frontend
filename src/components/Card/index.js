import React from "react";
import { Formik, Field, Form } from "formik";
import DatePicker from "react-datepicker";
import "./bootstrap.min.css";
import "./style.css";
import "react-datepicker/dist/react-datepicker.css";

const CardComponent = () => {

	const startDate = new Date();
	const onSubmit = (values) =>{
		console.log("SUBMIT", values);
	};
	const validate = (values) => {
		const errors = {};
		if(!values.name){
			errors.name = "Name is required";
		}
		if(!values.email){
			errors.email = "Email is required";
		}
		if(!values.birthdate){
			errors.birthdate = "Birthdate is required";
		}
		return errors;
	};
	return (
		<div>
			<Formik 
				validateOnMount
				validate={validate}
				onSubmit={onSubmit}
				initialValues={{name: "",
					email: "",
					birthdate: "",
					appointmentDate: ""}	
				}
			>
				{({ values, errors, handleChange}) => (
					<Form>
						<div>
							<label htmlFor="name">Name</label>
							<Field id="name" name="name" type="text"/>
							{ errors.name && ( <span>{errors.name}</span> ) } 
						</div>
						<div>
							<label htmlFor="email">Email Address</label>
							<Field id="email" name="email" type="email"/>
							{ errors.email && ( <span>{errors.email}</span> ) } 
						</div>
						<div>
							<label htmlFor="birthdate">Birthdate</label>
							<Field id="birthdate" name="birthdate" type="date"/>
							{ errors.birthdate && ( <span>{errors.birthdate}</span> ) } 
						</div>
						<div>
							<DatePicker id="appointmentDate" selected={startDate} onChange={handleChange} value={values.appointmentDate} showTimeSelect dateFormat="Pp"/>
						</div>
						<button type="submit">Submit</button>
					</Form>
				)}
			</Formik>
		</div>
		
	);
};

export default CardComponent;