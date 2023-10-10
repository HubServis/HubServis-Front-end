export const DAYS = ["Seg", "Ter", "Qua", "Qui", "Sex", "Sáb", "Dom"];

export const MONTHS = [
	"Janeiro",
	"Fevereiro",
	"Março",
	"Abril",
	"Maio",
	"Junho",
	"Julho",
	"Agosto",
	"Setembro",
	"Outubro",
	"Novembro",
	"Dezembro",
];

/*
* OBS: Os meses do new Date(...) começam em 0, ou seja, para saber o mês correto é só pegar o numero
* do mês atual e fazer -1.
*/

export const MOCKAPPS = [
	{ date: new Date(2023, 9, 9), title: "08 cortes", color: "#238783" },
	{ date: new Date(2023, 9, 10), title: "01 cortes", color: "#708898" },
	{ date: new Date(2023, 9, 11), title: "03 cortes", color: "#047106" },
	{ date: new Date(2023, 9, 12), title: "12 cortes", color: "#371395" },
];

export const MOCKDATAAPI = {
	location: "Marília",
	region: "SP",
	country: "Brasil",
};
