import React from "react";
import "./styles.css";
import TitleText from "../UI/titleText/index.tsx";
import { ButtonUi } from "../UI/ButtonUi/index.tsx";

export default function ContactForm() {
  return (
    <div className="containerForm">
      <div className="titleForm">
        <TitleText text="Entre em contato!" />
      </div>
        <form>
      <div className="formContainer">
          <div className="nameForm">
            <label >
              Nome:
            </label>
              <input type="text" name="nome" />
            <label>
              Sobrenome:
            </label>
              <input type="text" name="sobrenome" />
          </div>
          <div className="textForm">
            <label>
              Email:
            </label>
              <input type="email" name="email" />
            <label>
              Mensagem:
            </label>
              <textarea name="Sua mensagem:"></textarea>
          </div>

      </div>
                </form>
          <div className="buttonForm">
            <ButtonUi 
                height="48px"
                text="Enviar"
                />
          </div>
    </div>
  );
}
