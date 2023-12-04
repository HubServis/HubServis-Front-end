import {
  AppBar,
  BtnFillGreen,
  Footer,
  // OnlyViewReviews,
} from "../../components";
// import { useParams } from "react-router-dom";
import ImageSelector from "./components/ImageSelector/ImageSelector";
import Slider from "./components/Slider/Slider";
import { useFetch } from "../../hooks/useFetch";
import { changePriceForUi } from "../../utils/changePrice";
import LoadingViewService from "./components/LoadingViewService";
import AvaliateService from "./components/AvaliateServiceModal";
import { useNavigate } from "react-router-dom";

import { useGetUser } from "../../hooks/useGetUser";

const ViewService = () => {
  const [user, permission, error, load] = useGetUser("viewProfile");

  // const { id } = useParams();

  /* const displayTypesPayment = (types) => {
    return types.map((type, index) => {
      if (index == types.length - 1) return ` e ${type}`;
      if (index == types.length - 2) return type;
      return `${type}, `;
    });
  }; */

  return (
    <>
      <AppBar user={user} permission={permission}>
        <a href="/service">Sobre</a>
        <a href="/plans">Planos</a>
        <a href="/annuncement">Anuncios e eventos</a>
        <a href="/about">Suporte</a>
      </AppBar>
      <main className="flex justify-center mt-[60px] px-28 mb-40 max-w-[1440px] m-auto">
        <section className="w-full max-w-[50%] pr-[34px]">
          {/*<Slider DataImages={dataApi?.images} />*/}
          <article>
            <h2 className="h2-title-section mt-[90px]">Descrição</h2>
            <p className="w-full flex flex-col mb-5">
              {/*<span>{dataApi?.description}</span>*/}
            </p>
            {/*<AvaliateService TotalRatings={data?.totalRatings} serviceId={id}/>*/}
          </article>
        </section>

        <section className="w-full max-w-[50%] pl-[34px]">
          <h1 className="font-[700] text-3xl mb-5">
            {/*dataApi?.nameService.toUpperCase()*/}
          </h1>

          <div className="flex items-center gap-2">
            <p className="text-sm text-[color:var(--strong-green)] my-5 ml-2">
              {/*<p className="mt-1">{dataApi?.averageRatingDisplay}</p>
            <OnlyViewReviews rating={dataApi?.averageRating} />*/}
            </p>
          </div>
          <hr />

          {/*
			  <div className="flex items-baseline gap-2">
				<p className="font-bold text-[36px] mt-7">R$ {dataApi?.price}</p>
				<p className="text-xl mb-8">{dataApi?.formOfCharging}</p>
			  </div>
		  */}

          <p className="text-sm mb-3">
            {/*Opção de {displayTypesPayment(dataApi?.typesPayment)}*/}
          </p>

          <BtnFillGreen
            width="full"
            onclick={() => navigation(`/service/agenda/${id}`)}
          >
            Agendar serviço/atendimento
          </BtnFillGreen>

          <hr className="mt-[26px] mb-8" />
          <p className="text-lg font-normal mb-6">
            Outros serviços que talvez você se interesse
          </p>
          <ImageSelector />
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ViewService;
