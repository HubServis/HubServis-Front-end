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
import ViewProfile from "../pages/ViewProfile";
import EditProfile from "../pages/EditProfile";
import Login from "../pages/Login/Index";
import Register from "../pages/Register/Index";
import ViewAllServices from "../pages/ViewAllServices";
import CreateAgendamento from "../pages/AgendamentoClient/CreateAgendamento";
import ViewAgendamento from "../pages/AgendamentoClient/ViewAgendamentos";

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
				<Route path="/login" element={<Login />} />
				<Route path="/register" element={<Register />} />
				<Route index path="/" element={<Home />} />
				<Route path="*" element={<NotFound />} />
				<Route path="/service/:id" element={<ViewService />} />
				{/* future private route */}
				<Route path="/managment" element={<MainManagment />} />

				<Route path="/annuncement" element={<Annuncement />} />
				<Route path="/about" element={<About />} />
				<Route path="/plans" element={<Plans />} />
				
        <Route path="/profile" element={<ViewProfile />} />
				<Route path="/profile/edit" element={<EditProfile />} />
				
        <Route path="/services" element={<ViewAllServices />} />
				<Route path="/service/agenda/:id" element={<CreateAgendamento />} />
				
        <Route path="/agendamentos" element={<ViewAgendamento />} />
			</Routes>
		</BrowserRouter>
	);
};

export default Routers;
