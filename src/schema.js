import * as Yup from "yup";

export default Yup.object().shape({
	name: Yup.string().min(3,"Nome é obrigatório!").required("Nome é obrigatório!"),
	email: Yup.string().email("Digite um email válido").required("Email é obrigatório!"),
	birthdate: Yup.date().typeError("Data de nascimento é obrigatória").required("Data de nascimento é obrigatória!"),
	appointmentDate: Yup.date().min(new Date(), "Você só pode escolher datas a partir da data atual!").typeError("Data do agendamento é obrigatória!").required("Data do agendamento é obrigatória"),
	appointmentHour	: Yup.date().typeError("Hora do agendamento é obrigatória!").required("Hora do agendamento é obrigatória!"),
});