import React from "react";
import { AppBar, CardService, Footer } from "../../components";
import { useURLQuery } from "../../hooks/useURLQuery";
import { useFetch } from "../../hooks/useFetch";
import NotFound from "../NotFound/NotFound";
import { useParams } from "react-router-dom";

const ViewServiceCategory = () => {
	const { categoryName } = useParams();
	const query = useURLQuery();
	const categoryNameId = query.get("categoryName");

	if (!categoryNameId || !categoryName) return <NotFound />;

	const { data, error, isFetching } = useFetch(
		`/services/category?categoryNameId=${categoryNameId}`
	);

	return (
		<>
			<AppBar>
				<a href="/">Home</a>
				<a href="/services">Serviços</a>
				<a href="/plans">Planos</a>
				<a href="/annuncement">Anuncios e eventos</a>
			</AppBar>
			<main className="max-w-[1440px] mx-auto mb-4">
				<h3 className="font-bold text-xl mt-5">
					Categoria selecionada: {categoryName}
				</h3>

				{isFetching && <h4 className="text-center my-10">Carregando...</h4>}
				{
					<section
						className={`flex flex-wrap w-full ${
							data?.length > 4 && "justify-between"
						}`}
					>
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
				}
			</main>
			<Footer />
		</>
	);
};

export default ViewServiceCategory;
