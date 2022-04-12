import * as Yup from "yup";

export default Yup.object().shape({
	name: Yup.string().min(3).required("Name is required"),
	email: Yup.string().email().required("Email is required"),
	birthdate: Yup.date().typeError("Birthdate is required").required("Birthdate is required"),
	appointmentDate: Yup.date().min(new Date(), "You can only schedule for dates from the current date").typeError("Birthdate is required").required("Birthdate is required"),
});