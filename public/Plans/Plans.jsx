import React from 'react'
import { AppBar } from '../../components'
import { useState } from 'react'
import { Leaf } from '@phosphor-icons/react'
import Togglebutton from '../../components/Togglebutton/Togglebutton'


const Plans = () => {

  const logState = state =>{
    console.log("Toggled:", state)
  }

    return(
        <>
           <AppBar>
				    <a href="/service">Sobre</a>
			 	    <a href="/plans">Planos</a>
				    <a href="http://">Anuncios e eventos</a>
				    <a href="http://">Suporte</a>
			     </AppBar>

      <div className="text-center">

        <h1 className="mt-4 text-3xl pt-10 font-bold ">Pronto Para Começar</h1>
        <p>Escolha o plano adequado para suas necessidades</p>
        <div className="pt-8">
         <Togglebutton 
         label="ToggleMe"
         toggled={true}
         onClick={logState}/>
        </div>

        <div className="flex grid grid-cols-3 gap-1 pt-8 border-2 border-gray-400 w-fulls px-16">
          <div className="flex bg-[#F5F3F4] w-64 rounded-3xl">

            <div className="flex inline py-4 px-4">

              
              <div className="px-2">
               <Leaf size={30} color="#00E125"/>
              </div>

              <h1 className="text-xl font-semibold px-2">Gratuito</h1>
            </div>
            
          </div>

          <div className="flex bg-[#F5F3F4] h-96 w-64 justify-center">
            <div>
              <h1 className="text-xl font-semibold">Lite</h1>
            </div>
          </div>

          <div className="bg-[#F5F3F4] h-96 w-64">
            <div>
              <h1 className="text-xl font-semibold">Profissional</h1>
            </div>
          </div>
        </div>

        

      </div>
    </>
    )

}

export default Plans