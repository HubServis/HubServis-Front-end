import react from "react";
import { AppBar, BtnOutlinedGreen, CardService, Footer } from "../../components";
import PercImg from "../../assets/Percentage.png";
import Bgbanner from "../../assets/bg-banner-transparent.png";
import { useGetUser } from "../../hooks/useGetUser";

const Annuncement = () => {
  const [user, permissions, error, load] = useGetUser("annuncement");

  return (
    <>
      <AppBar user={user} permission={permissions}>
        <a href="/">Home</a>
        <a href="/about">Sobre</a>
        <a href="/plans">Planos</a>
      </AppBar>

      <section className="flex max-w-[1440px] m-auto bg-gradient-to-r from-[#00E12580] via-[#51F16B80] to-[#00993380] bg-opacity-50 h-96 w-full relative">
        <div className="mix-blend-overlay">
          <img
            src={Bgbanner}
            alt="banner"
            id=""
            className="w-full h-full object-cover absolute"
          />
        </div>
        <div className="object-right text-right p-20 pr-60 mb-6">
          <h4 className="text-white text-3xl font-bold">Hubservis</h4>
          <p className="text-white text-2xl font-bold pt-2">Conference 2024 </p>
          <p className="text-white font-bold pb-8">04/10/2024, São Paulo, SP</p>
          <button
            type="button"
            className="inline-block shadow py-3 w-48 h-12 tracki text-center rounded bg-[#009933] text-white"
          >
            Adquirir Ingresso
          </button>
        </div>
      </section>

      <section className="max-w-[1440px] m-auto px-8 pt-20">
        <span className="flex inline justify-between items-center">
          <h1 className="font-bold text-xl">Ofertas em Destaque</h1>
          <BtnOutlinedGreen onclick={() => console.log("view all services")}>
            Ver Todos
          </BtnOutlinedGreen>
        </span>

        <div className="flex justify-between">
          <CardService />
          <CardService />
          <CardService />
          <CardService />
        </div>
      </section>

      <section className="max-w-[1440px] m-auto p-10 flex justify-between align-center">
        <aside>
          <img src={PercImg} alt="" id="" className="float-left w-1/2" />

          <div className="pt-10 float-right pl-10">
            <h1 className="text-4xl font-bold">Ofertas Especiais</h1>
            <p className="break-words w-1/2 pt-10">
              Aproveite nossas ofertas em diversos segmentos de serviços
              oferecidos
            </p>

            <div className="pt-10">
              <button
                type="button"
                className="inline-block px-5 py-3 font-semibold w-36 h-14 tracki text-center rounded-lg bg-[#009933] text-white"
              >
                Conferir
              </button>
            </div>
          </div>
        </aside>
      </section>

      <Footer/>
    </>
  );
};

export default Annuncement;
