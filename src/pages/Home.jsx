import React from 'react';
import './style.css';
import { AppBar } from '../components';
import bgBanner from '../assets/bg-banner-home.svg';
import ilustration from '../assets/ilustracao-banner.svg';
import search from '../assets/search.svg';

const Home = () => {
    return (
        <>
            <AppBar/>
            <section>
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
            </section>
        </>
    );
}

export default Home;