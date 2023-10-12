import React, { createContext, useEffect, useRef, useState } from "react";
import { Navigate } from "react-router-dom";
import { api } from "../services/api";
import { Toast } from "primereact/toast";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const toast = useRef(null);
  const [user, setUser] = useState(null);

  const showError = (error) => {
    toast.current.show({
      severity: "error",
      summary: "Error",
      detail: error.response?.data ? error.response.data : "Erro desconhecido!",
      life: 3000,
    });
  };

  const ErrorMessage = (error, showMessage) => showMessage(error);

  useEffect(() => {
    const loadingStorageData = () => {
      const storageToken = localStorage.getItem("@Auth:token");

      if (storageToken && storageToken) {
        setUser(storageToken);
      }
    };

    loadingStorageData();
  }, []);

  const signIn = async ({ email, password }) => {
    try {
      const response = await api.post("/login", { email, password });

      if (response.data.error) {
        // alert(response.data.error);
        ErrorMessage(response.data.error, showError);
      } else {
        console.log(response.data);
        setUser(response.data.token);

        api.defaults.headers.Authotization = response.data.token; // coloca com header authorization padrão o token do usuário

        localStorage.setItem('@Auth:token', response.data.token);
      }
    } catch (error) {
      console.log(error);
      ErrorMessage(error, showError);
    }
  };

  const singOut = () => {
    localStorage.clear();
    setUser(null);
    return <Navigate to="/login" />;
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        signIn,
        singOut,
        signed: !!user,
      }}
    >
      <Toast ref={toast} />
      {children}
    </AuthContext.Provider>
  );
};