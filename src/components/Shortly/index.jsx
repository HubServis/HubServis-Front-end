import imgShortly from "../../assets/Shortly/imgShortly.svg";
import BtnFillGreen from "../Buttons/BtnFillGreen/BtnFillGreen";
import { useNavigate } from "react-router-dom";

const Shortly = () => {
  const navigation = useNavigate();

  return (
    <>
      <div className="flex flex-col items-center gap-8">
        <img src={imgShortly} alt="Ilustração em breve" />
        <p className="text-[40px] text-[var(--strong-green)] font-bold">
          EM BREVE
        </p>

        <p className="text-center">
          Esta página e/ou tópico esta sendo desenvolvida. <br />
          Pedimos sua colaboração e desculpas pela <br />
          infuncionalidade no momento.
        </p>

        <BtnFillGreen onclick={() => navigation("/")}>VOLTAR PARA A HOME</BtnFillGreen>
      </div>
    </>
  );
};

export default Shortly;
