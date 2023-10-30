function obterHorariosDisponiveis(
	dataInformada,
	profissional,
	horariosAgendados
) {
	const data = new Date(dataInformada);
	const diaDaSemana = data
		.toLocaleDateString("pt-br", { weekday: "short" })
		.toLowerCase();

	const expediente = profissional.expediente.find(
		(item) => item.weekDay === diaDaSemana
	);
	if (!expediente) {
		return null; // O profissional não trabalha neste dia da semana
	}

	const horarioInicial = new Date(dataInformada + " " + expediente.startTime);
	const horarioFinal = new Date(dataInformada + " " + expediente.endTime);

	const bloqueios = profissional.bloqueios[diaDaSemana] || [];

	const horariosDisponiveis = [];
	let horarioAtual = new Date(horarioInicial);

	while (horarioAtual < horarioFinal) {
		const horarioDisponivel = new Date(horarioAtual);

		// Verifica se o horário atual não está em um bloqueio
		const isBloqueado = bloqueios.some((bloqueio) => {
			const startTime = new Date(dataInformada + " " + bloqueio.startTime);
			const endTime = new Date(dataInformada + " " + bloqueio.endTime);
			return horarioAtual >= startTime && horarioAtual < endTime;
		});

		// Verifica se o horário está livre e não foi agendado
		const isAgendado = horariosAgendados.some((agendamento) => {
			const startTime = new Date(dataInformada + " " + agendamento.startTime);
			const endTime = new Date(dataInformada + " " + agendamento.endTime);
			return horarioAtual >= startTime && horarioAtual < endTime;
		});

		if (!isBloqueado && !isAgendado) {
			horariosDisponiveis.push(
				horarioDisponivel.toLocaleTimeString("pt-BR", {
					hour: "2-digit",
					minute: "2-digit",
				})
			);
		}

		horarioAtual.setMinutes(horarioAtual.getMinutes() + 30);
	}

	return {
		daySelected: data.getDate(),
		horariosDisponiveis,
	};
}

// Exemplo de uso com os dados fornecidos:
const dataInformada = "28/10/2023";
const profissional = {
	name: "Ramilthon",
	expediente: [
		{
			weekDay: "seg",
			startTime: "09:00",
			endTime: "16:30",
		},
		{
			weekDay: "ter",
			startTime: "09:00",
			endTime: "16:00",
		},
	],
	bloqueios: {
		seg: [
			{
				startTime: "10:00",
				endTime: "10:30",
			},
			{
				startTime: "12:00",
				endTime: "12:30",
			},
		],
		ter: [
			{
				startTime: "11:00",
				endTime: "11:30",
			},
			{
				startTime: "15:00",
				endTime: "15:30",
			},
		],
	},
};

const horariosAgendados = [
	{
		startTime: "09:00",
		endTime: "09:50",
	},
];

const horariosDisponiveis = obterHorariosDisponiveis(
	dataInformada,
	profissional,
	horariosAgendados
);

console.log(horariosDisponiveis);