import React, { useEffect, useState } from "react";
import {
	AppBar,
	BtnOutlinedGreen,
	CardService,
	Footer,
	Shortly,
} from "../../components";
import { useLocation, useNavigate } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import NotFound from "../NotFound/NotFound";

function useQuery() {
	return new URLSearchParams(useLocation().search);
}

export { useQuery };

const ViewAllServices = () => {
	const navigation = useNavigate();
	const query = useQuery();
	const { data, error, isFetching } = useFetch("/services");
	const [filteredServices, setFilteredServices] = useState([]);
	const searchField = query.get("searchField");

	useEffect(() => {
		if (searchField && data) {
			const filterServices = data?.filter((service) => {
				return service?.name.toLowerCase().includes(searchField.toLowerCase());
			});

			setFilteredServices(filterServices);
		}
	}, [data]);

	const changeTitlePage = () => {
		return searchField
			? `Filtro aplicado: ${searchField}`
			: "Todos os Serviços";
	};

	const titlePage = changeTitlePage();

	console.log("filtre", filteredServices);

	return (
		<>
			<AppBar>
				<a href="/about">Sobre</a>
				<a href="/plans">Planos</a>
				<a href="/annuncement">Anuncios e eventos</a>
			</AppBar>
			<main className="max-w-[1440px] m-auto">
				<h3 className="font-bold text-xl mt-5">{titlePage}</h3>

				{isFetching && <h4>Carregando...</h4>}

				{searchField && filteredServices.length == 0 && (
					<div className="flex flex-col items-center">
						<NotFound msg={"Serviço não encontrado!"} />
						<BtnOutlinedGreen onclick={() => navigation("/services")}>
							Ver Todos Os Serviços
						</BtnOutlinedGreen>
					</div>
				)}

				{searchField &&
					filteredServices.length > 0 &&
					FilteredServicesUI(filteredServices)}

				{!searchField && data && ListServicesUI(data)}
			</main>
			<Footer />
		</>
	);
};

export default ViewAllServices;

const FilteredServicesUI = (serviceFiltered) => {
	return (
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
