import React, { useEffect, useState } from "react";
import {
	AppBar,
	BtnOutlinedGreen,
	CardService,
	Footer,
} from "../../components";
import { useNavigate } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import NotFound from "../NotFound/NotFound";
import { useURLQuery } from "../../hooks/useURLQuery";

const ViewAllServices = () => {
	const navigation = useNavigate();
	const query = useURLQuery();
	const searchField = query.get("searchField");
	const { data, error, isFetching } = useFetch("/services");
	const titlePage = searchField
		? `Filtro aplicado: ${searchField}`
		: "Todos os serviços";
	let filterServices = [];

	filterServices = data?.filter((service) => {
		return service?.name?.toLowerCase().includes(searchField?.toLowerCase());
	});

	return (
		<>
			<AppBar>
				<a href="/about">Sobre</a>
				<a href="/plans">Planos</a>
				<a href="/annuncement">Anuncios e eventos</a>
			</AppBar>
			<main className="max-w-[1440px] mx-auto mb-4">
				<h3 className="font-bold text-xl mt-5">{titlePage}</h3>

				{isFetching && <h4>Carregando...</h4>}
				{searchField && filterServices?.length == 0 && (
					<div className="flex flex-col items-center">
						<NotFound msg={"Serviço não encontrado!"} />
						<BtnOutlinedGreen onclick={() => navigation("/services")}>
							Ver Todos Os Serviços
						</BtnOutlinedGreen>
					</div>
				)}
				{!searchField && ListServicesUI(data)}
				{(searchField &&
					filterServices?.length > 0) &&
					FilteredServicesUI(filterServices, navigation)}
			</main>
			<Footer />
		</>
	);
};

export default ViewAllServices;

const FilteredServicesUI = (serviceFiltered, navigation) => {
	return (
		<>
			<section className="flex flex-wrap w-full">
				{serviceFiltered?.map((service, index) => (
					<CardService
						key={index}
						id={service?.id}
						serviceName={service?.name}
						price={service?.price}
						rating={service?.averageRating}
						businessName={service?.business?.name}
					/>
				))}
			</section>
			<div className="flex flex-col items-center">
				<BtnOutlinedGreen onclick={() => navigation("/services")}>
					Ver Todos Os Serviços
				</BtnOutlinedGreen>
			</div>
		</>
	);
};

const ListServicesUI = (data) => {
	return (
		<section className="flex flex-wrap w-full justify-between">
			{data?.map((service, index) => (
				<CardService
					key={index}
					id={service?.id}
					serviceName={service?.name}
					price={service?.price}
					rating={service?.averageRating}
					businessName={service?.business?.name}
				/>
			))}
		</section>
	);
};
