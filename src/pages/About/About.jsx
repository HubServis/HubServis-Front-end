import { AppBar, BtnFillGreen, Footer } from "../../components";
import AboutImg from "../../assets/about/About.png";
import {
  CurrencyCircleDollar,
  ChartBar,
  UserCircleGear,
  Table,
} from "@phosphor-icons/react";
import search from "../../assets/search.svg";
import { useGetUser } from "../../hooks/useGetUser";

const About = () => {
  const [user, permission] = useGetUser("about");

  return (
		<>
			<AppBar user={user} permission={permission}>
				<a href="/">Home</a>
				<a href="/services">Serviços</a>
				<a href="/saved">Favoritos</a>
			</AppBar>

			<section className="max-w-[1440px] mx-auto mb-5 flex flex-col items-center">
				<h1 className="font-bold text-center text-xl mt-4">
					PARA SABER MAIS SOBRE O PROJETO HUBSERVIS
				</h1>
				<p className="text-center mt-1">
					Clique abaixo e leia nosso resumo expandido
				</p>
				<a
					href="https://etecspgov-my.sharepoint.com/:b:/g/personal/eduardo_oliveira378_etec_sp_gov_br/EUoEDLptuiVPtStDlhxhETsB3JvmRCyzqD96lz5hQC25Pg?e=vdCoqb"
					target="_blank"
					rel="noreferrer"
					className="text-[var(--dark-green-2)]"
				>
					PDF Download
				</a>
			</section>

			{/* <section className="grid"> */}
			<Footer />
		</>
	);
};

export default About;
