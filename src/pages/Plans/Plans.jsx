import React from "react";
import { AppBar } from "../../components";
import Toggle from "../../components/Togglebutton/Togglebutton";
import { Check } from "@phosphor-icons/react";
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
        {/* <div className="px-[80px]">
          <table className="w-full">
            <thead className="w-full my-4">
              <tr className="w-full">
                <th className="pl-5 w-2/4 text-left">Planos</th>
                <th className="w-1/8">Gratuito</th>
                <th className="w-1/8">Planos</th>
                <th className="w-1/8">Planos</th>
              </tr>
            </thead>
            <tbody className="w-full">
              <tr>
                <td className="text-left pl-5 w-2/4 ">Lorem Ipsum</td>
                <td className="w-1/8"><Check className="m-auto"/></td>
                <td className="w-1/8"><Check className="m-auto"/></td>
                <td className="w-1/8"><Check className="m-auto"/></td>
              </tr>
            </tbody>
          </table>
        </div> */}
      </div>
    </>
  );
};

export default Plans;
