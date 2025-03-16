import { X, Plus } from "@phosphor-icons/react";

const onModalOpen =
  "block absolute top-0 left-0 w-[100vw] h-[100vh] bg-[#4141414D]";

const onModalClosed = "hidden duration-300 ease-in-out";

export const NewProductModal = ({ isOpen, setIsOpen }) => {
  return (
    <div className={isOpen ? onModalOpen : onModalClosed}>
      <div className="bg-white w-[calc(650px-5%)] py-[30px] px-[30px] absolute left-[calc(50%-265px)] top-[calc(50%-400px)] rounded-[8px]">
        <div className="flex flex-col gap-[15px] overflow-hidden h-[500px]">
          <div className="flex justify-between">
            <h2 className="font-normal text-[20px]">Descrição do novo produto</h2>
            <X
              size={26}
              onClick={() => setIsOpen(false)}
              className="cursor-pointer"
            />
          </div>

          <div>
            <p>Nome do produto:</p>
            <input
              id=""
              name=""
              className="py-[10px] px-[6px] w-[100%] border-2 rounded-[8px] border-[var(--light-green)] outline-none"
            />
          </div>

          <div>
            <p>Categoria do produto:</p>
            <input
              id=""
              name=""
              className="py-[10px] px-[6px] w-[100%] border-2 rounded-[8px] border-[var(--light-green)] outline-none"
            />
          </div>

          <div className="flex gap-[30px]">
            <div className="flex flex-col">
              <p>Preço unitário:</p>
              <input
                type="text"
                placeholder="R$ 0,00"
                className="py-[10px] px-[6px] border-2 w-[90%] h-[55px] rounded-[8px] border-[var(--light-green)] outline-none"
              />
            </div>

            <div>
              <p>Hora</p>
              <div className="flex w-[100px] h-[56px] py-[10px] px-[19px] border-2 rounded-[8px] border-[var(--light-green)]">
                <select
                  className="w-[100%] text-[16px] outline-none"
                  placeholder="Test"
                >
                  <option>1h</option>
                  <option>2h</option>
                  <option>3h</option>
                </select>
              </div>
            </div>

            <div>
              <p>Minutos</p>
              <div className="flex w-[150px] h-[56px] py-[10px] px-[19px] border-2 rounded-[8px] border-[var(--light-green)]">
                <select
                  className="w-[100%] text-[16px] outline-none"
                  placeholder="Test"
                >
                  <option>05 mim</option>
                  <option>10 mim</option>
                  <option>20 mim</option>
                </select>
              </div>
            </div>
          </div>

          <div className="flex justify-between gap-[50px]">
            <div>
              <p>Comissão:</p>
              <div className="flex border-2 rounded-[8px] border-[var(--light-green)]">
                <div className="flex w-[100%] h-[56px] py-[10px] px-[19px] border-r-2 border-[var(--light-green)]">
                  <input
                    className="w-[100%] text-[16px] outline-none"
                    placeholder="0"
                    type="number"
                  />
                </div>

                <div className="flex w-[100%] h-[56px] items-center py-[10px] px-[19px]">
                  <p>%</p>
                </div>
              </div>
            </div>

            <div className="w-[50%] flex flex-col">
              <p>Preço de custo:</p>
              <select
                id=""
                name=""
                className="py-[10px] px-[6px] w-[100%] h-[100%] border-2 rounded-[8px] border-[var(--light-green)]"
              >
                <option value=""></option>
                <option value=""></option>
                <option value=""></option>
              </select>
            </div>
          </div>
        </div>

        <div>
          <p id="reason" name="reason">
            Descrição do produto:
          </p>
          <textarea
            id="reason"
            name="reason"
            rows="5"
            maxLength="200"
            className="py-[5px] px-[5px] border-2 border-[var(--light-green)] rounded-[8px] w-[100%]"
          ></textarea>
        </div>

        <div className="mt-[30px] flex justify-end">
          <button className="py-[12px] px-[30px] rounded-[8px] border-[var(--light-green)] bg-[var(--strong-green)] text-white font-bold">
            Salvar
          </button>
        </div>
      </div>
    </div>
  );
};
