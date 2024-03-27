import React from "react";
import "./styles.css";
import TitleText from "../UI/titleText/index.tsx";
import SubTexts from "../UI/SubText/index.tsx";
import { IoLocationOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";
import { CiInstagram } from "react-icons/ci";
import {ButtonUi} from '../../components/UI/ButtonUi/index.tsx';

const texts = {
  address: {
    name: "Porto Alegre-RS, 99999-010",
    icon: <IoLocationOutline />,
  },
  email: {
    name: "loremipsum@gmail.com",
    icon: <CiMail />,
  },
  number: {
    name: "(51)xxxxx-xxxx",
    icon: <FaWhatsapp />,
  },
  instagram: {
    name: "Renova_Advocacia",
    icon: <CiInstagram />,
  },
};

export default function Footer() {
  return (
    <footer>
      <div className="footerComponets">
          <div className="logoFooter">

          </div>
        <div className="contactsCard">
          <div className="textFooter">
            {Object.keys(texts).map((key) => (
              <div key={key} className="subTextIcons">
                {texts[key].icon}
                <span>{texts[key].name}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="footerItems">
            <TitleText 
                text="Horários de atendimento"
            />
            <SubTexts 
                text="SEGUNDA À SEXTA"
            />
            <span>
                Manhã: 08h00min às 12h00min
            </span>
            <span>
                Tarde: 13h30min às 17h00min
            </span>
            <div className="buttonFooter">
                <ButtonUi 
                    height="2em"
                    text="Agende seu horario"
                />
            </div>
        </div>
      </div>
      <div className="copyright">
        <SubTexts 
            text="© LoremIpsum 2024. Todos os direitos reservados."
        />
      </div>
    </footer>
  );
}
