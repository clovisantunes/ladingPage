import React from "react";

interface subTextProps{
    text: string;
}

export default function SubText({text}: subTextProps){
    return(
        <h2>
            {text}
        </h2>
    )
}