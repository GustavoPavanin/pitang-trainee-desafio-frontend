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

const ilustracao = {
	position: "absolute",
	width: "400px",
	height: "50%",
	left: "60%",
};

const days = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"];
const months = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

const locale = {
	localize: {
		day: n => days[n],
		month: n => months[n]
	},
	formatLong: {
		date: () => "mm/dd/yyyy"
	}
};

const submit = {
	backgroundColor: "#1AE1D6",
	color : "#022D90",
	width: "100%"
};

const label = {
	fontWeight: "400",
	fontSize: "14px",
	color: "#1AE1D6"
};

export default {titulo, subtitulo, ilustracao, locale, submit, label};