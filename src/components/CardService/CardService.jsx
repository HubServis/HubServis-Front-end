import React, { useState } from "react";
import "./Style.css";
import { Heart, Plus } from "@phosphor-icons/react";
import { Avaliations, Footer } from "../";
import { useNavigate } from "react-router-dom";
import { Rating } from "primereact/rating";

const CardService = ({id}) => {
	const navigator = useNavigate();
	const [like, setLike] = useState(1);
	const rating = Math.floor(Math.random() * (5 - 1) + 1);

	return (
		<>
			<div className="container-card w-full my-5 md:mx-[10px] md:max-w-[45%] lg:max-w-[15.4rem] cursor-pointer" onClick={() => navigator(`/service/${id}`)}>
				<div className="image-container w-full">
					<img
						src="https://img.freepik.com/fotos-gratis/mulher-aplicando-creme-rosto_1303-14312.jpg"
						alt="image card service"
					/>
					<i onClick={() => setLike(!like)}>
						{
							like ? <Heart size={24} color="#97FFA8" weight="fill" className="cursor-pointer"/>
							: <Heart size={24} color="#97FFA8" className="cursor-pointer"/>
						}
						{/* <Heart size={24} color="#97FFA8" className="cursor-pointer"/> */}
					</i>
				</div>
				<p className="business-name">Beleza em Harmonia</p>
				<h3 className="title-service">Estética de Elite</h3>
				<div className="price-and-more">
					<span>
						<p className="price-service">R$50,00</p>
						<Rating value={rating} cancel={false} readOnly />
					</span>
					<div>
						<div className="tooltip">
							<span className="tooltiptext">Ver mais</span>
							<div className="icon-plus">
								<a onClick={() => navigator(`/service/${id}`)}>
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
