import React from "react";
import "../style.css";
import { CardService } from "../../../components";
import { useFetch } from "../../../hooks/useFetch";

const HomeListServices = () => {
	const { data, error, isFetching } = useFetch(
		"/services?limit=15"
	);

	return (
		<>
			{isFetching && (
				<h4 className="text-center text-lg">Buscando serviços...</h4>
			)}
			{error && (
				<h4 className="text-center text-lg">
					Ocorreu um erro inesperado! Tente novamente mais tarde.
				</h4>
			)}
			<div className="cards-all-services">
				{data?.map((service, index) => (
					<CardService
						key={index}
						id={service.id}
						serviceName={service?.name}
						businessName={service?.business?.name}
						price={service?.price}
						rating={service?.averageRating}
					/>
				))}
			</div>
		</>
	);
};

export default HomeListServices;
