import { useForm, Controller } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRef } from "react";

import * as yup from "yup";
import { api } from "../services/api";

const schema = yup.object().shape({
  email: yup
    .string()
    .email("Email invalido!")
    .required("O campo email é necessário!"),
  password: yup
    .string()
    .min(4, "A senha deve ter 6 caracteres ou mais")
    .required("A senha é necessária!"),
});

const useLogin = () => {
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
  // const { setLogin } = useContext(AuthContext);

  const getFormErrorMessage = (name) => {
    return errors[name] ? (
      <small className="p-error">{errors[name].message}</small>
    ) : (
      <small className="p-error">&nbsp;</small>
    );
  };

  const sendData = async (data) => {
    try {
      const response = await api.post("/login", data);

      if (!response.data) throw new Error(response.data);

      return navigate("/");
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
    control,
    toast,
    register,
    handleSubmit,
    sendData,
    navigate,
    getFormErrorMessage,
    Controller,
  ];
};

export default useLogin;
