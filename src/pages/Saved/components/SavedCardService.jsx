import React, { useEffect, useState } from "react";
import "./Style.css";
import { Heart, Plus } from "@phosphor-icons/react";
import { useNavigate } from "react-router-dom";
import { changePriceForUi } from "../../../utils/changePrice";
import { transformStrForURL } from "../../../utils/stringParse";
import { OnlyViewReviews } from "../../../components";
import { Checkbox } from "primereact/checkbox";

const MOCKDATA = {
	serviceName: "Estética de Elite",
	price: "50.00",
	businessName: "Beleza em Harmonia",
	rating: Math.floor(Math.random() * (5 - 1) + 1),
};

const CardSavedService = ({
	id,
	serviceName = MOCKDATA.serviceName,
	price = MOCKDATA.price,
	businessName = MOCKDATA.businessName,
	rating = MOCKDATA.rating,
	checkedList,
	setCheckedList,
}) => {
	const navigator = useNavigate();
	const isChecked = checkedList.includes(id);


	const onChecked = (id) => {
		let newCheckedList = [...checkedList];

		const idSavedIndex = newCheckedList.indexOf(id);
		if (idSavedIndex !== -1) {
			newCheckedList.splice(idSavedIndex, 1);
		} else {
			newCheckedList.push(id);
		}

		setCheckedList(newCheckedList);
	};

	return (
		<>
			<div className="container-card w-full my-5 md:mx-[10px] md:max-w-[45%] lg:max-w-[15.4rem] cursor-pointer">
				<Checkbox
					className="checkbox"
					onChange={(e) => {
						onChecked(id);
					}}
					checked={isChecked}
				/>
				<div className="image-container w-full">
					<img
						src="https://img.freepik.com/fotos-gratis/mulher-aplicando-creme-rosto_1303-14312.jpg"
						alt="image card service"
						onClick={() =>
							navigator(`/service/${transformStrForURL(serviceName)}/${id}`)
						}
					/>
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

export default CardSavedService;
