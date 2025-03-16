import React, { useEffect, useState } from "react";
import "./Style.css";
import { Heart, Plus } from "@phosphor-icons/react";
import { useNavigate } from "react-router-dom";
import { changePriceForUi } from "../../utils/changePrice";
import OnlyViewReviews from "../Rating/OnlyViewReviews";
import { transformStrForURL } from "../../utils/stringParse";

const MOCKDATA = {
	serviceName: "Estética de Elite",
	price: "50.00",
	businessName: "Beleza em Harmonia",
	rating: Math.floor(Math.random() * (5 - 1) + 1),
};

const CardService = ({
	id,
	serviceName = MOCKDATA.serviceName,
	price = MOCKDATA.price,
	businessName = MOCKDATA.businessName,
	rating = MOCKDATA.rating,
}) => {
	const navigator = useNavigate();
	const [like, setLike] = useState(0);

	useEffect(() => {
		let verifyWithIdSaved = JSON.parse(localStorage.getItem("savedServices"));
		if (verifyWithIdSaved) {
			verifyWithIdSaved.includes(id) && setLike(1);
		}
	}, [like]);

	const handleSave = (idService) => {
		setLike((state) => !state);
		let servicesSavedStorage = JSON.parse(
			localStorage.getItem("savedServices")
		);

		if (!servicesSavedStorage) {
			localStorage.setItem("savedServices", JSON.stringify([idService]));
			return;
		}

		let newServicesSaved = [...servicesSavedStorage];

		const indexServiceId = newServicesSaved.indexOf(idService);

		if (indexServiceId !== -1) newServicesSaved.splice(indexServiceId, 1);
		else newServicesSaved.push(idService);

		localStorage.setItem("savedServices", JSON.stringify(newServicesSaved));
	};

	return (
		<>
			<div className="container-card w-full my-5 md:mx-[10px] md:max-w-[45%] lg:max-w-[15.4rem] cursor-pointer">
				<div className="image-container w-full">
					<img
						src="https://img.freepik.com/fotos-gratis/mulher-aplicando-creme-rosto_1303-14312.jpg"
						alt="image card service"
						onClick={() =>
							navigator(`/service/${transformStrForURL(serviceName)}/${id}`)
						}
					/>
					<i onClick={() => handleSave(id)}>
						{like ? (
							<Heart
								size={24}
								color="#97FFA8"
								weight="fill"
								className="cursor-pointer"
							/>
						) : (
							<Heart size={24} color="#97FFA8" className="cursor-pointer" />
						)}
						{/* <Heart size={24} color="#97FFA8" className="cursor-pointer"/> */}
					</i>
				</div>
				<p className="business-name">{businessName}</p>
				<h3 className="title-service">{serviceName}</h3>
				<div className="price-and-more">
					<span>
						<p className="price-service">R${changePriceForUi(price)}</p>
						<OnlyViewReviews rating={rating} />
					</span>
					<div>
						<div className="tooltip">
							<span className="tooltiptext">Ver mais</span>
							<div className="icon-plus">
								<a
									onClick={() =>
										navigator(
											`/service/${transformStrForURL(serviceName)}/${id}`
										)
									}
								>
									<Plus size={32} color="#ffffff" />
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default CardService;
