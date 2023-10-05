import React from "react";
import "./style.css";
import {
	AppBar,
	CardService,
	BtnOutlinedGreen,
	BtnFillGreen,
	Footer
} from "../../components";
import CategorySelector from './CategorySelector/CategorySelector';
import bgBanner from "../../assets/bg-banner-home.svg";
import ilustration from "../../assets/ilustracao-banner.svg";
import search from "../../assets/search.svg";
import ilutrationGraph from '../../assets/ilustration-graph.png';
import { useNavigate } from "react-router-dom";

const Home = () => {
	const navigation = useNavigate();

	return (
		<>
			<AppBar>
				<a href="/about">Sobre</a>
				<a href="/plans">Planos</a>
				<a href="/annuncement">Anuncios e eventos</a>
			</AppBar>
			<section id="section-banner">
				<div className="banner hidden lg:flex">
					<img src={bgBanner} alt="" id="bg-banner" />
					<div id="container-search">
						<h1>Transforme sua vida com apenas um clique!</h1>
						<h4>Descubra nossos serviços exclusivos!</h4>
						<div className="container-input">
							<span>
								<img src={search} alt="search icon" />
								<input
									type="text"
									className="outline-none"
									placeholder="Pesquisar..."
								/>
							</span>
							<button className="btn-send" type="submit">
								Buscar
							</button>
						</div>
					</div>
					<img src={ilustration} alt="" id="ilustration" />
				</div>
			</section>

			<CategorySelector />

			<hr id="divisor-category-highlights" />

			<section className="section-service px-4 lg:px-10">
				<span className="title-section-box">
					<h2 className="h2-title-section">Destaques</h2>
					<BtnOutlinedGreen
						onclick={() => console.log("view all services button")}
					>
						Ver Todos
					</BtnOutlinedGreen>
				</span>

				<div className="cards flex-wrap">
					<CardService />
					<CardService />
					<CardService />
					<CardService />
				</div>
			</section>

			<hr id="divisor-category-highlights" />

			<section className="section-all-services px-4 lg:px-10">
				<span className="title-section-box">
					<h2 className="h2-title-section">Todos</h2>
					<BtnOutlinedGreen
						onclick={() => navigation("/services")}
					>
						Ver Todos
					</BtnOutlinedGreen>
				</span>
				<div className="cards-all-services">
					<CardService id={"1"}/>
					<CardService id={"1"}/>
					<CardService id={"1"}/>
					<CardService id={"1"}/>
					<CardService id={"1"}/>
					<CardService id={"1"}/>
					<CardService id={"1"}/>
					<CardService id={"1"}/>
				</div>
				
				<p className="text-center text-[var(--gray)] mt-10 cursor-pointer hover:text-black" onClick={() => navigation("/services")}>Ver mais...</p>

				<hr id="divisor-category-highlights" />
				<section className="section-advertising lg:flex">
					<div>
						<h2 className="font-[700] text-4xl">
							Economize tempo com a HubServis
						</h2>
						<p>
							Lorem Ipsum is simply dummy text of the printing and
							typesetting industry. Lorem Ipsum has been the
							industry's standard dummy text ever since the 1500s,
							when an unknown printer took a galley of type and
							scrambled it to make a type specimen book. It has
							survived not only five centuries, but also the leap
							into electronic typesetting, remaining essentially
							unchanged.
						</p>
						<BtnFillGreen
							onclick={() =>
								console.log("view all services button")
							}
						>
							Explorar
						</BtnFillGreen>
					</div>

					<img src={ilutrationGraph} alt="" className="w-full max-w-[50%] hidden lg:flex"/>
				</section>

			</section>
			<Footer/>
		</>
	);
};

export default Home;
