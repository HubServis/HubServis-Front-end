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

const Home = () => {
	const navigation = useNavigate();
	const services = [
		{
			id: "f692f8a3-7dd5-4f5c-a108-98eb36ff1d4f",
			created_at: "2023-08-13T19:02:15.000Z",
			name: "Cortes degrade",
			price: "50.00",
			duration: "00:30",
			description: "Cortes degrade em todos os tamanhos e tipos",
			averageRating: 4.6000000000000005,
			totalRatings: 3,
			totalValueRating: 13.8,
			business: {
				id: "a1121156-04a2-4b4a-a2c4-e78d53a7cade",
				created_at: "2023-07-19T17:50:07.000Z",
				name: "Elite dos Cortes",
			},
			categories: [
				{
					id: "1a25b795-94ef-4cee-a8d0-e5d4dca430d3",
					created_at: "2023-08-30T23:24:07.000Z",
					name: "Masculino",
					description: "Serviços e produtos masculinos",
					isPrivated: true,
				},
			],
		},
		{
			id: "b04738d4-d852-4c5d-83ad-676b69d4bc21",
			created_at: "2023-09-02T14:29:13.000Z",
			name: "Progressiva sem formol",
			price: "70.99",
			duration: "01:00",
			description:
				"Progressiva sem formol para mulheres que desejam alcançar tão sonhado cabelo liso",
			averageRating: 4.833333333333333,
			totalRatings: 3,
			totalValueRating: 14.5,
			business: {
				id: "a1121156-04a2-4b4a-a2c4-e78d53a7cade",
				created_at: "2023-07-19T17:50:07.000Z",
				name: "Elite dos Cortes",
			},
			categories: [],
		},
		{
			id: "f5fded86-a544-42b2-bf5a-218d38df0129",
			created_at: "2023-10-12T16:02:09.000Z",
			name: "Massagem Relaxante",
			price: "100.00",
			duration: "01:00",
			description:
				"Uma massagem suave para aliviar o estresse e as tensões musculares.",
			averageRating: 3,
			totalRatings: 1,
			totalValueRating: 3,
			business: {
				id: "68cf108e-76a2-48f5-82c4-10e96045fe52",
				created_at: "2023-05-13T13:21:28.000Z",
				name: "HubServis",
			},
			categories: [],
		},
		{
			id: "908c0106-7115-433d-b7ed-43429fc31a8e",
			created_at: "2023-10-12T16:02:20.000Z",
			name: "Corte de Cabelo",
			price: "60.00",
			duration: "00:45",
			description:
				"Atualização de estilo com corte e modelagem de cabelo por um profissional.",
			averageRating: 0,
			totalRatings: 0,
			totalValueRating: 0,
			business: {
				id: "68cf108e-76a2-48f5-82c4-10e96045fe52",
				created_at: "2023-05-13T13:21:28.000Z",
				name: "HubServis",
			},
			categories: [],
		},
		{
			id: "b688eb59-dc37-45c1-bbe1-a98295144897",
			created_at: "2023-10-12T16:02:28.000Z",
			name: "Manicure e Pedicure",
			price: "80.00",
			duration: "01:30",
			description: "Unhas elegantes com esmaltação e cuidados completos.",
			averageRating: 0,
			totalRatings: 0,
			totalValueRating: 0,
			business: {
				id: "68cf108e-76a2-48f5-82c4-10e96045fe52",
				created_at: "2023-05-13T13:21:28.000Z",
				name: "HubServis",
			},
			categories: [],
		},
		{
			id: "73fe399d-0fbb-44a6-831e-8f8a1a94fe49",
			created_at: "2023-10-12T16:02:35.000Z",
			name: "Tratamento Facial",
			price: "120.00",
			duration: "01:15",
			description: "Um tratamento personalizado para uma pele radiante.",
			averageRating: 0,
			totalRatings: 0,
			totalValueRating: 0,
			business: {
				id: "68cf108e-76a2-48f5-82c4-10e96045fe52",
				created_at: "2023-05-13T13:21:28.000Z",
				name: "HubServis",
			},
			categories: [],
		},
		{
			id: "fc8f1ff1-8c7d-42dd-a775-855511073cff",
			created_at: "2023-10-12T16:03:31.000Z",
			name: "Depilação Completa",
			price: "50.00",
			duration: "00:30",
			description: "Remoção de pelos indesejados em áreas selecionadas.",
			averageRating: 0,
			totalRatings: 0,
			totalValueRating: 0,
			business: {
				id: "cded4e7f-4a56-4f29-9bf6-71dc80782e48",
				created_at: "2023-05-14T18:27:55.000Z",
				name: "Yandex",
			},
			categories: [],
		},
		{
			id: "f719f8ee-50fe-4592-8f3e-f4c0ce6de701",
			created_at: "2023-10-12T16:03:36.000Z",
			name: "Maquiagem Profissional",
			price: "70.00",
			duration: "00:45",
			description:
				"Transforme-se para eventos especiais com uma maquiagem impecável.",
			averageRating: 0,
			totalRatings: 0,
			totalValueRating: 0,
			business: {
				id: "cded4e7f-4a56-4f29-9bf6-71dc80782e48",
				created_at: "2023-05-14T18:27:55.000Z",
				name: "Yandex",
			},
			categories: [],
		},
		{
			id: "2451bfae-9772-4e79-95b5-09b286f41309",
			created_at: "2023-10-12T16:03:42.000Z",
			name: "Extensões de Cílios",
			price: "150.00",
			duration: "02:00",
			description: "Cílios mais volumosos e longos para realçar seus olhos.",
			averageRating: 0,
			totalRatings: 0,
			totalValueRating: 0,
			business: {
				id: "cded4e7f-4a56-4f29-9bf6-71dc80782e48",
				created_at: "2023-05-14T18:27:55.000Z",
				name: "Yandex",
			},
			categories: [],
		},
		{
			id: "1608f8ea-2ac8-4e95-93fd-cb5dc22f3eeb",
			created_at: "2023-10-12T16:03:46.000Z",
			name: "Banho de Hidratação Capilar",
			price: "90.00",
			duration: "01:00",
			description: "Tratamento intensivo para cabelos secos e danificados.",
			averageRating: 0,
			totalRatings: 0,
			totalValueRating: 0,
			business: {
				id: "cded4e7f-4a56-4f29-9bf6-71dc80782e48",
				created_at: "2023-05-14T18:27:55.000Z",
				name: "Yandex",
			},
			categories: [],
		},
		{
			id: "638e6086-14c5-4edb-a5ea-410dcb32fc9b",
			created_at: "2023-10-12T16:03:52.000Z",
			name: "Bronzeamento a Jato",
			price: "45.00",
			duration: "00:30",
			description: "Aparência bronzeada sem exposição ao sol.",
			averageRating: 0,
			totalRatings: 0,
			totalValueRating: 0,
			business: {
				id: "cded4e7f-4a56-4f29-9bf6-71dc80782e48",
				created_at: "2023-05-14T18:27:55.000Z",
				name: "Yandex",
			},
			categories: [],
		},
		{
			id: "bbb25af8-f306-4089-8d9b-38741ee576a7",
			created_at: "2023-10-12T16:04:00.000Z",
			name: "Massagem Terapêutica",
			price: "110.00",
			duration: "01:30",
			description:
				"Terapia de massagem focada em aliviar dores e desconfortos.",
			averageRating: 0,
			totalRatings: 0,
			totalValueRating: 0,
			business: {
				id: "cded4e7f-4a56-4f29-9bf6-71dc80782e48",
				created_at: "2023-05-14T18:27:55.000Z",
				name: "Yandex",
			},
			categories: [],
		},
	];
	const [searchItems, setSearchItems] = useState([]);
	const [searchField, setSearchField] = useState();

	useEffect(() => console.log(searchItems), [searchItems]);

	const handleSearch = () => {
		if (searchField == null) return;
		navigation(`/services?searchField=${searchField}`);

		// const filteredServices = services.filter((service) => {
		// 	return service?.name.toLowerCase().includes(searchField.toLowerCase());
		// });

		// setSearchItems(filteredServices);
	};

	return (
		<>
			<AppBar>
				<a href="/about">Sobre</a>
				<a href="/plans">Planos</a>
				<a href="/annuncement">Anuncios e eventos</a>
			</AppBar>

			<section id="section-banner">
				<div className="banner h-[18.7rem] lg:h-[29.3rem]">
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
						<div className="container-input">
							<span>
								<img src={search} alt="search icon" />
								<input
									onChange={(e) => setSearchField(e.target.value)}
									type="text"
									className="outline-none"
									placeholder="Pesquisar..."
								/>
							</span>
							<button className="btn-send" type="submit" onClick={handleSearch}>
								Buscar
							</button>
						</div>
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
					<h2 className="h2-title-section">Todos</h2>
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

				<hr id="divisor-category-highlights" />
				<section className="section-advertising lg:flex">
					<div>
						<h2 className="font-[700] text-4xl">
							Economize tempo com a HubServis
						</h2>
						<p>
							Lorem Ipsum is simply dummy text of the printing and typesetting
							industry. Lorem Ipsum has been the industry's standard dummy text
							ever since the 1500s, when an unknown printer took a galley of
							type and scrambled it to make a type specimen book. It has
							survived not only five centuries, but also the leap into
							electronic typesetting, remaining essentially unchanged.
						</p>
						<BtnFillGreen
							onclick={() => console.log("view all services button")}
						>
							Explorar
						</BtnFillGreen>
					</div>

					<img
						src={ilutrationGraph}
						alt=""
						className="w-full max-w-[50%] hidden lg:flex"
					/>
				</section>
			</section>
			<Footer />
		</>
	);
};

export default Home;
