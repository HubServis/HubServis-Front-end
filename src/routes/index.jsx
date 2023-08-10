import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "../pages/Home/Home";
import NotFound from "../pages/NotFound/NotFound";
import ViewService from "../pages/ViewService";
import Plans from '../pages/Plans/Plans';
import Annuncement from '../pages/Annuncement/Annuncement';
import About from '../pages/About/About';

import { MainManagment } from "../pages/Managment";

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
        <Route path="/managment" element={<MainManagment />} /> {/* future private route */}
        <Route path="/annuncement" element={<Annuncement />} />
        <Route path="/about" element={<About />} />
        <Route path="/plans" element={<Plans />} />
        {/* <Route path="/post/:id" element={ <Post/>} /> //Passando rotas  */}
      </Routes>
    </BrowserRouter>
  );
};

export default Routers;
