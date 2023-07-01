import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import NotFound from "../pages/NotFound/NotFound";
import { useLocation } from "react-router-dom";
import ViewService from "../pages/ViewService";
import TestePage from "../pages/TestePage/TestePage";
import SchedulingManagement from "../pages/Scheduling-management/components/Scheduling-Management";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const Routers = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/service/:id" element={<ViewService />} />
        <Route path="/teste" element={<TestePage />} />
        <Route path="/managment" element={<SchedulingManagement />} />
        {/* <Route path="/post/:id" element={ <Post/>} /> //Passando rotas  */}
      </Routes>
    </BrowserRouter>
  );
};

export default Routers;
