import React, { useEffect, useState } from "react";
import { AppBar, BtnFillGreen, Footer } from "../../../components";
import { Clock, Users } from "@phosphor-icons/react";
import { Calendar } from "primereact/calendar";
import { addLocale } from "primereact/api";

const CreateAgendamento = () => {
  const [date, setDate] = useState(null);

  addLocale("pt-br", {
    firstDayOfWeek: 1,
    showMonthAfterYear: true,
    dayNames: [
      "domingo",
      "segunda",
      "terça",
      "quarta",
      "quinta",
      "sexta",
      "sábado",
    ],
    dayNamesShort: ["dom", "seg", "ter", "qua", "qui", "sex", "sáb"],
    dayNamesMin: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"],
    monthNames: [
      "Janeiro",
      "Fevereiro",
      "Março",
      "Abril",
      "Maio",
      "Junho",
      "Julho",
      "Agosto",
      "Setembro",
      "Outubro",
      "Novembro",
      "Dezembro",
    ],
    monthNamesShort: [
      "jan",
      "fev",
      "mar",
      "abr",
      "mai",
      "jun",
      "jul",
      "ago",
      "set",
      "oct",
      "nov",
      "dec",
    ],
    today: "Hoje",
    clear: "Limpiar",
  });

  useEffect(() => {
    if (date) console.log("Date Selected: ", date);
  }, [date]);

  const HourApiMOCK = [
    {
      hour: "07:30",
      period: "AM",
    },
    {
      hour: "08:00",
      period: "AM",
    },
    {
      hour: "08:30",
      period: "AM",
    },
    {
      hour: "15:00",
      period: "PM",
    },
    {
      hour: "08:00",
      period: "AM",
    },
    {
      hour: "08:30",
      period: "AM",
    },
    {
      hour: "15:00",
      period: "PM",
    },
  ];

  const HourAvailable = ({ hour, period }) => {
    return (
      <p className="text-lg font-semibold text-[var(--black)] px-24 py-5 border-[var(--light-green)] border-[2px] rounded-lg inline-flex cursor-pointer lg:w-full">
        {hour} {period}
      </p>
    );
  };

  return (
    <>
      <AppBar>
        <a href="/about">Sobre</a>
        <a href="/plans">Planos</a>
        <a href="/annuncement">Anuncios e eventos</a>
      </AppBar>

      <main className="w-full lg:max-w-[1110px] m-auto px-[15px]">
        <h2 className="text-xl  text-[var(--gray-opacity-50)] font-semibold mt-[60px] mb-10">
          Agende seu serviço
        </h2>

        <header className="border-[var(--light-green)] border-[2px] rounded-lg px-[15px] py-6 md:px-10 md:pt-[26px] md:pb-9">
          <section className="flex gap-3">
            <div className="mr-[10px] bg-[var(--dark-green)] w-[8px] h-[80px] rounded-[10px]" />

            <div>
              <p className="mb-4 text-[var(--dark-green)] font-semibold text-lg">
                Semanalmente
              </p>
              <p className="font-semibold text-2xl">Corte de Cabelo</p>
            </div>
          </section>

          <section className="mt-10 md:mt-[52px] flex flex-col md:flex-row items-start justify-between">
            <div>
              <p className="font-semibold text-lg">Detalhes</p>

              <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-3">
                <div className="flex items-center gap-1">
                  <Users size={28} className="text-[var(--gray-opacity-50)]" />
                  <p className="text-base text-[var(--gray-opacity-50)]">
                    Clientes - 1 por vez
                  </p>
                </div>

                <div className="flex items-center gap-1">
                  <Clock size={28} className="text-[var(--gray-opacity-50)]" />
                  <p className="text-base text-[var(--gray-opacity-50)]">
                    Tempo - 1 Hora
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-5 md:mt-0">
              <h2 className="text-lg font-semibold">Dias de trabalho</h2>
              <p className="rounded-[4px] bg-[var(--gray-opacity-75)] text-[var(--gray-opacity-50)] px-2 py-1 inline-block text-base">
                Segunda à Sábado
              </p>
            </div>
          </section>
        </header>

        <section className="w-full flex flex-col lg:flex-row justify-between mt-10 md:mt-[100px] mb-24">
          <div className="w-full lg:max-w-[654px] flex flex-col gap-12">
            <Calendar
              value={date}
              onChange={(e) => setDate(e.value)}
              inline
              // showWeek
              locale="pt-br"
              style={{ width: "100%" }}
            />

            <div className="w-full hidden max-w-xl lg:block m-auto">
              <BtnFillGreen onclick={() => {}} width={"full"}>
                Agendar
              </BtnFillGreen>
            </div>
          </div>

          <aside className="mt-10 lg:mt-0">
            <h2 className="font-medium text-lg text-center mb-5">
              HORÁRIOS DISPONÍVEIS
            </h2>

            <div className="flex flex-col md:flex-wrap lg:flex-nowrap items-center gap-4 max-h-[390px] overflow-y-auto">
              {HourApiMOCK.map((item, index) => (
                <HourAvailable
                  key={index}
                  hour={item.hour}
                  period={item.period}
                />
              ))}
            </div>
          </aside>

          <div className="w-full lg:hidden max-w-xl block mx-auto mt-[60px]">
            <BtnFillGreen onclick={() => {}} width={"full"}>
              Agendar
            </BtnFillGreen>
          </div>
        </section>
      </main>
      <Footer/>
    </>
  );
};

export default CreateAgendamento;
