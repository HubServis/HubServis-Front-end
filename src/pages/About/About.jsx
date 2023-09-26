import react from "react";
import { AppBar, BtnFillGreen, Footer } from "../../components";
import AboutImg from "../../assets/about/About.png";
import {
  CurrencyCircleDollar,
  ChartBar,
  UserCircleGear,
  Table,
} from "@phosphor-icons/react";
import search from "../../assets/search.svg";

const About = () => {
  return (
    <>
      <AppBar>
        <a href="/">Home</a>
        <a href="/plans">Planos</a>
        <a href="/annuncement">Anuncios e eventos</a>
      </AppBar>

      <section className="grid">
        <div className="w-full h-[300px] bg-[url('assets/about/banner.png')] bg-contain">
          <div className="object-center text-center pt-20 mb-6">
            <h4 className="text-white text-3xl">Tem alguma Duvida?</h4>
            <div className="p-4 w-full sm:max-w-lg sm:mx-auto h-10">
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
          </div>
        </div>
      </section>

      <div className="grid grid-cols-4 justify-between pl-10 pt-20">
        <div className="hover:max-w-[272px] rounded-[10px] border hover:border-2 border-[var(--light-green)] hover:border-[var(--strong-green)] max-w-[270px] min-h-[300px] pt-7 pb-4 px-11 group/icon">
          <div className="flex justify-center content-center">
            <UserCircleGear
              size={50}
              className="text-[var(--light-green)] group-hover/icon:text-[var(--strong-green)]"
            />
          </div>
          <h1 className="text-center font-bold text-lg mt-5 mb-3">
            Minha conta
          </h1>
          <p className=" text-center text-base text-[var(--dark-gray)] font-medium">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </p>
        </div>

        <div className="hover:max-w-[272px] rounded-[10px] border hover:border-2 border-[var(--light-green)] hover:border-[var(--strong-green)] max-w-[270px] min-h-[300px] pt-7 pb-4 px-11 group/icon">
          <div className="flex justify-center content-center">
            <CurrencyCircleDollar
              size={50}
              className="text-[var(--light-green)] group-hover/icon:text-[var(--strong-green)]"
            />
          </div>
          <h1 className="text-center font-bold text-lg mt-5 mb-3">
            Financeiro
          </h1>
          <p className=" text-center text-base text-[var(--dark-gray)] font-medium">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </p>
        </div>

        <div className="hover:max-w-[272px] rounded-[10px] border hover:border-2 border-[var(--light-green)] hover:border-[var(--strong-green)] max-w-[270px] min-h-[300px] pt-7 pb-4 px-11 group/icon">
          <div className="flex justify-center content-center">
            <ChartBar
              size={50}
              className="text-[var(--light-green)] group-hover/icon:text-[var(--strong-green)]"
            />
          </div>
          <h1 className="text-center font-bold text-lg mt-5 mb-3">
            Status da Empresa
          </h1>
          <p className=" text-center text-base text-[var(--dark-gray)] font-medium">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </p>
        </div>

        <div className="hover:max-w-[272px] rounded-[10px] border hover:border-2 border-[var(--light-green)] hover:border-[var(--strong-green)] max-w-[270px] min-h-[300px] pt-7 pb-4 px-11 group/icon">
          <div className="flex justify-center content-center">
            <Table
              size={50}
              className="text-[var(--light-green)] group-hover/icon:text-[var(--strong-green)]"
            />
          </div>
          <h1 className="text-center font-bold text-lg mt-5 mb-3">
            Status da Empresa
          </h1>
          <p className=" text-center text-base text-[var(--dark-gray)] font-medium">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </p>
        </div>
      </div>

      <div className="flex justify-between mx-16 gap-4 items-center m-12">
        <div className="w-[50%]">
          <h2 className="text-3xl font-bold mb-[54px]">Sobre nós</h2>
          <p className="text-base mb-14">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
          <BtnFillGreen onclick={() => {}}>CONHECER</BtnFillGreen>
        </div>
        <img
          src={AboutImg}
          alt="aboutimg"
          id="about-banner"
          className="max-w-[50%]"
        />
      </div>

      <Footer/>
    </>
  );
};

export default About;

/* 

                        <img src={AboutImg} alt="aboutimg" id="about-banner" className="float-right w-1/2"/>
    <div className="content-center pt-20 pl-10 inline-block">
                    <div className="h-64 w-192 p-4 ">
                        <h1 className="font-bold pl-10 text-3xl">Sobre Nós</h1>

                        


                        <p className="flex-1 text-md pt-10 pl-10 w-1/2 break-words inline-block ">
                            <span className="break-words">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                               Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                               when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                               It has survived not 
                               only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                         </span>
                        </p>
                       

                        
                    </div>
                    
                </div>

*/
