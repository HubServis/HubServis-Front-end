import React from "react";
import { AppBar, Footer } from "../../../components";
import calendarCheck from "../../../assets/Managment/CalendarCheckGreen.svg";
import pencil from "../../../assets/Managment/pencil.svg";
import trash from "../../../assets/Managment/trash.svg";
import { CheckBox } from "../../../components";
import { Money, ShoppingCart, X } from "@phosphor-icons/react";

const ViewAgendamento = () => {
  return (
    <>
      <AppBar>
        <a href="/about">Sobre</a>
        <a href="/plans">Planos</a>
        <a href="/annuncement">Anuncios e eventos</a>
      </AppBar>
      <main className="w-full lg:max-w-[1110px] m-auto px-[15px]">
        <h2 className="text-xl  text-[var(--gray-opacity-50)] font-semibold mt-[60px] mb-10">
          Meus Agendamentos
        </h2>

        <header className="border-[var(--light-green)] border-[2px] rounded-lg px-[15px] py-6 md:px-10 md:pt-[26px] md:pb-9">
          <section className="flex gap-3">
            <div className="mr-[10px] bg-[var(--dark-green)] w-[8px] h-[80px] rounded-[10px]" />

            <div>
              <p className="mb-4 text-[var(--dark-green)] font-semibold text-lg">
                Total de Agendamentos
              </p>
              <p className="font-semibold text-2xl">6 Agendamentos</p>
            </div>
          </section>
        </header>

        <section className="w-full flex flex-col justify-between mt-10 md:mt-[100px] mb-24 py-4 px-2 md:p-11 border-[var(--light-green)] border-[2px] rounded-lg">
            <div className="md:hidden">
              <p className="text-lg font-semibold text-[var(--gray-opacity-50)] text-center w-[200px] m-auto">Mais informações sobre os serviços</p>
            </div>
            <div className="hidden md:flex justify-between">
                <p className="text-lg font-semibold text-[var(--gray-opacity-50)] w-[200px] ml-12">Serviço</p>
                <p className="text-lg font-semibold text-[var(--gray-opacity-50)] w-[200px]">Dia e Horário</p>
                <p className="text-lg font-semibold text-[var(--gray-opacity-50)] w-[200px]">Preço</p>
                <p></p>
            </div>
            <div className="mt-5 flex flex-col gap-8 max-h-[500px] overflow-y-auto">
                <RowAgendamentos/>
                <RowAgendamentos/>
                <RowAgendamentos/>
                <RowAgendamentos/>
                <RowAgendamentos/>
                <RowAgendamentos/>
            </div>
        </section>
      </main>
      <Footer/>
    </>
  );
};

export default ViewAgendamento;

const RowAgendamentos = () => {
  return (
    <div className="py-[14px] px-[24px] flex flex-col md:flex-row md:justify-between md:items-center border-2 rounded-[8px] border-[var(--light-green)]">
      <div className="flex items-center">
        <div className="mr-[10px] bg-[var(--dark-green)] w-[5px] h-[45px] rounded-[10px]" />
        <div className="flex items-center gap-[6px] w-[200px]">
          <p>Corte de Cabelo</p>
        </div>
      </div>

      <div className="flex items-center gap-2 w-[250px]">
        <img src={calendarCheck} alt="Calendar Check" />
        <p>20/07/2023 - 07:00 AM</p>
      </div>

      <div className="w-full flex justify-between md:max-w-[34%]">
        <div className="flex items-center gap-2 w-[150px]">
          <Money size={32} className="text-[var(--dark-green)]" />
          <p>R$ 29,90</p>
        </div>

        <div className="flex gap-[10px] items-center">
          <ShoppingCart
            size={32}
            weight="bold"
            className="text-[var(--dark-green)] cursor-pointer"
          />
          <X
            size={32}
            weight="bold"
            className="text-[var(--medium-red)] cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};
