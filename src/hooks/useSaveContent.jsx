import { useState } from "react";

const userId = 1;

export const useSaveContent = () => {
  const [data, setData] = useState({
    name: "",
    sobrenome: "",
    phone: "",
    email: "",
    businessSegment: "",
    cpfCnpj: "",
	image: ""
  });

  const sendData = async () => {
    await fetch(import.meta.env.VITE_REACT_APP_SERVER_URL + `user/update/${userId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "multipart/form-data",
      },
      body: JSON.stringify(data),
    });
  };

  return [data, setData, sendData];
};
