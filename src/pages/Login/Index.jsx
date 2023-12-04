import React, { useContext, useState } from "react";
import logoImg from "../../assets/HS-ICON.png";
import { BtnFillGreen, CheckBox } from "../../components";
import { Password } from "primereact/password";
import { InputText } from "primereact/inputtext";
import Ilustration from "../../assets/Login/login-ilustration.svg";
import { Navigate, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
  email: yup
    .string()
    .required("Email é um campo obrigatório.")
    .email("Este email não é valido!"),
  password: yup
    .string()
    .required("Password é um campo obrigatório")
    .min(6, "Informe uma senha de no minimo 6 caracters."),
});

const Login = () => {
  const navigation = useNavigate();
  const { signIn, signed } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const getFormErrorMessage = (name) => {
    return errors[name] ? (
      <small className="p-error">{errors[name].message}</small>
    ) : (
      <small className="p-error">&nbsp;</small>
    );
  };

  const onSubmit = async (data) => {
    const dataUser = {
      email: data.email,
      password: data.password,
    };

    await signIn(dataUser);
  };

  if (signed) return <Navigate to="/" />;

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

          <form onSubmit={handleSubmit(onSubmit)}>
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
                // value={emailValue}
                // onChange={(e) => setEmailValue(e.target.value)}
                {...register("email")}
              />
              {getFormErrorMessage("email")}
            </div>

            <div className="flex flex-col gap-2 mt-3">
              <label
                htmlFor="sua-senha"
                className="text-[#7E8082] text-sm font-medium"
              >
                Sua senha
              </label>
              <Controller
                name="password"
                control={control}
                defaultValue=""
                render={({ field, fieldState }) => (
                  <>
                    <Password
                      inputStyle={{ width: "100%", alignItems: "center" }}
                      feedback={false}
                      toggleMask
                      id={field.name}
                      {...field}
                      inputRef={field.ref}
                    />
                    {getFormErrorMessage(field.name)}
                  </>
                )}
              />
            </div>

          <div className="flex justify-between mt-2 items-center mb-10">
            {/* <div className="flex gap-1 mt-2 items-center">
              <CheckBox />
              <p className="text-[#7E8082] text-sm font-medium">
                Lembrar por 30 dias
              </p>
            </div>

            <p className="text-[var(--dark-green)] text-sm font-medium cursor-pointer">
              Esqueci a senha
            </p> */}
          </div>

          <BtnFillGreen width={"full"} >
            Entrar
          </BtnFillGreen>
          </form>

          <p className="text-[#7E8082] text-sm font-medium mb-10 mt-8">
            Não tem uma conta?{" "}
            <span
              className="text-[var(--dark-green)] text-sm font-medium cursor-pointer"
              onClick={() => navigation("/register")}
            >
              Registre-se
            </span>
          </p>
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

export default Login;
