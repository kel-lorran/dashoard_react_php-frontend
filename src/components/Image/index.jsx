import React from 'react'

export default function Image( props){
    let urlImage = props.arquivo ? props.arquivo : `https://via.placeholder.com/${props.width}x${props.height}.png`

    const estilo = {
        backgroundImage: `url(${urlImage})`,
        width: `${props.width}px`,
        height: `${props.height}px`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center'
    }
    return(
        <div className="image" style={estilo} >
        </div>
    )
}