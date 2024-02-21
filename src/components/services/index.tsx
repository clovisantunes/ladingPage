import React from 'react';
import './styles.css';
import { GiHandcuffs } from "react-icons/gi";
import { PiStethoscopeDuotone } from "react-icons/pi";
import { AiFillBank } from "react-icons/ai";
import { LiaBalanceScaleSolid } from "react-icons/lia";
import {ButtonUi, ButtonWhats} from '../UI/ButtonUi/index.tsx';
import TitleText from '../UI/titleText/index.tsx';
import SubText from '../UI/SubText/index.tsx';

export default function Services() {
    const titles = {
        penal: "Direito Penal",
        medico: "Direito Médico",
        sucessao: "Direito das Sucessões",
        civil: "Direito Civil"
    }
    const icons = {
        penal: <GiHandcuffs />,
        medico: <PiStethoscopeDuotone />,
        sucessao: <AiFillBank />,
        civil: <LiaBalanceScaleSolid />
    }

    return (
        <div className='containerServices'>
            <div className='servicesCard'>
                {Object.keys(titles).map((key) => (
                    <div className='servicesComponent' key={key}>
                        <div className='textSvg'>
                            <h3>{titles[key]}</h3>
                            {icons[key]}
                        </div>
                        <div className='buttonUiServices'>
                            <ButtonUi 
                                height='28px'
                                text='veja mais'
                            />
                        </div>
                    </div>
                ))}
            </div>
                <div>
                    <div className='textDescriptionServices'>
                        <TitleText 
                            text='Não encontrou oque procurava? '
                        />
                        <SubText 
                            text='Clique no botão abaixo e converse comigo,  responderei imediatamente.'
                        />
                    </div>
                    <div className='buttonWhatsComponent'>
                        <div className='buttonWhatsCard'>
                            <ButtonWhats 
                                height='28px'
                                text='Entre em contato pelo whatsapp'
                            />
                        </div>
                    </div>
                </div>
        </div>
    )
}
