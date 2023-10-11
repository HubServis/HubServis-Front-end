import React, { useState } from "react";
import {
  AppBar,
  BtnFillGreen,
  Footer,
  OnlyViewReviews,
} from "../../components";
import { useParams } from "react-router-dom";
import ImageSelector from "./components/ImageSelector/ImageSelector";
import { Rating } from "primereact/rating";
import Slider from "./components/Slider/Slider";
import { useFetch } from "../../hooks/useFetch";
import { changePriceForUi } from "../../utils/changePrice";
import LoadingViewService from "./components/LoadingViewService";

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
  const { data, error, isFetching } = useFetch(`/service/${id}`);
  const dataApi = {
    images: mockImagesAPI,
    description: data?.description ?? "Sem descrição...",
    nameService: data?.name ?? "Nome do serviço não informado",
    averageRatingDisplay:
      data?.averageRating.toFixed(1).toString().replace(".", ",") ?? "0,0",
    averageRating: data?.averageRating ?? "0,0",
    totalRatings: data?.totalRatings
      ? `${data?.totalRatings} Avaliações de clientes`
      : "Serviço não avaliado",
    price: data?.price ? changePriceForUi(data.price) : "00,00",
    formOfCharging: "Por par de mão",
    typesPayment: ["pix", "debito", "cartão"],
  };

  const displayTypesPayment = (types) => {
    return types.map((type, index) => {
      if (index == types.length - 1) return ` e ${type}`;
      if (index == types.length - 2) return type;
      return `${type}, `;
    });
  };

  console.log(data);

  if (isFetching)
    return (
      <>
        <AppBar>
          <a href="/service">Sobre</a>
          <a href="/plans">Planos</a>
          <a href="/annuncement">Anuncios e eventos</a>
          <a href="/about">Suporte</a>
        </AppBar>
        <LoadingViewService />
      </>
    );

  return (
    <>
      <AppBar>
        <a href="/service">Sobre</a>
        <a href="/plans">Planos</a>
        <a href="/annuncement">Anuncios e eventos</a>
        <a href="/about">Suporte</a>
      </AppBar>
      <main className="flex justify-center mt-[60px] px-28 mb-40 max-w-[1440px] m-auto">
        <section className="w-full max-w-[50%] pr-[34px]">
          <Slider DataImages={dataApi.images} />
          <article>
            <h2 className="h2-title-section mt-[90px]">Descrição</h2>
            <p className="w-full flex flex-col">
              <span>{dataApi.description}</span>
            </p>
          </article>
        </section>

        <section className="w-full max-w-[50%] pl-[34px]">
          <h1 className="font-[700] text-3xl mb-5">
            {dataApi.nameService.toUpperCase()}
          </h1>

          <div className="flex items-center gap-2">
            <p className="mt-1">{dataApi.averageRatingDisplay}</p>
            <OnlyViewReviews rating={dataApi.averageRating} />
            <p className="text-sm text-[color:var(--strong-green)] my-5 ml-2">
              {dataApi.totalRatings}
            </p>
          </div>
          <hr />

          <div className="flex items-baseline gap-2">
            <p className="font-bold text-[36px] mt-7">R$ {dataApi.price}</p>
            <p className="text-xl mb-8">{dataApi.formOfCharging}</p>
          </div>

          <p className="text-sm mb-3">
            Opção de {displayTypesPayment(dataApi.typesPayment)}
          </p>

          <BtnFillGreen
            width="full"
            onclick={() => console.log("paid service")}
          >
            Agendar serviço/atendimento
          </BtnFillGreen>

          <hr className="mt-[26px] mb-8" />
          <p className="text-lg font-normal mb-6">
            Outros serviços que talvez você se interesse
          </p>
          <ImageSelector />
        </section>
      </main>

      <Footer />
    </>
  );
};

export default ViewService;
