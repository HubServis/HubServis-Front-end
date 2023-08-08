import React from "react";
import { AppBar } from "../../components";
import Toggle from "../../components/Togglebutton/Togglebutton";
import { Leaf } from "@phosphor-icons/react";
import CardPricing from "./CardPricing/CardPricing";

const Plans = () => {
  return (
    <>
      <AppBar>
        <a href="/about">Sobre</a>
        <a href="/plans">Planos</a>
        <a href="/annuncement">Anuncios e eventos</a>
        <a href="http://">Suporte</a>
      </AppBar>

      <div className="text-center justify-center">
        <h1 className="mt-4 text-3xl pt-10 font-bold ">Pronto Para Começar</h1>
        <p>Escolha o plano adequado para suas necessidades</p>
        <Toggle />
        <CardPricing />
      </div>
    </>
  );
};

export default Plans;
