import React from 'react'
import './index.css'

export default function MyForm ( props){
    return(
        <form className="my-form w-100">
            {props.children}
        </form>
    )
}