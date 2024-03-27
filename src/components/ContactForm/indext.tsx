import React from "react";
import "./styles.css";
import TitleText from "../UI/titleText/index.tsx";
import { ButtonUi } from "../UI/ButtonUi/index.tsx";

export default function ContactForm() {
  return (
    <>
      <div className="containerForm">
        <div className="titleForm">
          <TitleText text="Entre em contato!" />
        </div>
      <div className="contactCard">

      
        <div className="text">
          <span className="text1">Nós podemos te ajudar! Para um melhor atendimento</span>
          <span className="text2">
            Fale conosco para dar o melhor atendimento, solicitamos o
            preenchimento completo do formulário ao lado
          </span>
        </div>
        <form>
          <div className="formContainer">
            <div className="nameForm">
              <input type="text" name="nome" placeholder="Nome Completo" />
              <input type="text" name="Email" placeholder="Email" />
              <input type="email" name="Telefone:" placeholder="Telefone"/>
              <textarea name="Sua mensagem:" placeholder="Mensagem"></textarea>
        <div className="buttonForm">
          <ButtonUi height="48px" text="Enviar" />
        </div>
            </div>
          </div>
        </form>
      </div>
      </div>
    </>
  );
}
