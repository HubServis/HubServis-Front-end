import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Toast } from "primereact/toast";
import * as yup from "yup";
import { BtnFillGreen } from "../../components";
import { InputText } from "primereact/inputtext";

const schema = yup.object().shape({
  email: yup
    .string()
    .email("Email invalido!")
    .required("O campo email é necessário!"),
});

const ResetPassword = () => {
  const toast = useRef(null);
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onBlur",
    reValidateMode: "onChange",
  });

  const getFormErrorMessage = (name) => {
    return errors[name] ? (
      <small className="p-error">{errors[name].message}</small>
    ) : (
      <small className="p-error">&nbsp;</small>
    );
  };

  const sendData = async (data) => {
    console.log("SEND DATA => ", data);
  };

  return (
    <>
      <Toast ref={toast}></Toast>
      <main className="max-w-xl m-auto items-center h-screen">
        <form onSubmit={handleSubmit(sendData)}>
          <div className="flex flex-col gap-2 mt-8">
            <label
              htmlFor="seu-email"
              className="text-[#7E8082] text-sm font-medium"
            >
              Informe um email para a redefinição de senha
            </label>
            <InputText
              id="seu-email"
              placeholder="seu melhor email..."
              {...register("email")}
            />
            {getFormErrorMessage("email")}
          </div>

          <BtnFillGreen width={"full"}>Enviar</BtnFillGreen>
        </form>
      </main>
    </>
  );
};

export default ResetPassword;
