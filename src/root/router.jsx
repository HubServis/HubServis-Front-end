import React from 'react';
import {
    BrowserRouter,
    Route,
    Routes
  } from "react-router-dom";
import Home from '../pages/Home/Home';
import NotFound from '../pages/NotFound/NotFound';

const Routers = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route  path="/" element={ <Home/> }/>
                {/* <Route path="/post/:id" element={ <Post/>} /> Passando rotas  */}
                <Route path="*" element={ <NotFound/> }/>
            </Routes>
      </BrowserRouter>
    )
}

export default Routers;