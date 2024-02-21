import React from 'react';
import './styles.css';
import TitleText from '../UI/titleText/index.tsx';
import {ButtonUi} from '../UI/ButtonUi/index.tsx';

export default function Main(){
    return(
        <div className='containerMain'>
            <div  className='background'/>
            <div  className='backgroundFilter'/>

            <div className='mainCard'>
                <div className='titleText'>
                    <TitleText 
                         text='Lorem Ipsum'
                    />
                    <TitleText 
                        text='Advogacia'
                    />
                </div>
                <div className='buttonCard'>
                    <div className='buttonComponent'>
                        <ButtonUi 
                            height='36px'
                            text='Entre em contato'
                        />
                    </div>
                </div>
            </div>            
        </div>
    )
}