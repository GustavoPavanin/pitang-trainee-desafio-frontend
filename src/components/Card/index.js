import React , {useState} from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import DatePicker from "react-datepicker";
import Schema from "../../schema";
import "react-datepicker/dist/react-datepicker.css";
import { Card, TextField, CardContent, Typography, Button, Box } from "@mui/material";

const CardForm = () => {
	const currentDate = new Date();
	const [appointmentDate, setAppointmentDate] = useState(new Date());
	const [birthdate, setBirthdate] = useState(new Date());
	const [appointmentHour, setAppointmentHour] = useState();
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
						appointmentDate: "",
						appointmentHour: ""}	
					}
				>
					{({ values,  isValid, setFieldValue}) => (
						<Form>
							
							<Box pt={1}>
								<Field id="name" name="name" type="text" 
									as={TextField} label="Name" variant="filled" 
								/>
								<ErrorMessage name="name" />
							</Box>
							<Box pt={2}>
								<Field id="email" name="email" type="email"
									as={TextField} label="Email Address" variant="filled" 
								/>
								<ErrorMessage name="email" />
							</Box>
							<Box pt={2}>
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
							</Box>
							<Box pt={2}>
								<label htmlFor="appointmentDate">Appointment Date</label>
								<DatePicker id="appointmentDate" selected={appointmentDate} 
									onChange={(value) => {
										setAppointmentDate(Date.parse(value));
										setFieldValue("appointmentDate", value);
										console.log(appointmentDate);
									}}
									minDate={currentDate}
									value={values.appointmentDate} 
								/>
								<ErrorMessage name="appointmentDate"/>
							</Box>
							<Box pt={2}>
								<label htmlFor="appointmentHour">Appointment Hour</label>
								<DatePicker id="appointmentHour" selected={appointmentHour} 
									onChange={(value) => {
										setAppointmentHour(Date.parse(value));
										setFieldValue("appointmentHour", value);
										console.log(appointmentHour);
										
									}}
									showTimeSelect
									showTimeSelectOnly
									timeIntervals={60}
									timeCaption="Time"
									dateFormat="h:mm aa"
									value={values.appointmentHour} 
								/>

								<ErrorMessage name="appointmentHour"/>
							</Box>
							<Box pt={2}><Button type="submit" disabled={!isValid} variant="contained">Submit</Button></Box>
							
						</Form>
					)}
				</Formik>
			</CardContent>
		</Card>
		
	);
};

export default CardForm;