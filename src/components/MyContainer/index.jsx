import React from 'react'
import './index.css'

export default function MyContainer( props){

    let flexDirection = props.direction === 'row' ? 'row' : 'column'
    let classes = `my-container ${flexDirection}`
    let estilo = {
        zIndex: props.zIndex ? props.zIndex : '50',
        width: props.width ? props.width : '100%'
    }
    return(
        <div className={classes} style={estilo} >
            {props.children}
        </div>
    )
}