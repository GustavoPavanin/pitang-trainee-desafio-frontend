import React, {useState} from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { Formik, Form, Field } from "formik";
import axios from "../../../Services/api";
import localStorePut from "../../../Validation/localStorePut";

const Modal = (props) => {
	const [open, setOpen] = useState(false);
	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
		alert(JSON.parse(props.id));
	};

	const onSubmit = async (values) =>{

		await axios.put(`/${props.id}`, values)
			.then((response) => {
				localStorePut(props.id, values.comment);
				alert(response.data.message);
				window.location.reload();
				handleClose();
				
			})
			.catch((error) => {
				alert(error.response.message);
				console.log({ message: error.response.message}); //Logs a string: Error: Request failed with status code 404
			});

	};

	return (
		<div>
			<Button id={props.id} variant="outlined" onClick={handleClickOpen} disabled={props.disabled}>Confirmar</Button>
			<Dialog open={open} onClose={handleClose}>
				<DialogTitle>Confirmar Vacinação</DialogTitle>
				<Formik
					initialValues={{
						"comment": " "
					}}
					onSubmit={onSubmit} 
				>
					{() => (
						<Form >
							<DialogContent>
								<Field id="comment" name="comment" type="text" 
									as={TextField} label="Comentário" variant="standard" focused 
									sx={{ width:"500px" }}
								/>
							</DialogContent>
							<DialogActions>
								<Button onClick={handleClose} >Cancelar</Button>
								<Button type="submit" >Enviar</Button>
							</DialogActions>
						</Form>
					)}
				</Formik>
					
			</Dialog>
		</div>
	);
};

export default Modal;

