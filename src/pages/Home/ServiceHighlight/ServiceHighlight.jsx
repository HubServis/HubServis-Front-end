import React from "react";
import { BtnOutlinedGreen, CardService } from "../../../components";
import { useFetch } from "../../../hooks/useFetch";

const ServiceHighlight = () => {
    const { data, isFetching, error } = useFetch(
			"/services/highlight?averageRating=4&limit=6"
		);

	return (
		<>
			<section className="section-service relative w-full bg-[#faf9f9] py-5">
				<span className="title-section-box max-w-[1440px] px-4 lg:px-10 m-auto">
					<h2 className="h2-title-section">Serviços em Destaques</h2>
					<BtnOutlinedGreen
						onclick={() => console.log("view all services button")}
					>
						Ver Todos
					</BtnOutlinedGreen>
				</span>

				<div className="flex flex-wrap max-w-[1440px] px-4 lg:px-10 m-auto">
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
				</div>
			</section>
		</>
	);
};

export default ServiceHighlight;
