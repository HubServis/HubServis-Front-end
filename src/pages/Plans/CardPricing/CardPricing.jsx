import react from "react";
import { Leaf, Check, X, TelevisionSimple, Lightning } from "@phosphor-icons/react";
import { BtnFillGreen } from "../../../components";

export default function CardPricing() {
  return (
    <div>
      <section className="flex justify-around">
        {/* GRATUITO */}
        <div className="w-[290px] h-full flex flex-col p-6 rounded-md bg-[#F5F3F4]">
          <div className="flex gap-3">
            <Leaf size={32} className="text-[var(--strong-green)]" />
            <h4 className="text-2xl font-bold">Gratuito</h4>
          </div>

          <p className="mt-3 text-left text-gray-400">Perfeito para começar</p>

          <span className="text-4xl text-left flex items-end my-5">
            <p>R$0</p>
            <span className="text-sm text-gray-400 pl-2 pb-1">por mês</span>
          </span>

          <BtnFillGreen width={"full"}>Teste grátis</BtnFillGreen>

          <p className="mt-10 text-lg text-left font-semibold mb-4">Incluso:</p>

          <ul>
            <li className="flex mb-2 items-center">
              <Check
                size={18}
                weight="bold"
                className="text-[var(--strong-green)]"
              />
              <span className="text-bold pl-2">Lorem Ipsum</span>
            </li>
            <li className="flex mb-2 items-center">
              <Check
                size={18}
                weight="bold"
                className="text-[var(--strong-green)]"
              />
              <span className="text-bold pl-2">Lorem Ipsum</span>
            </li>
            <li className="flex mb-2 items-center">
              <X
                size={18}
                weight="bold"
                className="text-[var(--strong-green)]"
              />
              <span className="text-bold pl-2 text-gray-400">Lorem Ipsum</span>
            </li>
            <li className="flex mb-2 items-center">
              <X
                size={18}
                weight="bold"
                className="text-[var(--strong-green)]"
              />
              <span className="text-bold pl-2 text-gray-400">Lorem Ipsum</span>
            </li>
          </ul>
        </div>

        {/* LITE */}
        <div className="w-[290px] h-full flex flex-col p-6 rounded-md bg-[#F5F3F4]">
          <div className="flex gap-3">
            <TelevisionSimple size={32} className="text-[var(--strong-green)]" />
            <h4 className="text-2xl font-bold">Lite</h4>
          </div>

          <p className="mt-3 text-left text-gray-400">Ideal para o dia a dia</p>

          <span className="text-4xl text-left flex items-end my-5">
            <p>R$57</p>
            <span className="text-sm text-gray-400 pl-2 pb-1">por mês</span>
          </span>

          <BtnFillGreen width={"full"}>Começar</BtnFillGreen>

          <p className="mt-10 text-lg text-left font-semibold mb-4">Incluso:</p>

          <ul>
            <li className="flex mb-2 items-center">
              <Check
                size={18}
                weight="bold"
                className="text-[var(--strong-green)]"
              />
              <span className="text-bold pl-2">Lorem Ipsum</span>
            </li>
            <li className="flex mb-2 items-center">
              <Check
                size={18}
                weight="bold"
                className="text-[var(--strong-green)]"
              />
              <span className="text-bold pl-2">Lorem Ipsum</span>
            </li>
            <li className="flex mb-2 items-center">
              <Check
                size={18}
                weight="bold"
                className="text-[var(--strong-green)]"
              />
              <span className="text-bold pl-2">Lorem Ipsum</span>
            </li>
            <li className="flex mb-2 items-center">
              <Check
                size={18}
                weight="bold"
                className="text-[var(--strong-green)]"
              />
              <span className="text-bold pl-2">Lorem Ipsum</span>
            </li>
            <li className="flex mb-2 items-center">
              <X
                size={18}
                weight="bold"
                className="text-[var(--strong-green)]"
              />
              <span className="text-bold pl-2 text-gray-400">Lorem Ipsum</span>
            </li>
            <li className="flex mb-2 items-center">
              <X
                size={18}
                weight="bold"
                className="text-[var(--strong-green)]"
              />
              <span className="text-bold pl-2 text-gray-400">Lorem Ipsum</span>
            </li>
          </ul>
        </div>

        {/* PROFISSIONAL */}
        <div className="w-[290px] h-full flex flex-col p-6 rounded-md bg-[#F5F3F4]">
          <div className="flex gap-3">
            <Lightning size={32} className="text-[var(--strong-green)]" />
            <h4 className="text-2xl font-bold">Profissional</h4>
          </div>

          <p className="mt-3 text-left text-gray-400">Agilização de crescimento</p>

          <span className="text-4xl text-left flex items-end my-5">
            <p>R$75</p>
            <span className="text-sm text-gray-400 pl-2 pb-1">por mês</span>
          </span>

          <BtnFillGreen width={"full"}>Começar</BtnFillGreen>

          <p className="mt-10 text-lg text-left font-semibold mb-4">Incluso:</p>

          <ul>
            <li className="flex mb-2 items-center">
              <Check
                size={18}
                weight="bold"
                className="text-[var(--strong-green)]"
              />
              <span className="text-bold pl-2">Lorem Ipsum</span>
            </li>
            <li className="flex mb-2 items-center">
              <Check
                size={18}
                weight="bold"
                className="text-[var(--strong-green)]"
              />
              <span className="text-bold pl-2">Lorem Ipsum</span>
            </li>
            <li className="flex mb-2 items-center">
              <Check
                size={18}
                weight="bold"
                className="text-[var(--strong-green)]"
              />
              <span className="text-bold pl-2">Lorem Ipsum</span>
            </li>
            <li className="flex mb-2 items-center">
              <Check
                size={18}
                weight="bold"
                className="text-[var(--strong-green)]"
              />
              <span className="text-bold pl-2">Lorem Ipsum</span>
            </li>
            <li className="flex mb-2 items-center">
              <Check
                size={18}
                weight="bold"
                className="text-[var(--strong-green)]"
              />
              <span className="text-bold pl-2">Lorem Ipsum</span>
            </li>
            <li className="flex mb-2 items-center">
              <Check
                size={18}
                weight="bold"
                className="text-[var(--strong-green)]"
              />
              <span className="text-bold pl-2">Lorem Ipsum</span>
            </li>
            <li className="flex mb-2 items-center">
              <X
                size={18}
                weight="bold"
                className="text-[var(--strong-green)]"
              />
              <span className="text-bold pl-2 text-gray-400">Lorem Ipsum</span>
            </li>
            <li className="flex mb-2 items-center">
              <X
                size={18}
                weight="bold"
                className="text-[var(--strong-green)]"
              />
              <span className="text-bold pl-2 text-gray-400">Lorem Ipsum</span>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}

