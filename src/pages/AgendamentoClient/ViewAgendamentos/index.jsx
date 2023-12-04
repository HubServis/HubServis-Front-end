import React, { useContext } from "react";
import { AppBar, Footer } from "../../../components";
import { useFetch } from "../../../hooks/useFetch";
import RowAgendamentos from "./components/rowAgendamentos";
import { AuthContext } from "../../../context/AuthContext";

const ViewAgendamento = () => {
	const { data, error, isFetching } = useFetch("/appointments/user", {
		headers: {
			Authorization: localStorage.getItem("@Auth:token")
		},
	});

	if (isFetching) {
		return (
			<>
				<AppBar>
					<a href="/about">Sobre</a>
					<a href="/plans">Planos</a>
					<a href="/annuncement">Anuncios e eventos</a>
				</AppBar>
				<h2 className="text-center mt-10 font-bold text-xl">
					Carregando dados...
				</h2>
			</>
		);
	}

	return (
		<>
			<AppBar>
				<a href="/about">Sobre</a>
				<a href="/plans">Planos</a>
				<a href="/annuncement">Anuncios e eventos</a>
			</AppBar>
			<main className="w-full lg:max-w-[1110px] m-auto px-[15px]">
				<h2 className="text-xl  text-[var(--gray-opacity-50)] font-semibold mt-[60px] mb-10">
					Meus Agendamentos
				</h2>

				<header className="border-[var(--light-green)] border-[2px] rounded-lg px-[15px] py-6 md:px-10 md:pt-[26px] md:pb-9">
					<section className="flex gap-3">
						<div className="mr-[10px] bg-[var(--dark-green)] w-[8px] h-[80px] rounded-[10px]" />

						<div>
							<p className="mb-4 text-[var(--dark-green)] font-semibold text-lg">
								Total de Agendamentos
							</p>
							<p className="font-semibold text-2xl">{data?.length > 0 ? `${data.length} Agendamentos` : '0 Agendamentos'}</p>
						</div>
					</section>
				</header>

				<section className="w-full flex flex-col justify-between mt-10 md:mt-[100px] mb-24 py-4 px-2 md:p-11 border-[var(--light-green)] border-[2px] rounded-lg">
					<div className="md:hidden">
						<p className="text-lg font-semibold text-[var(--gray-opacity-50)] text-center w-[200px] m-auto">
							Mais informações sobre os serviços
						</p>
					</div>
					<div className="hidden md:flex justify-between">
						<p className="text-lg font-semibold text-[var(--gray-opacity-50)] w-[200px] ml-12">
							Serviço
						</p>
						<p className="text-lg font-semibold text-[var(--gray-opacity-50)] w-[200px]">
							Dia e Horário
						</p>
						<p className="text-lg font-semibold text-[var(--gray-opacity-50)] w-[200px]">
							Preço
						</p>
						<p></p>
					</div>
					<div className="mt-5 flex flex-col gap-8 max-h-[500px] overflow-y-auto">
						{
              data?.length != 0 ? (
                data?.map((appointment, index) => <RowAgendamentos key={index} appointmentInfos={appointment}/>)
              ) : (
                <>
                  <h2>Não há agendamentos feitos!</h2>
                </>
              )
            }
					</div>
				</section>
			</main>
			<Footer />
		</>
	);
};

export default ViewAgendamento;
