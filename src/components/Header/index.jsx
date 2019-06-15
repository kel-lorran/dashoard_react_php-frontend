import React from 'react'
import './index.css'
import Image from '../Image'
import Img from './img/logoAujude_vermelho_small.png'
import '../../../node_modules/font-awesome/css/font-awesome.min.css'

export default function Header( props){
    return(
        <header className="my-header">
            <nav>
                <div></div>
                <div className="nav-logo">
                    <Image arquivo={Img} width="140px" height="55px" />
                </div>
                <div className="nav-menu">
                    <a><i className="fa fa-bars" href="#"></i></a>
                </div>
            </nav>
        </header>
    )
}