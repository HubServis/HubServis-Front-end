import react from 'react'
import { Leaf, Check } from "@phosphor-icons/react"

export default function CardPricing() {

    return(
      <div>
        <section className="py-20 items-center justify-center">
          <div className="container px-20 mx-auto">
            <div className="flex">
              <div className="flex w-full mb-8 sm:px-4 md:w-1/2 lg:w-1/3 lg:mb-0 ">
                <div className="flex flex-col p-6 space-y-6 rounded-md shadow-lg sm:p-8 bg-[#F5F3F4]">
                  <div className="space-y-2">
                    <h4 className="text-2xl font-bold">Gratuito</h4>
                  </div>
                  <p className="mt-3 leadi dark:text-gray-400">Perfeito para começar</p>
                  <span className="text-4xl ">R$0
                      <span className="text-sm tracki pl-5">por mês</span>
                    </span>
                    <button type="button" className="inline-block px-5 py-3 font-semibold tracki text-center rounded bg-[#00E125] text-white">Teste Gratis</button>
                    <p className="mt-3 leadi text-black text-left">Incluso:</p>
                    <ul className="flex-1 mb-6 text-black">
                      <li className="flex mb-2 space-x-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="##00E125" viewBox="0 0 256 256">
                        <path d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z"></path>
                      </svg>
                        <span className="text-bold pl-2">Lorem Ipsum</span>
                      </li>
                      <li className="flex mb-2 space-x-2">
                        <svg xmlns="https://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6 text-violet-400">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-09.293a1 1 0 00-1.414-1.414L9 10.586 7.7-7 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                        </svg>
                        <span className="text-bold">Lorem Ipsum</span>
                      </li>
                      <li className="flex mb-2 space-x-2">
                        <svg xmlns="https://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6 text-violet-400">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-09.293a1 1 0 00-1.414-1.414L9 10.586 7.7-7 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                        </svg>
                        <span className="text-bold">Lorem Ipsum</span>
                      </li>
                      <li className="flex mb-2 space-x-2">
                        <svg xmlns="https://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6 text-violet-400">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-09.293a1 1 0 00-1.414-1.414L9 10.586 7.7-7 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                        </svg>
                        <span className="text-bold">Lorem Ipsum</span>
                      </li>
                      <li className="flex mb-2 space-x-2">
                        <svg xmlns="https://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6 text-violet-400">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-09.293a1 1 0 00-1.414-1.414L9 10.586 7.7-7 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                        </svg>
                        <span className="text-bold">Lorem Ipsum</span>
                      </li>
                    </ul>
                </div>
              </div>

              <div className="flex w-full mb-8 sm:px-4 md:w-1/2 lg:w-1/3 lg:mb-0">
                <div className="flex flex-col p-6 space-y-6 rounded-md shadow-lg sm:p-8 bg-[#F5F3F4]">
                  <div className="space-y-2">
                    <h4 className="text-2xl font-bold pr-0">Lite</h4>
                  </div>
                  <p className="mt-3 leadi dark:text-gray-400">Ideal para o dia a dia</p>
                  <span className="text-4xl">R$50
                    <span className="text-sm tracki pl-5">por mês</span>
                  </span>
                  <button type="button" className="inline-block px-5 py-3 font-semibold tracki text-center rounded bg-[#00E125] text-white">Começar</button>
                  <p className="mt-3 leadi text-black text-left">Incluso:</p>
                    <ul className="flex-1 mb-6 text-black">
                      <li className="flex mb-2 space-x-2">
                        <svg xmlns="https://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6 text-violet-400">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-09.293a1 1 0 00-1.414-1.414L9 10.586 7.7-7 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                        </svg>
                        <span className="text-bold">Lorem Ipsum</span>
                      </li>
                      <li className="flex mb-2 space-x-2">
                        <svg xmlns="https://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6 text-violet-400">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-09.293a1 1 0 00-1.414-1.414L9 10.586 7.7-7 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                        </svg>
                        <span className="text-bold">Lorem Ipsum</span>
                      </li>
                      <li className="flex mb-2 space-x-2">
                        <svg xmlns="https://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6 text-violet-400">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-09.293a1 1 0 00-1.414-1.414L9 10.586 7.7-7 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                        </svg>
                        <span className="text-bold">Lorem Ipsum</span>
                      </li>
                      <li className="flex mb-2 space-x-2">
                        <svg xmlns="https://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6 text-violet-400">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-09.293a1 1 0 00-1.414-1.414L9 10.586 7.7-7 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                        </svg>
                        <span className="text-bold">Lorem Ipsum</span>
                      </li>
                      <li className="flex mb-2 space-x-2">
                        <svg xmlns="https://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6 text-violet-400">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-09.293a1 1 0 00-1.414-1.414L9 10.586 7.7-7 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                        </svg>
                        <span className="text-bold">Lorem Ipsum</span>
                      </li>
                    </ul>

                </div>
              </div>

              <div className=" flex w-full mb-8 sm:px-4 md:w-40 lg:w-80 lg:mb-0 ">
                <div className="flex flex-col p-6 space-y-6 rounded shadow sm:p-8 bg-[#F5F3F4]">
                  <div className="space-y-2">
                    <h4 className="text-2xl font-bold">Profissional</h4>
                  </div>
                  <p className="mt-3 leadi dark:text-gray-400">Agilização de crescimento</p>
                  <span className="text-4xl ">R$170
                    <span className="text-sm tracki pl-5">por mês</span>
                  </span>
                  <button type="button" className="inline-block px-5 py-3 font-semibold tracki text-center rounded bg-[#00E125] text-white">Começar</button>
                  <p className="mt-3 leadi text-black text-left">Incluso:</p>
                    <ul className="flex-1 mb-6 text-black">
                      <li className="flex mb-2 space-x-2">
                        <svg xmlns="https://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6 text-violet-400">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-09.293a1 1 0 00-1.414-1.414L9 10.586 7.7-7 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                        </svg>
                        <span className="text-bold">Lorem Ipsum</span>
                      </li>
                      <li className="flex mb-2 space-x-2">
                        <svg xmlns="https://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6 text-violet-400">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-09.293a1 1 0 00-1.414-1.414L9 10.586 7.7-7 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                        </svg>
                        <span className="text-bold">Lorem Ipsum</span>
                      </li>
                      <li className="flex mb-2 space-x-2">
                        <svg xmlns="https://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6 text-violet-400">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-09.293a1 1 0 00-1.414-1.414L9 10.586 7.7-7 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                        </svg>
                        <span className="text-bold">Lorem Ipsum</span>
                      </li>
                      <li className="flex mb-2 space-x-2">
                        <svg xmlns="https://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6 text-violet-400">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-09.293a1 1 0 00-1.414-1.414L9 10.586 7.7-7 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                        </svg>
                        <span className="text-bold">Lorem Ipsum</span>
                      </li>
                      <li className="flex mb-2 space-x-2">
                        <svg xmlns="https://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6 text-violet-400">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-09.293a1 1 0 00-1.414-1.414L9 10.586 7.7-7 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                        </svg>
                        <span className="text-bold">Lorem Ipsum</span>
                      </li>
                    </ul>
                </div>
              </div>

            </div>
          </div>
        </section>
        </div>
    );
}