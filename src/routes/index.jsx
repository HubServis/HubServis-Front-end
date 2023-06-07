import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import NotFound from "../pages/NotFound/NotFound";
import { useLocation } from "react-router-dom";
import { HashRouter } from "react-router-dom";

const ScrollToTop = () => {
	const { pathname } = useLocation();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);

	return null;
};

const Routers = () => {
	return (
		<HashRouter>
			<ScrollToTop />
			<Routes>
				<Route path="/" element={<Home />} />
				{/* <Route path="/post/:id" element={ <Post/>} /> Passando rotas  */}
				<Route path="*" element={<NotFound />} />
			</Routes>
		</HashRouter>
	);
};

export default Routers;
