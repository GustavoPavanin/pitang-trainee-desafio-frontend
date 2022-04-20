
import React , {useState} from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import DatePicker from "react-datepicker";
import Schema from "../../schema";
import "react-datepicker/dist/react-datepicker.css";
import { TextField, Typography, Button, Box, Grid, Container, InputLabel} from "@mui/material";
import axios from "../../Services/api";
import localStorePost from "../../Validation/localStorePost.js";
import Ilustracao from "../../Assets/Images/Ilustracao_Agendar.svg";
import style from "./style.js";


const CardForm = () => {
	const currentDate = new Date();
	const [appointmentDate, setAppointmentDate] = useState(new Date());
	const [birthdate, setBirthdate] = useState(new Date());
	const [appointmentHour, setAppointmentHour] = useState();

	const onSubmit = async (values) => {
		console.log(JSON.stringify(values, null, 2));
		await axios.post("", values)
			.then((response) => {
				alert(response.data.message);
				localStorePost(response.data.data);
			})
			.catch((error) => {
				alert(error.response.data.message);
				console.log({ message: error.response.data.message}); //Logs a string: Error: Request failed with status code 404
			});
	};

	return (
		<Container>
			<Box pt={1} pb={3}>
				<Typography sx={style.titulo}>Agendamento</Typography>
				<Typography sx={style.subtitulo}>Preencha todos os campos a baixo para prosseguirmos com o seu agendamento.</Typography>
			</Box>
			<Grid container spacing={5} pt={1.5}>
				<Grid item xs={7}>
					<Box pt={1} >
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
					
								<Box>
									<style>
										{`.date-picker input {
											width: 100%;
											font-size:18px;
											padding:10px 0px 10px 0px;
											display:block;

											border:none;
											border-bottom:1px solid #757575;	  
										}	
										
										
							`}
									</style>
									<Form>
							
										<Box pt={1}>
											<Field id="name" name="name" type="text" 
												as={TextField} label="Nome" variant="filled" 
												sx={{ display: "flex" , bgcolor: "white"}} focused
											/>
											<ErrorMessage name="name">
												{ msg => <div style={{ color: "red" }}>{msg}</div> }
											</ErrorMessage>
										</Box>
										<Box pt={2}>
											<Field id="email" name="email" type="email"
												as={TextField} label="Email" variant="filled" 
												sx={{ display: "flex" , bgcolor: "white"}} focused
											/>
											<ErrorMessage name="email" >
												{ msg => <div style={{ color: "red" }}>{msg}</div> }
											</ErrorMessage>
										</Box>
										<Box pt={1}>
											<InputLabel sx={style.label}  htmlFor="birthdate">Data de Nascimento</InputLabel>
											<DatePicker 
												id="birthdate" 
												name="birthdate" 
												maxDate={currentDate}
												value={values.birthdate}
												selected={birthdate}
												showYearDropdown
												scrollableYearDropdown
												locale={style.locale}
												yearDropdownItemNumber={80}
												wrapperClassName="date-picker"
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
										<Grid container spacing={7} pt={1}>
											<Grid item xs={6}>
												<InputLabel sx={style.label} htmlFor="appointmentDate">Data de Agendamento</InputLabel>
												<DatePicker id="appointmentDate" selected={appointmentDate} 
													onChange={(value) => {
														setAppointmentDate(Date.parse(value));
														setFieldValue("appointmentDate", value);
														console.log(appointmentDate);
													}}
													wrapperClassName="date-picker"
													excludeDates={[]}
													locale={style.locale}
													minDate={currentDate}
													value={values.appointmentDate} 
												/>
												<ErrorMessage name="appointmentDate">
													{ msg => <div style={{ color: "red" }}>{msg}</div> }
												</ErrorMessage>
											</Grid>
											<Grid item xs={6}>
												<InputLabel sx={style.label} htmlFor="appointmentHour">Horário de Agendamento</InputLabel>
												<DatePicker id="appointmentHour" selected={appointmentHour} 
													onChange={(value) => {
														setAppointmentHour(Date.parse(value));
														setFieldValue("appointmentHour", value);
														console.log(appointmentHour);
										
													}}
													wrapperClassName="date-picker"
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
											</Grid>
										</Grid>
										<Box pt={1.5}><Button type="submit" disabled={!isValid} variant="contained" sx={style.submit}>Agendar Vacina</Button></Box>
							
									</Form>
									
								</Box>	
							)}
						</Formik>
					</Box>
				</Grid>
				<Grid item xs={5}>
					<img style={style.ilustracao} src={Ilustracao} alt="logo"/>
				</Grid>
			</Grid>
		</Container>
		
	);
};

export default CardForm;