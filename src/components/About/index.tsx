import React from "react";
import "./styles.css";
import TitleText from "../UI/titleText/index.tsx";
import SubText from "../UI/SubText/index.tsx";
import { ButtonUi } from "../UI/ButtonUi/index.tsx";

export default function About() {
  return (
    <div className="containerAbout">
        <div className="centerAbout">
          <TitleText text="Atuação" />
          <SubText text="Com uma equipe excepcional de advogados altamente qualificados e dedicados, destacamo-nos pela nossa paixão em buscar a justiça e proporcionar soluções eficazes para os desafios legais enfrentados pelos nossos clientes. Contamos com especializações abrangentes que abarcam desde o direito civil e comercial até áreas específicas como direito trabalhista e penal. Nosso comprometimento é oferecer uma resposta abrangente e eficiente para uma diversidade de questões legais complexas. Ao unir experiência e dedicação, estamos prontos para superar as expectativas e fornecer a orientação jurídica necessária para proteger os interesses e direitos de nossos clientes em todos os aspectos do sistema legal." />
          <div className="buttonUiAbout">
            <div className="buttonCardAbout">
              <ButtonUi height="48px" text="Saber mais" />
            </div>
          </div>
        </div>
      <div className="backgroundAbout" />
      
    </div>
  );
}
