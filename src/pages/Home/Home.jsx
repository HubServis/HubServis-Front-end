import React, { useEffect, useState } from "react";
import "./style.css";
import {
	AppBar,
	CardService,
	BtnOutlinedGreen,
	BtnFillGreen,
	Footer,
} from "../../components";
import CategorySelector from "./CategorySelector/CategorySelector";
import bgBanner from "../../assets/bg-banner-home.svg";
import ilustration from "../../assets/ilustracao-banner.svg";
import search from "../../assets/search.svg";
import ilutrationGraph from "../../assets/ilustration-graph.png";
import { useNavigate } from "react-router-dom";
import HomeListServices from "./HomeListServices";
import ServiceHighlight from "./ServiceHighlight/ServiceHighlight";
import { InputText } from "primereact/inputtext";
import { MagnifyingGlass } from "@phosphor-icons/react";

import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
	search: yup.string()
});

const Home = () => {
	const navigation = useNavigate();

	 const {
			register,
			handleSubmit,
			formState: { errors },
		} = useForm({
			resolver: yupResolver(schema),
		});

	const handleSearch = (data) => {
		if (data?.search == null) return;
		navigation(`/services?searchField=${data.search}`);
	};

	return (
		<>
			<AppBar>
				<a href="/services">Serviços</a>
				<a href="/about">Sobre</a>
				{/* <a href="/plans">Planos</a> */}
				<a href="/annuncement">Anuncios e eventos</a>
				<a href="/saved">Favoritos</a>
			</AppBar>

			<section id="section-banner">
				<div className="banner pb-4 md:pb-0 md:h-[18.7rem] lg:h-[29.3rem]">
					<img
						src={bgBanner}
						alt=""
						id="bg-banner"
						className="w-full h-full rounded-2xl"
					/>
					<div className="lg:max-w-[500px] mt-[64px] mx-[20px] md:mx-[60px] lg:mr-0">
						<h1 className="text-4xl font-bold lg:text-left">
							Transforme sua vida com apenas um clique!
						</h1>
						<h4 className="text-2xl text-[#009933]">
							Descubra nossos serviços exclusivos!
						</h4>
						<form
							onSubmit={handleSubmit(handleSearch)}
							className="container-input"
						>
							<span className="p-input-icon-left">
								<MagnifyingGlass size={22} color="#30883F"/>
								<InputText
									placeholder="Encontre o seviço que deseja"
									{...register("search")}
								/>
							</span>
						</form>
					</div>
					<img
						src={ilustration}
						alt=""
						id="ilustration"
						className="hidden lg:flex"
					/>
				</div>
			</section>

			<CategorySelector />

			<hr id="divisor-category-highlights" />

			<ServiceHighlight />

			<hr id="divisor-category-highlights" />

			<section className="section-all-services px-4 lg:px-10">
				<span className="title-section-box">
					<h2 className="h2-title-section">Todos os Serviços</h2>
					<BtnOutlinedGreen onclick={() => navigation("/services")}>
						Ver Todos
					</BtnOutlinedGreen>
				</span>

				<HomeListServices />

				<p
					className="text-center text-[var(--gray)] mt-10 cursor-pointer hover:text-black"
					onClick={() => navigation("/services")}
				>
					Ver mais...
				</p>
			</section>
			<Footer />
		</>
	);
};

export default Home;
