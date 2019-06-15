import React from 'react'
import './index.css'

export default function InputText( props){
    
    const animaLabel = (e) => {
        //debugger
        let label = e.target.parentElement.firstElementChild
        label.classList.add('ativo');
        let input = e.target.parentElement.lastElementChild;
        input.addEventListener('blur', () => {
            if( input.value == ''){
                label.classList.remove('ativo');
            }
        });
    }

    return(
        <div className="field-input" >
            <label htmlFor={props.id} className="">{props.labelText}</label>
            <input 
                id={props.id} 
                name={props.name} 
                type="email" 
                required="required"
                onFocus={animaLabel}
            />
        </div>
    )
}