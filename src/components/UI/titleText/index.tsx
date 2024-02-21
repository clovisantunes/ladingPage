import React from "react";

interface titleTextProps{
    text: string;
}

export default function TitleText({text}: titleTextProps){
    return(
        <h1>{text}</h1>
    )
}