import React from "react";
import "./style.css";
import {
	AppBar,
	CategorySelector,
	CardService,
	BtnOutlinedGreen,
	BtnFillGreen
} from "../../components";
import bgBanner from "../../assets/bg-banner-home.svg";
import ilustration from "../../assets/ilustracao-banner.svg";
import search from "../../assets/search.svg";
import ilutrationGraph from '../../assets/ilustration-graph.png';

const Home = () => {
	return (
		<>
			<AppBar>
				<a href="http://">Sobre</a>
				<a href="http://">Planos</a>
				<a href="http://">Anuncios e eventos</a>
				<a href="http://">Suporte</a>
			</AppBar>

			<section id="section-banner">
				<div className="banner">
					<img src={bgBanner} alt="" id="bg-banner" />
					<div id="container-search">
						<h1>Transforme sua vida com apenas um clique!</h1>
						<h4>Descubra nossos serviços exclusivos!</h4>
						<div className="container-input">
							<span>
								<img src={search} alt="search icon" />
								<input type="text" placeholder="Pesquisar..." />
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

			<section className="section-service">
				<span className="title-section-box">
					<h2 className="font-[600]">Destaques</h2>
					<BtnOutlinedGreen
						onclick={() => console.log("view all services button")}
					>
						Ver Todos
					</BtnOutlinedGreen>
				</span>

				<div className="cards">
					<CardService />
					<CardService />
					<CardService />
					<CardService />
				</div>
			</section>

			<hr id="divisor-category-highlights" />

			<section className="section-all-services">
				<span className="title-section-box">
					<h2 className="font-[600]">Todos</h2>
					<BtnOutlinedGreen
						onclick={() => console.log("view all services button")}
					>
						Ver Todos
					</BtnOutlinedGreen>
				</span>
				<div className="cards-all-services">
					<CardService />
					<CardService />
					<CardService />
					<CardService />
					<CardService />
					<CardService />
					<CardService />
					<CardService />
				</div>
				<hr id="divisor-category-highlights" />
				<section className="section-advertising">
					<div>
						<h2>Economize tempo com a HubServis</h2>
						<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
						<BtnFillGreen
							onclick={() => console.log("view all services button")}
						>
							Explorar
						</BtnFillGreen>
					</div>

					<img src={ilutrationGraph} alt="" />
				</section>
			</section>
		</>
	);
};

export default Home;
