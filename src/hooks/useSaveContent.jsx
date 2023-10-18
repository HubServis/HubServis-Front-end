import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { cpf as cpfValidator } from "cpf-cnpj-validator";
import { useRef } from "react";

import * as yup from "yup";
import { api } from "../services/api";

const schema = yup.object().shape({
  name: yup.string().required("Seu nome é necessário!"),
  surName: yup.string().notRequired(),
  image: yup.string().notRequired(),
  phone: yup.string().notRequired(),
  businessSegment: yup.string().notRequired(),
  email: yup
    .string()
    .email("Email invalido!")
    .required("O campo email é necessário!"),
  cpfcnpj: yup
    .string()
    .min(11, "Informe um numero de cpf válido!")
    .required("O campo CPF é necessário")
    .test("cpfcnpj", "Cpf Inválido!", (cpf) => {
      if (cpf && cpf.length < 14) return true;

      return cpfValidator.isValid(cpf);
    }),
});

let userId = "ebca70e6-ea7e-4916-a671-cea7464fecd9";

export const useSaveContent = () => {
  const toast = useRef(null);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
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

  const sendData = async (data, image) => {
    try {
      const response = await api.patch(`/user/update/${userId}`, {
        ...data,
        image: { name: image.name, content: image.contentData, format: image.format },
      });

      // const result = await response.json;
      console.log(response);

      // if (!response.ok) throw new Error(result);

      toast.current.show({
        severity: "info",
        summary: "info",
        detail: "Usuário criado, redirecionando para tela de login",
        life: 3000,
      });

      // return setTimeout(() => navigate("/login"), 3000);
    } catch (err) {
      toast.current.show({
        severity: "error",
        summary: "error",
        detail: err.message,
        life: 3000,
      });
    }
  };

  return [register, handleSubmit, toast, sendData, getFormErrorMessage];
};
