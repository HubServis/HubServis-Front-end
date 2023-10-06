import React, { useState } from "react";
import { AppBar, Avaliations, BtnFillGreen, Footer } from "../../components";
import { useParams } from "react-router-dom";
import ImageSelector from "./components/ImageSelector/ImageSelector";
import { Rating } from "primereact/rating";
import Slider from './components/Slider/Slider';


const mockImagesAPI = [
	{
		thumbnailImgSrc:
		  "https://plus.unsplash.com/premium_photo-1669675935887-fdfb81d37cc7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1888&q=80",
		img_src:
		  "https://plus.unsplash.com/premium_photo-1669675935887-fdfb81d37cc7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1888&q=80",
		alt: "mulher cortando cabelo",
	  },
	  {
		thumbnailImgSrc:
		  "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1888&q=80",
		img_src:
		  "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1888&q=80",
		alt: "mulher cortando cabelo",
	  },
];

const ViewService = () => {
  const { id } = useParams();
  const [rating, setRating] = useState(null);

  return (
    <>
      <AppBar>
        <a href="/service">Sobre</a>
        <a href="http://">Planos</a>
        <a href="http://">Anuncios e eventos</a>
        <a href="http://">Suporte</a>
      </AppBar>
      <main className="flex justify-center mt-[60px] px-28 mb-40">
        <section className="w-full max-w-[50%] pr-[34px]">
          <Slider DataImages={mockImagesAPI}/>
          <article>
            <h2 className="h2-title-section mt-[90px]">Descrição</h2>
            <p className="w-full flex flex-col">
              <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
                delectus, quo dicta repellat autem dolor tempore fuga optio
                ipsum libero velit. Repellat porro labore culpa quisquam fugiat
                architecto eveniet sed!
              </span>
              <span>
                Magni dolor natus impedit quisquam voluptate iure perferendis
                reprehenderit, error molestias nisi non quia ipsam cupiditate
                sequi doloremque repudiandae, laborum voluptas deserunt neque
                excepturi. Praesentium assumenda aspernatur asperiores hic
                corporis?
              </span>
            </p>
          </article>
        </section>

        <section className="w-full max-w-[50%] pl-[34px]">
          <h1 className="font-[700] text-3xl mb-10">
            Diva Unhas Decoradas Manicure
          </h1>

          <Rating
            value={rating}
            cancel={false}
            onChange={(e) => setRating(e.value)}
          />

          <p className="text-xl font-bold text-[color:var(--strong-green)] my-10">
            56 avaliações sobre esse serviço
          </p>
          <hr />
          <p className="font-bold text-[36px] my-7">R$ 39,99</p>
          <p className="text-2xl mb-8">Por par de mão</p>
          <p className="text-base font-bold mb-[50px]">Opção de pix e debito</p>
          <BtnFillGreen
            width="full"
            onclick={() => console.log("view all services button")}
          >
            Agendar serviço/atendimento
          </BtnFillGreen>
          <hr className="mt-[26px] mb-8" />
          <p className="text-xl font-normal mb-10">
            Outros serviços que talves você se interesse
          </p>
          <ImageSelector />
        </section>
      </main>

      <Footer />
    </>
  );
};

export default ViewService;
