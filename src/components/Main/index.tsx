import React from 'react';
import './styles.css';
import './carousel.css';
import TitleText from '../UI/titleText/index.tsx';
import {ButtonUi} from '../UI/ButtonUi/index.tsx';
import "../../styles/assets/dist/css/bootstrap.min.css"
import "../../styles/assets/js/color-modes.js"
import '../../styles/assets/dist/js/bootstrap.bundle.min.js'

export default function Main(){
    return(
     <>
      <div id="myCarousel" className="carousel slide mb-6" data-bs-ride="carousel">
    <div className="carousel-indicators">
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img src='/image/background.png' alt='imagem fundo' style={{width: "100%", opacity: .5}} />
        <div className="container">
          <div className="carousel-caption titleText">
            <TitleText
                text='Renova Advocacia'

            />
            <div className="buttonCard">
            <ButtonUi 
                height='3em'
                text='Entre em contato'
            />

            </div>
          </div>
        </div>
      </div>
      <div className="carousel-item">
      <img src='/image/background2.jpg' alt='imagem fundo' style={{width: "100%", opacity: .5}} />
        <div className="container">
          <div className="carousel-caption">
            <h1>Soluções de temas complexos com linguagem simples e direta</h1>
          </div>
        </div>
      </div>
      <div className="carousel-item">
      <img src='/image/background3.webp' alt='imagem fundo' style={{width: "100%", opacity: .5}} />
        <div className="container">
          <div className="carousel-caption text-end">
            <h1>EXCELÊNCIA PROFISSIONAL</h1>
            <p>Transparência, criatividade e comprometimento.</p>
          </div>
        </div>
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
     </>
    )
}