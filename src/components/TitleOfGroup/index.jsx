import React from 'react'
import './index.css'

export default function TitleOfGroup( props){
    const estilo = {
        color: props.color,
        borderColor: props.color
    }
    return(
        <div className="title-group" style={estilo}>
            <div className="grow-dash"></div>
            <h3>{props.contentText}</h3>
            <div className="grow-dash"></div>
        </div>
    )
}