import React from "react";
import "./Style.css";
import { Heart, Plus } from "@phosphor-icons/react";
import { Avaliations } from "../";

const CardService = () => {
	return (
		<div className="container-card">
			<div className="image-container">
				<img
					src="https://img.freepik.com/fotos-gratis/mulher-aplicando-creme-rosto_1303-14312.jpg"
					alt="image card service"
				/>
				<i>
					<Heart size={24} color="#97FFA8" />
				</i>
			</div>
			<p className="business-name">Beleza em Harmonia</p>
			<h3 className="title-service">Estética de Elite</h3>
			<div className="price-and-more">
				<span>
					<p className="price-service">R$50,00</p>
					<Avaliations />
				</span>
				<div>
					<div className="icon-plus">
						<Plus size={32} color="#ffffff" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default CardService;
