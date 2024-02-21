import React from "react";
import "./styles.css";
import { FaWhatsapp } from "react-icons/fa";
import { CiInstagram } from "react-icons/ci";

export default function NavBar() {
  return (
    <div className="container">
      <div className="logo"></div>
      <div className="navList">
        <ul>
          <li>
            <a>Inicio</a>
          </li>
          <li>
            <a>Sobre</a>
          </li>
          <li>
            <a>Serviços</a>
          </li>
          <li>
            <a>Escritório</a>
          </li>
          <li>
            <a>Contato</a>
          </li>
        </ul>
      </div>
      <div className="socialCards">
        <FaWhatsapp width={24} height={24} />
        <CiInstagram />
      </div>
    </div>
  );
}
