import React from 'react'
import './index.css'
//import '../../../node_modules/font-awesome/css/font-awesome.min.css'

class MyBtn extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            hover: false
        }
    }

    toggleHover(){
        this.setState({hover: !this.state.hover})
    }
    
    render(){
        //constantes com o estilo dos botões, suas variações de cor
        const solid = {
            background: this.props.color,
            border: `1px solid ${this.props.color}`,
            color: `white`
        }
        const line = {
            background: `white`,
            border: `1px solid ${this.props.color}`,
            color: this.props.color
        } 
        
        //reponsavel por selecionar e cambiar conforme o hover
        let style
        if(this.props.myStyle === 'line')
        style = (this.props.myStyle === 'line' ) && !this.state.hover ? line : solid
        else
        style = (this.props.myStyle === 'solid' ) && !this.state.hover ? solid : line
        
        //seta classes do aquivo index.css, com caracteristicas como variação de tamanho
        let size
        if(this.props.size)
            size = this.props.size 
        //escolhe uma fonte condensed para texto mais extensos, sugeito a falha
        //pois conta com o fato desse textos estaram na segunda posição do children
        let font = ''
        if(this.props.children[1])
            font = this.props.children[1].length > 8 ? 'text-condensed' : ''
        let classes = `my-btn my-btn-default my-btn-${size} ${font}`

        return(
            <button className={classes} style={style} onMouseEnter={this.toggleHover.bind(this)} onMouseLeave={this.toggleHover.bind(this)} onClick={(e) => this.props.onClick(e,this.props.action)} >
                {this.props.children}
            </button>
        )
    }
}

export default MyBtn