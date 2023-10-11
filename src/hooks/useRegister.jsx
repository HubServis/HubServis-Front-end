import { useState } from "react";

// import yup from "yup";

// const schema = yup.object().shape({
//   name: yup.string().required("Seu nome é necessário!"),
//   email: yup
//     .string()
//     .email("Email invalido!")
//     .required("O campo email é necessário!"),
//   username: yup.string().required("O campo username é necessário!"),
//   cpfcnpj: yup.string().required("O campo CPF é necessário"),
//   password: yup.string().required("A senha é necessária!"),
//   confirmPassword: yup.string().required("É necessário confirmar a senha!"),
// });

export const useRegister = () => {
  const [registerData, setRegisterData] = useState({
    name: "",
    email: "",
    username: "",
    cpfcnpj: "",
    password: "",
    confirmPassword: "",
  });

  // const validateInput = (input) => {
  //   const result = schema.isValid(input);
  //
  //   if (!result) {
  //     return result;
  //   } else true;
  // };

  const sendData = async () => {
    // const isValid = validateInput();

 //    if (!isValid) {
	// 	console.log(isValid);
	//
	// 	return isValid;
	// }

    await fetch(import.meta.env.VITE_REACT_APP_SERVER_URL + "create", {
      method: "POST",
      headers: {
        "Content-Type": "multipart/form-data",
      },
      body: JSON.stringify(registerData),
    });
  };

  return [registerData, setRegisterData, sendData];
};
