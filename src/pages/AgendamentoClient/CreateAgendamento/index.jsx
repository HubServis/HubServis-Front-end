import React, { useEffect, useState } from "react";
import { AppBar, BtnFillGreen, Footer } from "../../../components";
import { Clock, Users } from "@phosphor-icons/react";
import { Calendar } from "primereact/calendar";
import { addLocale } from "primereact/api";
import { useParams } from "react-router-dom";
import {
	displayDurationService,
	displayExpedientBusiness,
	displayHoursAvailable,
	formatDateTime,
} from "./createAgendamentosUtils";
import { api } from "../../../services/api";
import { useNavigate } from 'react-router-dom';

const CreateAgendamento = () => {
	const { id } = useParams();
	const navigation = useNavigate();
	const [date, setDate] = useState(new Date());
	const [hourSelect, setHourSelect] = useState(null);

	const [dataService, setDataService] = useState();
	const [isFetching, setIsFetching] = useState(true);
	const [error, setError] = useState(null);
	const [dataBusinessExpedient, setDataBusinessExpedient] = useState();

	useEffect(() => {
		(async () => {
			try {
				const dataServiceResponse = await api.get(`/service/${id}`);
				const dataBusinessExpedientResponse = await api.get(
					`/expediencys/${dataServiceResponse?.data?.business?.id}`
				);

				setDataService(dataServiceResponse?.data);
				setDataBusinessExpedient(dataBusinessExpedientResponse?.data[0]);

				setIsFetching(false);
			} catch (err) {
				console.log("Deu Erro!", err);
				setError(err);
			}
		})();
	}, []);

	addLocale("pt-br", {
		firstDayOfWeek: 1,
		showMonthAfterYear: true,
		dayNames: [
			"domingo",
			"segunda",
			"terça",
			"quarta",
			"quinta",
			"sexta",
			"sábado",
		],
		dayNamesShort: ["dom", "seg", "ter", "qua", "qui", "sex", "sáb"],
		dayNamesMin: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"],
		monthNames: [
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
		],
		monthNamesShort: [
			"jan",
			"fev",
			"mar",
			"abr",
			"mai",
			"jun",
			"jul",
			"ago",
			"set",
			"oct",
			"nov",
			"dec",
		],
		today: "Hoje",
		clear: "Limpiar",
	});

	const HourAvailable = ({ hour }) => {
		return (
			<p
				onClick={() => setHourSelect(hour)}
				className="text-lg font-semibold text-[var(--black)] px-24 py-5 border-[var(--light-green)] border-[2px] rounded-lg inline-flex cursor-pointer lg:w-full"
			>
				{hour}
			</p>
		);
	};

	const onSubmit = async () => {
		if (!date || !hourSelect) {
			alert("Selecione um horário!");
			return;
		}

		console.log(formatDateTime(date, hourSelect));

		try {
			const responseSubmit = await api.post(
				"/appointment/create",
				{
					date_time: formatDateTime(date, hourSelect),
					client: "ebca70e6-ea7e-4916-a671-cea7464fecd9",
					service: id,
					professional: "2746dddd-dc16-4d09-94ed-3de20c2e5d8e",
				},
				{
					headers: {
						Authorization:
							"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImViY2E3MGU2LWVhN2UtNDkxNi1hNjcxLWNlYTc0NjRmZWNkOSIsImlhdCI6MTcwMTI4MTQyOSwiZXhwIjoxNzAxMjk1ODI5fQ.-9DsLDrg5u1kFy1oxwqSoN1nQyHchHj5BbcQHJtUjz4",
					},
				}
			);

			if (responseSubmit?.status == 201) {
				navigation("/agendamentos");
				return;
			}
		} catch (error) {
			console.log("Error Submit", error);
			console.log(error?.response?.data);

			if (
				error?.response?.data?.message == "Token not informed!" ||
				error?.response?.status == 401
			) {
				alert("Ocorreu um erro de autenticação, faça login e tente novamente!");
				return;
			}

			if (error?.response?.data == "That date is in the past!") {
				alert("A data ou horário selecionado está no passado!");
				return;
			}
		}

		// console.log(formatDateTime(date, hourSelect));
		// console.log("-----------------------------");
	};

	return (
		<>
			<AppBar>
				<a href="/about">Sobre</a>
				<a href="/plans">Planos</a>
				<a href="/annuncement">Anuncios e eventos</a>
			</AppBar>
			<main className="w-full lg:max-w-[1110px] m-auto px-[15px]">
				<h2 className="text-xl  text-[var(--gray-opacity-50)] font-semibold mt-[60px] mb-10">
					Agende seu serviço
				</h2>

				<header className="border-[var(--light-green)] border-[2px] rounded-lg px-[15px] py-6 md:px-10 md:pt-[26px] md:pb-9">
					<section className="flex gap-3">
						<div className="mr-[10px] bg-[var(--dark-green)] w-[8px] h-[80px] rounded-[10px]" />

						<div>
							<p className="mb-4 text-[var(--dark-green)] font-semibold text-lg">
								Semanalmente
							</p>
							<p className="font-semibold text-2xl">{dataService?.name}</p>
						</div>
					</section>

					<section className="mt-10 md:mt-[52px] flex flex-col md:flex-row items-start justify-between">
						<div>
							<p className="font-semibold text-lg">Detalhes</p>

							<div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-3">
								<div className="flex items-center gap-1">
									<Users size={28} className="text-[var(--gray-opacity-50)]" />
									<p className="text-base text-[var(--gray-opacity-50)]">
										Clientes - 1 por vez
									</p>
								</div>

								<div className="flex items-center gap-1">
									<Clock size={28} className="text-[var(--gray-opacity-50)]" />
									<p className="text-base text-[var(--gray-opacity-50)]">
										Tempo - {displayDurationService(dataService?.duration)}
									</p>
								</div>
							</div>
						</div>

						<div className="mt-5 md:mt-0">
							<h2 className="text-lg font-semibold">Dias de trabalho</h2>
							<p className="rounded-[4px] bg-[var(--gray-opacity-75)] text-[var(--gray-opacity-50)] px-2 py-1 inline-block text-base">
								{displayExpedientBusiness(
									dataBusinessExpedient?.expediencysInfos
								)}
							</p>
						</div>
					</section>
				</header>

				<section className="w-full flex flex-col lg:flex-row justify-between mt-10 md:mt-[100px] mb-24">
					<div className="w-full lg:max-w-[654px] flex flex-col gap-12">
						<Calendar
							value={date}
							onChange={(e) => setDate(e.value)}
							inline
							// showWeek
							locale="pt-br"
							style={{ width: "100%" }}
						/>

						<div className="w-full hidden max-w-xl lg:block m-auto">
							<BtnFillGreen onclick={() => onSubmit()} width={"full"}>
								Agendar
							</BtnFillGreen>
						</div>
					</div>

					<aside className="mt-10 lg:mt-0">
						<h2 className="font-medium text-lg text-center mb-5">
							HORÁRIOS DISPONÍVEIS
						</h2>

						<div className="flex flex-col md:flex-wrap lg:flex-nowrap items-center gap-4 max-h-[390px] overflow-y-auto">
							{displayHoursAvailable(
								dataBusinessExpedient?.expediencysInfos,
								date
							)?.map((item, index) => (
								<HourAvailable key={index} hour={item} />
							))}
						</div>
					</aside>

					<div className="w-full lg:hidden max-w-xl block mx-auto mt-[60px]">
						<BtnFillGreen onclick={() => onSubmit()} width={"full"}>
							Agendar
						</BtnFillGreen>
					</div>
				</section>
			</main>
			<Footer />
		</>
	);
};

export default CreateAgendamento;
