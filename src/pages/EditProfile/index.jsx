import React, { useState } from "react";
import banner from '../../assets/EditProfile/banner.svg';
import { AppBar, BtnFillGreen } from "../../components";
import imgProfileExemple from "../../assets/profile-exemple.png";
import { Camera } from '@phosphor-icons/react';
import { InputText } from "primereact/inputtext";

const EditProfile = () => {
  const [valueInput1, setValueInput1] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [businessSegment, setBusinessSegment] = useState('');
  const [cpfCnpj, setCpfCnpj] = useState('');


  return (
    <>
        <AppBar>
            <a href="/about">Sobre</a>
            <a href="/plans">Planos</a>
            <a href="/annuncement">Anuncios e eventos</a>
        </AppBar>
        <figure className="max-h-[310px] w-full max-w-[1440px] m-auto">
            <img src={banner} alt="" className="absolute top-[85px] -z-10"/>
        </figure>
        <div className="w-full max-w-[1440px] m-auto flex justify-evenly mt-[130px]">
            {/* LATERAL */}
            <aside className="w-full max-w-[345px] bg-white rounded-[10px] border-[2px] border-[var(--gray-opacity-5)] py-7">
                <figure className="max-w-[180px] max-h-[180px] h-full w-full m-auto relative">
                    <img src={imgProfileExemple} alt="" className="rounded-full object-cover"/>
                    <Camera size={34} className="text-[var(--dark-green)] absolute bottom-0 right-1 z-10 "/>
                </figure>
                <h2 className="text-2xl font-medium text-center mt-9">Lewis Ramilthon</h2>
                <h4 className="text-lg text-[var(--gray-opacity-50)] font-medium text-center mb-16">HubServis</h4>

                <div className="flex justify-between px-10 py-[23px] border-y-[2px] border-[var(--gray-opacity-5)]">
                    <p className="text-[var(--gray-opacity-50)] font-medium">Novos agendamentos</p>
                    <p className="text-xl font-extrabold text-[var(--strong-green)]">35</p>
                </div>
                <div className="flex justify-between px-10 py-[23px] border-b-[2px] border-[var(--gray-opacity-5)]">
                    <p className="text-[var(--gray-opacity-50)] font-medium">Conversas em chat</p>
                    <p className="text-xl font-extrabold text-[var(--strong-green)]">17</p>
                </div>

                <button className="max-w-[240px] border-[2px] border-[var(--gray-opacity-5)] rounded-[7px] py-3 px-4 text-[var(--gray-opacity-50)] font-medium mt-[67px] mx-[50px] mb-[30px]">
                    Verificar gerenciamento
                </button>
            </aside>

            {/* MAIN */}
            <main className="w-full max-w-[804px] bg-white rounded-[10px] border-[2px] border-[var(--gray-opacity-5)] py-[25px] flex flex-col justify-between">
                <div className="flex flex-wrap justify-around">
                    <div>
                        <p className="text-[var(--gray-opacity-50)] font-semibold">Nome</p>
                        <div className="card flex justify-content-center">
                            <InputText value={valueInput1} onChange={(e) => setValueInput1(e.target.value)} />
                        </div>    
                    </div>
                    <div>
                        <p className="text-[var(--gray-opacity-50)] font-semibold">Sobrenome</p>
                        <div className="card flex justify-content-center">
                            <InputText value={sobrenome} onChange={(e) => setSobrenome(e.target.value)} />
                        </div>
                    </div>
                    <div>
                        <p className="text-[var(--gray-opacity-50)] font-semibold mt-[60px]">Telefone</p>
                        <div className="card flex justify-content-center">
                            <InputText value={phone} onChange={(e) => setPhone(e.target.value)} />
                        </div>    
                    </div>
                    <div>
                        <p className="text-[var(--gray-opacity-50)] font-semibold mt-[60px]">Email</p>
                        <div className="card flex justify-content-center">
                            <InputText value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>    
                    </div>
                    <div>
                        <p className="text-[var(--gray-opacity-50)] font-semibold mt-[60px]">Segmento de atuação</p>
                        <div className="card flex justify-content-center">
                            <InputText value={businessSegment} onChange={(e) => setBusinessSegment(e.target.value)} />
                        </div>    
                    </div>
                    <div>
                        <p className="text-[var(--gray-opacity-50)] font-semibold mt-[60px]">CPF/CNPJ</p>
                        <div className="card flex justify-content-center">
                            <InputText value={cpfCnpj} onChange={(e) => setCpfCnpj(e.target.value)} />
                        </div>    
                    </div>
                </div>

                <div className="border-t-[1px] pt-[37px] pl-[28px]">
                    <BtnFillGreen>
                        Atualizar dados
                    </BtnFillGreen>
                </div>
            </main>
        </div>
    </>
  );
};

export default EditProfile;