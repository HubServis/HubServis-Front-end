import logoImg from "../../assets/HS-ICON.png";
import { BtnFillGreen, CheckBox, EmailInput } from "../../components";
import { Password } from "primereact/password";
import { InputText } from "primereact/inputtext";
import Ilustration from "../../assets/Login/login-ilustration.svg";
import { useNavigate } from "react-router-dom";
import { useRegister } from "../../hooks/useRegister";

const Register = () => {
  const navigation = useNavigate();

  const [registerData, setRegisterData, sendData] = useRegister();

  return (
    <>
      <main className="flex">
        <section className="w-full md:min-w-[50%] px-10 pb-8">
          <div className="flex items-center gap-2 mt-14">
            <img
              src={logoImg}
              alt="logo image"
              className="max-w-[78px] max-h-[78px]"
            />
            <h1 className="text-[var(--dark-green-2)] text-[26px] font-extrabold">
              HubServis
            </h1>
          </div>

          <h2 className="text-[26px] text-[var(--dark-green)] font-extrabold mt-14">
            Registre-se
          </h2>

          <p className="text-sm font-medium text-[var(--gray-opacity-25)] mt-4">
            Para começar, é importante que nos informe seus dados pessoais.
          </p>

          <div className="flex flex-col gap-2 mt-8">
            <label
              htmlFor="seu-nome"
              className="text-[#7E8082] text-sm font-medium"
            >
              Qual seu Nome?
            </label>
            <InputText
              id="seu-nome"
              placeholder="ramilthon bmw"
              onChange={(e) =>
                setRegisterData({ ...registerData, name: e.target.value })
              }
            />
          </div>

          <div className="flex flex-col gap-2 mt-8">
            <label
              htmlFor="seu-email"
              className="text-[#7E8082] text-sm font-medium"
            >
              Seu email
            </label>
            <InputText
              id="seu-email"
              placeholder="ramilthon@gmail.com"
              onChange={(e) =>
                setRegisterData({ ...registerData, name: e.target.value })
              }
            />
          </div>

          <div className="flex flex-col sm:flex-row justify-between gap-3">
            <div className="flex flex-col gap-2 mt-8 w-full sm:max-w-[50%]">
              <label
                htmlFor="seu-nome-usuario"
                className="text-[#7E8082] text-sm font-medium"
              >
                Qual seu nome de usuário?
              </label>
              <InputText
                id="seu-nome-usuario"
                placeholder="ramilthon_bmw"
                onChange={(e) =>
                  setRegisterData({ ...registerData, name: e.target.value })
                }
              />
            </div>

            <div className="flex flex-col gap-2 mt-8 w-full sm:max-w-[50%]">
              <label
                htmlFor="seu-cpf"
                className="text-[#7E8082] text-sm font-medium"
              >
                Qual seu CPF?
              </label>
              <InputText
                id="seu-cpf"
                placeholder="xxx.xxx.xxx-xx"
                onChange={(e) =>
                  setRegisterData({ ...registerData, name: e.target.value })
                }
              />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-between gap-3">
            <div className="flex flex-col gap-2 mt-8 w-full sm:max-w-[50%]">
              <label
                htmlFor="sua-senha"
                className="text-[#7E8082] text-sm font-medium"
              >
                Qual a sua senha
              </label>
              <Password
                placeholder="xxxxxxxxxxxx"
                inputStyle={{ width: "100%", alignItems: "center" }}
                value={registerData.password}
                onChange={(e) =>
                  setRegisterData({ ...registerData, name: e.target.value })
                }
                feedback={false}
                toggleMask
              />
            </div>

            <div className="flex flex-col gap-2 mt-8 w-full sm:max-w-[50%]">
              <label
                htmlFor="sua-senha"
                className="text-[#7E8082] text-sm font-medium"
              >
                Confirme a sua senha.
              </label>
              <Password
                placeholder="xxxxxxxxxxxx"
                inputStyle={{ width: "100%", alignItems: "center" }}
                value={registerData.confirmPassword}
                onChange={(e) =>
                  setRegisterData({ ...registerData, name: e.target.value })
                }
                feedback={false}
                toggleMask
              />
            </div>
          </div>

          <p className="text-[#7E8082] text-sm font-medium mb-3 mt-8">
            Já tem uma conta?{" "}
            <span
              className="text-[var(--dark-green)] text-sm font-medium cursor-pointer"
              onClick={() => navigation("/login")}
            >
              Faça login
            </span>
          </p>

          <BtnFillGreen width={"full"} onclick={sendData}>
            Registrar
          </BtnFillGreen>
        </section>

        <section className="hidden lg:flex w-full max-w-[50%] bg-[var(--dark-green-2)] min-h-screen flex justify-center">
          <img
            src={Ilustration}
            alt="Ilustration"
            className="max-w-lg max-h-lg m-auto"
          />
        </section>
      </main>
    </>
  );
};

export default Register;
