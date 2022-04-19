import React , {useState} from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import DatePicker from "react-datepicker";
import Schema from "../../schema";
import "react-datepicker/dist/react-datepicker.css";
import { TextField, Typography, Button, Box } from "@mui/material";

const titulo = {
	fontFamily: "Arial",
	fontWeight:"600",
	fontSize:" 34px",
	lineHeight:" 51px",
	color: "#1AE1D6" 
};
  
const subtitulo = {
	fontFamily: "Arial",
	fontStyle:" normal",
	fontWeight:"400",
	fontSize:" 24px",
	lineHeight:" 36px",
	color: "#FFFFFF" 
};

const CardForm = () => {
	const currentDate = new Date();
	const [appointmentDate, setAppointmentDate] = useState(new Date());
	const [birthdate, setBirthdate] = useState(new Date());
	const [appointmentHour, setAppointmentHour] = useState();
	const onSubmit = (values) =>{
		console.log("SUBMIT", JSON.stringify(values, null, 2));
		alert(JSON.stringify(values, null, 2));
	};
	return (
		<Box pt={1} >
			<Box pt={1} pb={3}>
				<Typography variant="h4" sx={titulo}>Agendamento</Typography>
				<Typography variant="h6" sx={subtitulo}>Preencha todos os campos a baixo para prosseguirmos com o seu agendamento.</Typography>
			</Box>
			
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

					<Box pl={5}>
						<Form>
							
							<Box pt={1}>
								<Field id="name" name="name" type="text" 
									as={TextField} label="Nome" variant="filled" color="success" focused 
									sx={{ display: "flex" , }}
								/>
								<ErrorMessage name="name">
									{ msg => <div style={{ color: "red" }}>{msg}</div> }
								</ErrorMessage>
							</Box>
							<Box pt={1.5}>
								<Field id="email" name="email" type="email"
									as={TextField} label="Email" variant="filled" 
									sx={{ display: "flex" }}
								/>
								<ErrorMessage name="email" >
									{ msg => <div style={{ color: "red" }}>{msg}</div> }
								</ErrorMessage>
							</Box>
							<Box pt={1.5}>
								<label htmlFor="birthdate">Data de Nascimento</label>
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
								<ErrorMessage name="birthdate">
									{ msg => <div style={{ color: "red" }}>{msg}</div> }
								</ErrorMessage>
							</Box>
							<Box pt={1.5}>
								<label htmlFor="appointmentDate">Data de Agendamento</label>
								<DatePicker id="appointmentDate" selected={appointmentDate} 
									onChange={(value) => {
										setAppointmentDate(Date.parse(value));
										setFieldValue("appointmentDate", value);
										console.log(appointmentDate);
									}}
									minDate={currentDate}
									value={values.appointmentDate} 
								/>
								<ErrorMessage name="appointmentDate">
									{ msg => <div style={{ color: "red" }}>{msg}</div> }
								</ErrorMessage>
							</Box>
							
							<Box pt={1.5} >
								<label htmlFor="appointmentHour">Horário de Agendamento</label>
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

								<ErrorMessage name="appointmentHour">
									{ msg => <div style={{ color: "red" }}>{msg}</div> }
								</ErrorMessage>
							</Box>
							<Box pt={1.5}><Button type="submit" disabled={!isValid} variant="contained" sx={{backgroundColor: "#1AE1D6", color : "#022D90"}}>Submit</Button></Box>
							
						</Form>
					</Box>
				)}
			</Formik>
		</Box>
		
	);
};

export default CardForm;