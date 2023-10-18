import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { cpf as cpfValidator } from "cpf-cnpj-validator";
import { useRef } from "react";

import * as yup from "yup";
import { api } from "../services/api";

const schema = yup.object().shape({
  name: yup.string().required("Seu nome é necessário!"),
  email: yup
    .string()
    .email("Email invalido!")
    .required("O campo email é necessário!"),
  username: yup.string().required("O campo username é necessário!"),
  cpfcnpj: yup
    .string()
    .min(11, "Informe um numero de cpf válido!")
    .required("O campo CPF é necessário")
    .test("cpfcnpj", "Cpf Inválido!", (cpf) => {
      if (cpf && cpf.length < 14) return true;

      return cpfValidator.isValid(cpf);
    }),
  password: yup
    .string()
    .min(6, "A senha deve ter 6 caracteres ou mais")
    .required("A senha é necessária!"),
  confirmPassword: yup
    .string()
    .required("É necessário confirmar a senha!")
    .oneOf([yup.ref("password"), null], "A senhas devem ser iguais!"),
});

const useRegister = () => {
  const toast = useRef(null);
  const navigate = useNavigate();
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
    try {
      const response = await api.post("/user", JSON.stringify(data));

      const result = await response.json();

      if (!response.ok) throw new Error(result);

      toast.current.show({
        severity: "info",
        summary: "info",
        detail: "Usuário criado, redirecionando para tela de login",
        life: 3000,
      });

      return setTimeout(() => navigate("/login"), 3000);
    } catch (err) {
      toast.current.show({
        severity: "error",
        summary: "error",
        detail: err.message,
        life: 3000,
      });
    }
  };

  return [
    register,
    handleSubmit,
    control,
    toast,
    sendData,
    getFormErrorMessage,
  ];
};

export default useRegister;
