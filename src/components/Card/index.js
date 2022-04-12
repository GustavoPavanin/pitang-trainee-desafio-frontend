import React , {useState} from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import DatePicker from "react-datepicker";
import Schema from "../../schema";
import "./style.css";
import "react-datepicker/dist/react-datepicker.css";

const CardComponent = () => {
	const currentDate = new Date();
	const [appointmentDate, setAppointmentDate] = useState(new Date());
	const [birthdate, setBirthdate] = useState(new Date());
	const onSubmit = (values) =>{
		console.log("SUBMIT", values);
		alert(JSON.stringify(values, null, 2));
	};
	return (
		<div>
			<Formik 
				validationSchema={Schema}
				onSubmit={onSubmit}
				validateOnMount
				initialValues={{
					name: "",
					email: "",
					birthdate: "",
					appointmentDate: ""}	
				}
			>
				{({ values,  isValid, setFieldValue}) => (
					<Form>
						<div>
							<label htmlFor="name">Name</label>
							<Field id="name" name="name" type="text"/>
							<ErrorMessage name="name"/>
						</div>
						<div>
							<label htmlFor="email">Email Address</label>
							<Field id="email" name="email" type="email"/>
							<ErrorMessage name="email"/>
						</div>
						<div>
							<label htmlFor="birthdate">Birthdate</label>
							<DatePicker 
								id="birthdate" 
								name="birthdate" 
								value={values.birthdate}
								selected={birthdate}
								onChange={(value) => {
									setBirthdate(Date.parse(value));
									setFieldValue("birthdate",value);
									console.log(birthdate);
								}}
							/>
							<ErrorMessage name="birthdate"/>
						</div>
						<div>
							<label htmlFor="appointmentDate">Appointment Date</label>
							<DatePicker id="appointmentDate" selected={appointmentDate} 
								onChange={(value) => {
									setAppointmentDate(Date.parse(value));
									setFieldValue("appointmentDate", value);
									console.log(appointmentDate);
								}}
								minDate={currentDate}
								value={values.appointmentDate} 
								showTimeSelect 
								dateFormat="Pp"/>
							<ErrorMessage name="appointmentDate"/>
						</div>
						<button type="submit" disabled={!isValid}>Submit</button>
					</Form>
				)}
			</Formik>
		</div>
		
	);
};

export default CardComponent;