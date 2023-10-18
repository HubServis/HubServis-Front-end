import { BtnFillGreen } from "../../components";
import { Password } from "primereact/password";
import { InputMask } from "primereact/inputmask";
import { InputText } from "primereact/inputtext";
import Ilustration from "../../assets/Login/login-ilustration.svg";
import { Controller } from "react-hook-form";

import { useNavigate } from "react-router-dom";
import useRegister from "../../hooks/useRegister";

import logoImg from "../../assets/HS-ICON.png";
import { Toast } from "primereact/toast";

const Register = () => {
  const navigation = useNavigate();

  const [
    register,
    handleSubmit,
    control,
    toast,
    sendData,
    getFormErrorMessage,
  ] = useRegister();

  return (
    <>
      <Toast ref={toast}></Toast>

      <main className="flex">
        <section className="w-full md:min-w-[50%] px-10 pb-8">
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
            Registre-se
          </h2>

          <p className="text-sm font-medium text-[var(--gray-opacity-25)] mt-4">
            Para começar, é importante que nos informe seus dados pessoais.
          </p>

          <div className="flex flex-col gap-2 mt-8">
            <label
              htmlFor="seu-nome"
              className="text-[#7E8082] text-sm font-medium"
            >
              Qual seu Nome?
            </label>
            <InputText
              id="seu-nome"
              placeholder="ramilthon bmw"
              {...register("name")}
            />
            {getFormErrorMessage("name")}
          </div>

          <div className="flex flex-col gap-2 mt-8">
            <label
              htmlFor="seu-email"
              className="text-[#7E8082] text-sm font-medium"
            >
              Seu email
            </label>
            <InputText
              id="seu-email"
              placeholder="ramilthon@gmail.com"
              {...register("email")}
            />
            {getFormErrorMessage("email")}
          </div>

          <div className="flex flex-col sm:flex-row justify-between gap-3">
            <div className="flex flex-col gap-2 mt-8 w-full sm:max-w-[50%]">
              <label
                htmlFor="seu-nome-usuario"
                className="text-[#7E8082] text-sm font-medium"
              >
                Qual seu nome de usuário?
              </label>
              <InputText
                id="seu-nome-usuario"
                placeholder="ramilthon_bmw"
                {...register("username")}
              />
              {getFormErrorMessage("username")}
            </div>

            <div className="flex flex-col gap-2 mt-8 w-full sm:max-w-[50%]">
              <label
                htmlFor="seu-cpf"
                className="text-[#7E8082] text-sm font-medium"
              >
                Qual seu CPF?
              </label>
              <InputMask
                id="seu-cpf"
                mask="999.999.999-99"
                placeholder="xxx.xxx.xxx-xx"
                {...register("cpfcnpj")}
              />
              {getFormErrorMessage("cpfcnpj")}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-between gap-3">
            <div className="flex flex-col gap-2 mt-8 w-full sm:max-w-[50%]">
              <label
                htmlFor="sua-senha"
                className="text-[#7E8082] text-sm font-medium"
              >
                Qual a sua senha
              </label>
              <Controller
                name="password"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <>
                    <Password
                      inputStyle={{ width: "100%", alignItems: "center" }}
                      feedback={false}
                      toggleMask
                      placeholder="xxxxxxxxxxxx"
                      name="password"
                      id={field.name}
                      {...field}
                      inputRef={field.ref}
                    />
                    {getFormErrorMessage(field.name)}
                  </>
                )}
              />
            </div>

            <div className="flex flex-col gap-2 mt-8 w-full sm:max-w-[50%]">
              <label
                htmlFor="sua-senha"
                className="text-[#7E8082] text-sm font-medium"
              >
                Confirme a sua senha.
              </label>
              <Controller
                name="confirmPassword"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <>
                    <Password
                      inputStyle={{ width: "100%", alignItems: "center" }}
                      feedback={false}
                      toggleMask
                      placeholder="xxxxxxxxxxxx"
                      name="confirmPassword"
                      id={field.name}
                      {...field}
                      inputRef={field.ref}
                    />
                    {getFormErrorMessage("confirmPassword")}
                  </>
                )}
              />
            </div>
          </div>

          <p className="text-[#7E8082] text-sm font-medium mb-3 mt-8">
            Já tem uma conta?{" "}
            <span
              className="text-[var(--dark-green)] text-sm font-medium cursor-pointer"
              onClick={() => navigation("/login")}
            >
              Faça login
            </span>
          </p>

          <BtnFillGreen width={"full"} onclick={handleSubmit(sendData)}>
            Registrar
          </BtnFillGreen>
        </section>

        <section className="hidden lg:flex w-full max-w-[50%] bg-[var(--dark-green-2)] min-h-screen flex justify-center">
          <img
            src={Ilustration}
            alt="Ilustration"
            className="max-w-lg max-h-lg m-auto"
          />
        </section>
      </main>
    </>
  );
};

export default Register;
