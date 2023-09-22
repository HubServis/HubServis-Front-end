import React, { useState } from "react";
import logoImg from "../../assets/HS-ICON.png";
import { BtnFillGreen, CheckBox, EmailInput } from "../../components";
import { Password } from "primereact/password";
import { InputText } from "primereact/inputtext";
import Ilustration from '../../assets/Login/login-ilustration.svg';

const Register = () => {
  const [passwordValue, setPasswordValue] = useState("");

  return (
    <>
      <main className="flex">
        <section className="w-full md:min-w-[50%] px-10">
          <div className="flex items-center gap-2 mt-14">
            <img
              src={logoImg}
              alt="logo image"
              className="max-w-[78px] max-h-[78px]"
            />
            <h1 className="text-[var(--dark-green-2)] text-[26px] font-extrabold">
              HubServis
            </h1>
          </div>

          <h2 className="text-[26px] text-[var(--dark-green)] font-extrabold mt-14">
            Entrar
          </h2>

          <p className="text-sm font-medium text-[var(--gray-opacity-25)] mt-4">
            Bem vindo de volta! Por favor, insira seus dados.
          </p>

          <div className="flex flex-col gap-2 mt-8">
            <label
              htmlFor="seu-nome"
              className="text-[#7E8082] text-sm font-medium"
            >
              Qual seu Nome?
            </label>
            <InputText id="seu-nome" placeholder="ramilthon bmw" />
          </div>

          <div className="flex flex-col gap-2 mt-8">
            <label
              htmlFor="seu-email"
              className="text-[#7E8082] text-sm font-medium"
            >
              Seu email
            </label>
            <InputText id="seu-email" placeholder="ramilthon@gmail.com" />
          </div>

          <div className="flex justify-between gap-3">
            <div className="flex flex-col gap-2 mt-8 w-full max-w-[50%]">
              <label
                htmlFor="seu-nome-usuario"
                className="text-[#7E8082] text-sm font-medium"
              >
                Qual seu nome de usuário?
              </label>
              <InputText id="seu-nome-usuario" placeholder="ramilthon_bmw" />
            </div>

            <div className="flex flex-col gap-2 mt-8 w-full max-w-[50%]">
              <label
                htmlFor="seu-cpf"
                className="text-[#7E8082] text-sm font-medium"
              >
                Qual seu CPF?
              </label>
              <InputText id="seu-cpf" placeholder="xxx.xxx.xxx-xx" />
            </div>
          </div>

          <div className="flex flex-col gap-2 mt-8">
            <label
              htmlFor="sua-senha"
              className="text-[#7E8082] text-sm font-medium"
            >
              Sua senha
            </label>
            <Password inputStyle={{width: "100%", alignItems: "center"}} value={passwordValue} onChange={(e) => setPasswordValue(e.target.value)} feedback={false} toggleMask/>
          </div>

          <div className="flex justify-between mt-2 items-center mb-10">
            <div className="flex gap-1 mt-2 items-center">
              <CheckBox />
              <p className="text-[#7E8082] text-sm font-medium">
                Lembrar por 30 dias
              </p>
            </div>

            <p className="text-[var(--dark-green)] text-sm font-medium cursor-pointer">
              Esqueci a senha
            </p>
          </div>

          <BtnFillGreen width={"full"} onclick={() => {}}>
            Entrar
          </BtnFillGreen>

          <p className="text-[#7E8082] text-sm font-medium mb-10 mt-8">
            Não tem uma conta?{" "}
            <span className="text-[var(--dark-green)] text-sm font-medium cursor-pointer">
              Registre-se
            </span>
          </p>
        </section>

        <section className="hidden lg:flex w-full max-w-[50%] bg-[var(--dark-green-2)] min-h-screen flex justify-center">
          <img src={Ilustration} alt="Ilustration" className="max-w-lg max-h-lg m-auto"/>
        </section>
      </main>
    </>
  );
};

export default Register;
