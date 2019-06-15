import React from 'react'
import './index.css'

export default function MySection( props){
    let estilo = {}
    if(props.distTop){
        estilo.top = `calc( ${props.distTop} )`
    }else{
        estilo = {
            height: '100vh',
            display: 'flex',
            alignItems: 'center',
        }
    }
    
    //console.log(props.children.props.height)
    return(
        <section className="my-section" style={estilo}>
            <div>
                {props.children}
            </div>
        </section>
    )
}