import react from 'react'
import { AppBar } from '../../components'
import AboutImg from '../../assets/About.png'
import { CurrencyCircleDollar, ChartBar, UserCircleGear, Table} from '@phosphor-icons/react'
import { IconContext } from '@phosphor-icons/react'

const About = () =>{

    return(
        <>
                <AppBar>
				    <a href="/service">Sobre</a>
			 	    <a href="/plans">Planos</a>
				    <a href="/annuncement">Anuncios e eventos</a>
				    <a href="http://">Suporte</a>
			     </AppBar>

                 <section className="grid">
                    <div className="w-full h-60 bg-[#00E125]">
                        <div className="object-center text-center pt-20 mb-6">
                          <h4 className="text-white text-3xl">Tem alguma Duvida?</h4>
                          <div className="p-4 w-full sm:max-w-lg sm:mx-auto h-10">
                            <div className="flex rounded-md overflow-hidden w-160">
                                <input type="text" className="flex-1 w-196 rounded-md rounded-r-none focus:outline-none" />
                                <button className="bg-green-800 text-white px-4 text-md font-semibold py-4 rounded-r-md">Pesquisar</button>
                            </div>
                          </div>
                        </div>
                    </div>
                 </section>

                 <div className="grid grid-cols-4 gap-5 justify-between pl-10 pt-20">
                    <div className="rounded rounded-r-none border hover:border-2 border-green-300  hover:border-green-500 w-50 h-160">
                        <IconContext.Provider
                           value={{ color: 'green', size: '50px',}}
                        >
                            <div className="flex justify-center content-center ">
                                <UserCircleGear />
                            </div>
                        </IconContext.Provider>
                        
                        <h1 className="text-center font-bold text-sm">Minha Conta</h1>
                        <p className="break-words px-6 pt-2 text-center text-sm">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                    </div>

                    <div className="rounded rounded-r-none border hover:border-2 border-green-300  hover:border-green-500 w-50 h-160">
                        <IconContext.Provider
                           value={{ color: 'green', size: '50px',}}
                        >
                            <div className="flex justify-center content-center ">
                                <CurrencyCircleDollar />
                            </div>
                        </IconContext.Provider>
                        
                        <h2 className="text-center font-bold text-sm">Financeiro</h2>
                        <p className="break-words px-6 pt-2 text-center text-sm inline-flex">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                    </div>

                    <div className="rounded rounded-r-none border hover:border-2 border-green-300  hover:border-green-500 w-50 h-160">
                        <IconContext.Provider
                           value={{ color: 'green', size: '50px',}}
                        >
                            <div className="flex justify-center content-center ">
                                <ChartBar />
                            </div>
                        </IconContext.Provider>
                        <h3 className="text-center font-bold text-sm">Status da Empresa</h3>
                        <p className="break-words px-6 pt-2 text-center text-sm">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                    </div>

                    <div className="rounded rounded-r-none border hover:border-2 border-green-300  hover:border-green-500 w-50 h-160">
                        
                        <IconContext.Provider
                           value={{ color: 'green', size: '50px',}}
                        >
                            <div className="flex justify-center content-center ">
                                <Table />
                            </div>
                        </IconContext.Provider>

                        <h4 className="text-center font-bold text-sm">Gerenciamento</h4>
                        <p className="break-words px-6 pt-2 text-center text-sm">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                    </div>
                 </div>

                 <div className="bg-red-200 ">

                    <div className="flex flex-row gap-20 bg-purple-700 w-1/2">
                     <div className="pl-20 pt-40 text-3xl font-bold bg-orange-500 w-1/2">
                        <h1>Sobre nós</h1>
                     </div>
                     <img src={AboutImg} alt="aboutimg" id="about-banner" className="w-48 h-48 bg-green-100 pt-10"/>
                    </div>
                    

                    <div className="flex inline-block flex-row grid gap-10">
                        <div className="w-1/3">
                         <aside>
                         <p className="pl-20 pt-10 break-words bg-gray-100 border border-5">
                         Lorem Ipsum is simply dummy text of the printing 
                         and typesetting industry. Lorem Ipsum has been the 
                         industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, 
                         remaining essentially unchanged.
                         </p>
                        
                         </aside>
                        </div>
                        
                    </div>

                    <div className="flex justify-center content-center float-right bg-green-200">
                                         
                    </div>

                 </div>


                 
                 
                 
        </>
    )
}

export default About

/* 

                        <img src={AboutImg} alt="aboutimg" id="about-banner" className="float-right w-1/2"/>
    <div className="content-center pt-20 pl-10 inline-block">
                    <div className="h-64 w-192 p-4 ">
                        <h1 className="font-bold pl-10 text-3xl">Sobre Nós</h1>

                        


                        <p className="flex-1 text-md pt-10 pl-10 w-1/2 break-words inline-block ">
                            <span className="break-words">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                               Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                               when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                               It has survived not 
                               only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                         </span>
                        </p>
                       

                        
                    </div>
                    
                </div>

*/