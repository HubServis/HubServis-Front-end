import React from 'react';
import './style.css';
import { AppBar, CategorySelector } from '../../components';
import bgBanner from '../../assets/bg-banner-home.svg';
import ilustration from '../../assets/ilustracao-banner.svg';
import search from '../../assets/search.svg';

const Home = () => {
    return (
        <>
            <AppBar>
                <a href="http://">Sobre</a>
                <a href="http://">Planos</a>
                <a href="http://">Anuncios e eventos</a>
                <a href="http://">Suporte</a>
            </AppBar>
            <section id='section-banner'>
                <div className='banner'>
                    <img src={bgBanner} alt="" id="bg-banner"/>
                    <div id="container-search">
                        <h1>Transforme sua vida com apenas um clique!</h1>
                        <h4>Descubra nossos serviços exclusivos!</h4>
                        <div className="container-input">
                            <span>
                                <img src={search} alt="search icon" />
                                <input type="text" placeholder='Pesquisar...'/>
                            </span>
                            <button className='btn-send' type="submit">Buscar</button>
                        </div>
                    </div>
                    <img src={ilustration} alt="" id="ilustration"/>
                </div>


                <hr id="divisor-category-highlights"/>
            </section>
            <CategorySelector/>
        </>
    );
}

export default Home;