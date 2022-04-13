import React , {useState} from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import DatePicker from "react-datepicker";
import Schema from "../../schema";
import "react-datepicker/dist/react-datepicker.css";
import { Card, TextField, CardContent, Typography, Button } from "@mui/material";

const CardForm = () => {
	const currentDate = new Date();
	const [appointmentDate, setAppointmentDate] = useState(new Date());
	const [birthdate, setBirthdate] = useState(new Date());
	const onSubmit = (values) =>{
		console.log("SUBMIT", values);
		alert(JSON.stringify(values, null, 2));
	};
	return (
		<Card>
			<CardContent>
				<Typography variant="h4">Schedule your vaccination date</Typography>
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
								<Field id="name" name="name" type="text" 
									as={TextField} label="Name" variant="filled" sx={{ m: 1}}
								/>
								<ErrorMessage name="name" />
							</div>
							<div>
								<Field id="email" name="email" type="email"
									as={TextField} label="Email Address" variant="filled" sx={{ m: 1}}
								/>
								<ErrorMessage name="email" />
							</div>
							<div>
								<label htmlFor="birthdate">Birthdate</label>
								<DatePicker 
									id="birthdate" 
									name="birthdate" 
									maxDate={currentDate}
									value={values.birthdate}
									selected={birthdate}
									onChange={(value) => {
										setBirthdate(Date.parse(value));
										setFieldValue("birthdate",value);
										console.log(birthdate);
									}}
									className={TextField}
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
									dateFormat="Pp"
								/>
								<ErrorMessage name="appointmentDate"/>
							</div>
							<Button type="submit" disabled={!isValid} variant="contained">Submit</Button>
						</Form>
					)}
				</Formik>
			</CardContent>
		</Card>
		
	);
};

export default CardForm;