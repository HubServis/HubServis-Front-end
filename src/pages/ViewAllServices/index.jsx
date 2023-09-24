import React from "react";
import { AppBar, Shortly } from "../../components";

const ViewAllServices = () => {
  return (
    <>
      <AppBar>
        <a href="/about">Sobre</a>
        <a href="/plans">Planos</a>
        <a href="/annuncement">Anuncios e eventos</a>
      </AppBar>
      <Shortly/>
    </>
  );
};

export default ViewAllServices;
