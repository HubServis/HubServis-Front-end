import React from 'react';
import Ntbanner from "../../assets/NotFound.png"


const NotFound = () => {
    return ( <>
       
        
       
       <main className="grid min-h full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
       <img src={Ntbanner} alt="" id="notfound-banner" className="object-cover h-96 w-192 "/>
          <div className="text-center">
           <h1 className="mt-4 text-xl font-bold tracking-tight text-gray-900 sm:text-5x1">Ooooops !</h1>
           <p className="grid min-w mt-6 text-base leading-6 text-gray-600 break-after-column">
           Parece que ocorreu algum erro acessar 
          essa página e/ou serviço !
          Pedimos perdão pela inconveviência
            </p>          
          </div>
       </main>

    </> );
}
 
export default NotFound;