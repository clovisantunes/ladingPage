import React, { ReactNode } from "react";
import './styles.css';

interface buttonUiProps{
    text: string;
    height: string;
}
interface buttonArrowProps{
    icon: ReactNode;
    onClick?: () => void;
}

function ButtonUi({text, height}: buttonUiProps){
    return(
        <div className="buttonUi" style={{height: height}}>
            {text}
        </div>
    )
}
function ButtonWhats({text, height}: buttonUiProps){
    return(
        <div className="buttonWhats" style={{height: height}}>
            {text}
        </div>
    )
}
function ButtonArrows({icon, onClick}: buttonArrowProps){
    return(
    <div className="buttonArrow" onClick={onClick}>
    {icon}
        </div>
    )
}

export  { ButtonUi, ButtonWhats, ButtonArrows}