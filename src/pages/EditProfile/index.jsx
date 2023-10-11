import banner from "../../assets/EditProfile/banner.svg";
import { AppBar, BtnFillGreen } from "../../components";
import { InputText } from "primereact/inputtext";
import { userDataApi } from "../../api/userApi";

import { useSaveContent } from "../../hooks/useSaveContent";
import { useImageHandler } from "../../hooks/useImageHandler";

import { UploadSimple, Camera } from "@phosphor-icons/react";

const EditProfile = () => {
  const { img_profile } = userDataApi;

  const [data, setData, sendData] = useSaveContent();

  const [image, setImage] = useImageHandler();

  return (
    <>
      <AppBar>
        <a href="/about">Sobre</a>
        <a href="/plans">Planos</a>
        <a href="/annuncement">Anuncios e eventos</a>
      </AppBar>

      <figure className="max-h-[310px] w-full max-w-[1440px] m-auto">
        <img src={banner} alt="" className="absolute top-[85px] -z-10" />
      </figure>

      <main className="w-full max-w-[1440px] m-auto flex justify-evenly mt-[130px] mb-10">
        {/* LATERAL */}
        <aside className="w-full max-w-[345px] bg-white rounded-[10px] border-[2px] border-[var(--gray-opacity-5)] py-7">
          <figure className="max-w-[180px] max-h-[180px] h-full w-full m-auto relative">
              <div className="flex flex-col relative max-h-[180px] max-w-[180px]">
                <img
                  src={image.preview || img_profile}
                  alt="profile image"
                  className="w-full rounded-full object-cover max-h-[180px] max-w-[180px]"
                />
                <div className="absolute w-[100%] h-[100%]">
                  <label
                    htmlFor="uploadImage"
                    className="w-[100%] h-[100%] rounded-full bg-gray-400 flex items-center justify-center opacity-0 hover:opacity-80 hover:cursor-pointer"
                  >
                    <UploadSimple size={40} />
                  </label>
                  <input
                    type="file"
                    id="uploadImage"
                    className="font-[10px] text-green w-100% hidden relative z-100"
                    onChange={(e) => {
                      setImage(e), setData({ ...data, image: e.target.value });
                    }}
                  />
                </div>
                <Camera
                  size={34}
                  className="text-[var(--dark-green)] absolute bottom-0 right-1 z-10 "
                />
              </div>
          </figure>
          <h2 className="text-2xl font-medium text-center mt-9">
            Lewis Ramilthon
          </h2>
          <h4 className="text-lg text-[var(--gray-opacity-50)] font-medium text-center mb-16">
            HubServis
          </h4>

          <div className="flex justify-between px-10 py-[23px] border-y-[2px] border-[var(--gray-opacity-5)]">
            <p className="text-[var(--gray-opacity-50)] font-medium">
              Novos agendamentos
            </p>
            <p className="text-xl font-extrabold text-[var(--strong-green)]">
              35
            </p>
          </div>
          <div className="flex justify-between px-10 py-[23px] border-b-[2px] border-[var(--gray-opacity-5)]">
            <p className="text-[var(--gray-opacity-50)] font-medium">
              Conversas em chat
            </p>
            <p className="text-xl font-extrabold text-[var(--strong-green)]">
              17
            </p>
          </div>

          <button className="max-w-[240px] border-[2px] border-[var(--gray-opacity-5)] rounded-[7px] py-3 px-4 text-[var(--gray-opacity-50)] font-medium mt-[67px] mx-[50px] mb-[30px]">
            Verificar gerenciamento
          </button>
        </aside>

        <section className="w-full max-w-[800px] bg-white rounded-[10px] border-[2px] border-[var(--gray-opacity-5)] py-[25px] flex flex-col justify-between">
          <div className="flex flex-wrap justify-around">
            <div className="w-full max-w-[350px]">
              <p className="text-[var(--gray-opacity-50)] font-semibold">
                Nome
              </p>
              <div className="card flex justify-content-center">
                <InputText
                  value={data.name}
                  onChange={(e) => setData({ ...data, name: e.target.value })}
                  style={{ width: "100%" }}
                />
              </div>
            </div>
            <div className="w-full max-w-[350px]">
              <p className="text-[var(--gray-opacity-50)] font-semibold">
                Sobrenome
              </p>
              <div className="card flex justify-content-center w-full">
                <InputText
                  value={data.sobrenome}
                  onChange={(e) =>
                    setData({ ...data, sobrenome: e.target.value })
                  }
                  style={{ width: "100%" }}
                />
              </div>
            </div>
            <div className="w-full max-w-[350px]">
              <p className="text-[var(--gray-opacity-50)] font-semibold mt-[60px]">
                Telefone
              </p>
              <div className="card flex justify-content-center w-full">
                <InputText
                  value={data.phone}
                  onChange={(e) => setData({ ...data, phone: e.target.value })}
                  style={{ width: "100%" }}
                />
              </div>
            </div>
            <div className="w-full max-w-[350px]">
              <p className="text-[var(--gray-opacity-50)] font-semibold mt-[60px]">
                Email
              </p>
              <div className="card flex justify-content-center w-full">
                <InputText
                  value={data.email}
                  onChange={(e) => setData({ ...data, email: e.target.value })}
                  style={{ width: "100%" }}
                />
              </div>
            </div>
            <div className="w-full max-w-[350px]">
              <p className="text-[var(--gray-opacity-50)] font-semibold mt-[60px]">
                Segmento de atuação
              </p>
              <div className="card flex justify-content-center w-full">
                <InputText
                  value={data.businessSegment}
                  onChange={(e) =>
                    setData({ ...data, businessSegment: e.target.value })
                  }
                  style={{ width: "100%" }}
                />
              </div>
            </div>
            <div className="w-full max-w-[350px]">
              <p className="text-[var(--gray-opacity-50)] font-semibold mt-[60px]">
                CPF/CNPJ
              </p>
              <div className="card flex justify-content-center w-full">
                <InputText
                  value={data.cpfCnpj}
                  onChange={(e) =>
                    setData({ ...data, cpfCnpj: e.target.value })
                  }
                  style={{ width: "100%" }}
                />
              </div>
            </div>
          </div>

          <div className="border-t-[1px] pt-[37px] pl-[28px]">
            <BtnFillGreen onclick={sendData}>Atualizar dados</BtnFillGreen>
          </div>
        </section>
      </main>
    </>
  );
};

export default EditProfile;
