import React from 'react'
import './index.css'

export default function SheetDescription ( props){

    return(
        <div className="sheet-description">
            <div>
                {props.infos.map( ( e, i) => {
                    return <dt>{e.text}</dt>
                })}
                {/* <dt>rexPastor</dt>
                <dt>pastor alemão</dt>
                <dt>jovem   3-8a</dt>
                <dt>medio   17-25kg</dt> */}
            </div>
        </div>
    )
}