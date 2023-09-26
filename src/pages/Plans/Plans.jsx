import React from "react";
import { AppBar, Footer } from "../../components";
import Toggle from "../../components/Togglebutton/Togglebutton";
import { Check } from "@phosphor-icons/react";
import CardPricing from "./CardPricing/CardPricing";

const Plans = () => {
  return (
    <>
      <AppBar>
        <a href="/">Home</a>
        <a href="/about">Sobre</a>
        <a href="/annuncement">Anuncios e eventos</a>
      </AppBar>

      <div className="text-center justify-center mb-10">
        <h1 className="mt-4 text-3xl pt-10 font-bold ">Pronto Para Começar</h1>
        <p>Escolha o plano adequado para suas necessidades</p>
        <Toggle />
        <CardPricing />
      </div>
      <Footer/>
    </>
  );
};

export default Plans;
