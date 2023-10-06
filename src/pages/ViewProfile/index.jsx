import React, { useEffect, useState } from "react";
import { AppBar, Avaliations } from "../../components";
import {
  MapPin,
  Chat,
  Check,
  ClockCounterClockwise,
  User,
} from "@phosphor-icons/react";
import { useFetch } from "../../hooks/useFetch";
import { Rating } from 'primereact/rating'; 

const ViewProfile = () => {
  const {data, error, isFetching} = useFetch('/user/ebca70e6-ea7e-4916-a671-cea7464fecd9');

  const img_profile = userAvatar(data);

  console.log(data);
  console.log("error", error);

  return (
    <>
      <AppBar>
        <a href="/about">Sobre</a>
        <a href="/plans">Planos</a>
        <a href="/annuncement">Anuncios e eventos</a>
      </AppBar>
      <main className="flex w-full gap-24 px-[80px] py-[32px]">
        <aside className="w-full max-w-[340px]">
          <figure className="max-w-[350px] rounded-[10px]">
            <img
              src={img_profile}
              alt="profile image"
              className="w-full h-full object-cover rounded-full"
            />
          </figure>

          <h4 className="mt-11 text-sm font-bold text-[var(--gray-opacity-50)]">
            AVALIAÇÕES
          </h4>

          <article className="mt-9">
            <header className="flex justify-between">
                <h4 className="font-bold text-[var(--gray-opacity-50)]">
                Piloto Mercedez-AMG
                </h4>
                <p className="w-[120px] text-center justify-center bg-[var(--light-green)] rounded-[5px] font-bold text-base text-[#009933]">
                Atual
                </p>
            </header>
            <p className="text-[var(--gray)] mt-2">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>
          </article>

          <article className="mt-9">
            <header className="flex justify-between">
                <h4 className="font-bold text-[var(--gray-opacity-50)]">
                Piloto Mercedez-AMG
                </h4>
                <p className="w-[120px] text-center justify-center bg-[var(--light-green)] rounded-[5px] font-bold text-base text-[#009933]">
                Atual
                </p>
            </header>
            <p className="text-[var(--gray)] mt-2">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>
          </article>
        </aside>

        <section className="w-full">
          <div className="flex gap-[38px]">
            <h1 className="text-2xl font-bold text-[var(--dark-gray)]">
              {data?.name ? data.name : 'Lewis Ramilthon'}
            </h1>
            <div className="flex items-center">
              <MapPin size={32} className="text-[var(--dark-green)]" />
              <p className="text-xl font-medium text-[var(--dark-green)]">
                São Paulo, SP
              </p>
            </div>
          </div>

          <h4 className="text-lg font-semibold text-[var(--dark-green)] mt-[6px]">
            Professional pilot
          </h4>

          <h4 className="mt-11 text-sm font-bold text-[var(--gray-opacity-50)]">
            AVALIAÇÕES
          </h4>

          <div className="flex gap-[10px]">
            <p className="text-[28px] font-medium mt-[5px]">4,0</p>
					  <Rating value={4} cancel={false} readOnly onChange={(e) => setRating(e.value)} />
          </div>

          <section className="flex w-full justify-between mt-10">
            <div className="flex items-center gap-[10px]">
              <Chat size={32} className="text-[var(--dark-green)]" />
              <p className="font-medium text-[var(--dark-green)]">
                Enviar mensagens
              </p>
            </div>

            <div className="inline-flex items-center gap-[10px] px-10 py-2 bg-[var(--light-green)] rounded-[10px] cursor-pointer">
              <Check size={32} className="text-[var(--dark-green)]" />
              <p className="text-[var(--dark-green)] font-medium">Contatos</p>
            </div>

            <div className="flex items-center gap-[10px]">
              <ClockCounterClockwise
                size={32}
                className="text-[var(--dark-green)]"
              />
              <p className="text-[var(--dark-green)]">Atualizar dados</p>
            </div>
          </section>

          <div className="border-b-2 mt-[45px]">
            <div className="inline-flex items-end border-b-2 border-[var(--strong-green)] pb-[5px]">
              <User size={32} className="text-[var(--strong-green)]" />
              <p className="text-[var(--strong-green)]">Sobre</p>
            </div>
          </div>

          <h4 className="font-bold text-[var(--gray-opacity-50)] mt-14">
            INFORMAÇÕES ESSENCIAIS/DE CONTATO
          </h4>

          <div className="flex gap-4 my-3">
            <p className="font-semibold text-[var(--dark-gray)]">Telefone:</p>
            <p className="text-[var(--gray)] font-medium">(79) 2386-7533</p>
          </div>

          <div className="flex gap-4 my-3">
            <p className="font-semibold text-[var(--dark-gray)]">E-mail:</p>
            <p className="text-[var(--gray)] font-medium">
              { data?.email ? data.email : 'ramilthonbmw@gmail.com'}
            </p>
          </div>

          <div className="flex gap-4 my-3">
            <p className="font-semibold text-[var(--dark-gray)]">
              Segmento de atuação:
            </p>
            <p className="text-[var(--gray)] font-medium">
              Piloto profissional
            </p>
          </div>

          <div className="flex gap-4 my-3">
            <p className="font-semibold text-[var(--dark-gray)]">CPF/CNPJ:</p>
            <p className="text-[var(--gray)] font-medium">746.652.352-87</p>
          </div>

          <button className="mt-[42px] bg-[var(--light-green)] w-full max-w-[390px] py-4 rounded-[10px] text-[var(--dark-green)] font-bold cursor-pointer">
            EDITAR MEUS DADOS
          </button>
        </section>
      </main>
    </>
  );
};

export default ViewProfile;

const userAvatar = (data) => {
  if(data?.img_profile) {
    
    return data.img_profile;
  }else if(data){
    const initialsName = [data.name.split(' ')[0][0], data.name.split(' ').at(-1)[0]];

    return `https://ui-avatars.com/api/?name=${initialsName[0]}+${initialsName[1]}&format=svg&background=97FFA8`;
  }
  
  return `https://ui-avatars.com/api/?name=Ramilthon&format=svg&background=97FFA8`;
}