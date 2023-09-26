import React from "react";
import {
  At,
  FacebookLogo,
  InstagramLogo,
  LinkedinLogo,
} from "@phosphor-icons/react";
import logo from "../../assets/HS-ICON.png";

const Footer = () => {
  const urlFacebook = "https://google.com";
  const urlInstagram = "https://google.com";
  const urlLinkedin = "https://google.com";

  const redirectForSite = (url) => {
    window.location.href = url;
  };

  return (
    <footer className="w-full max-w-[1440px] bg-[var(--dark-green-2)] m-auto py-10 px-5 lg:px-[60px] flex flex-col items-center">
      <section className="w-full flex flex-col md:flex-row justify-between">
        <div>
          <h2 className="text-[var(--gray-almost-white)] font-bold text-xl">
            Está com duvidas ou problemas?
          </h2>
          <p className="text-[var(--gray-almost-white)] font-medium text-base">
            Contate-nos através de nosso email:
          </p>
          <span className="flex items-center">
            <At
              size={20}
              weight="light"
              className="text-[var(--gray-almost-white)]"
            />
            <p className="text-[var(--gray-almost-white)] font-medium text-xs">
              contatohubservis@gmail.com
            </p>
          </span>
        </div>

        <div className="flex flex-col items-center mt-8 md:mt-0">
          <h2 className="text-[var(--gray-almost-white)] font-bold text-xl text-center">
            ACOMPANHE-NOS EM NOSSAS REDES SOCIAIS
          </h2>
          <div className="flex gap-[30px] mt-5">
            <FacebookLogo
              size={50}
              weight="light"
              className="text-[var(--gray-almost-white)] cursor-pointer"
              onClick={() => redirectForSite(urlFacebook)}
            />

            <InstagramLogo
              size={50}
              weight="light"
              className="text-[var(--gray-almost-white)] cursor-pointer"
              onClick={() => redirectForSite(urlInstagram)}
            />

            <LinkedinLogo
              size={50}
              weight="light"
              className="text-[var(--gray-almost-white)] cursor-pointer"
              onClick={() => redirectForSite(urlLinkedin)}
            />

          </div>
        </div>
      </section>

      <section className="flex items-center mt-6">
        <img loading="lazy" src={logo} alt="icon logo" className="w-[60px] h-[60px]"/>
        <h1 className="font-extrabold text-[26px] text-[var(--gray-almost-white)]" onClick={() => (window.location.href = appUrl)}>
          HubServis
        </h1>
      </section>
    </footer>
  );
};

export default Footer;
