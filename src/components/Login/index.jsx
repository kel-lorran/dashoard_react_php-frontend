import React from 'react';

import User from '../../model/user.js';

import MySection from '../MySection';
import MyContainer from '../MyContainer';
import TitleOfGroup from '../TitleOfGroup';
import MyForm from '../MyForm';
import InputText from '../InputText';
import MyBtn from '../MyBtn';

class Login extends React.Component{
    constructor( props){
        super(props)
        this.state = {
            user: this.props.user
        }
    }

    render(){
        return(
            <MySection >
                <MyContainer width="47%">
                <TitleOfGroup color="var(--text-color-title-group)" contentText="Login/ Cadastro para o Dashboard" />
                <MyForm>
                    <InputText id="email" name="email" labelText="Email:" />
                    <InputText id="pass" name="pass" labelText="Senha:" />
                </MyForm>
                <MyContainer direction="row">
                    <div className="group-btns w-100">
                    <MyBtn size="full" myStyle="line" color="var(--text-color-title-group)">
                        <i className="fas fa-address-book"></i>Cadastrar
                    </MyBtn> 
                    <MyBtn size="full" myStyle="line" color="var(--text-color-title-group)">
                        <i className="fas fa-sign-in-alt"></i>Logar
                    </MyBtn> 
                    </div>
                </MyContainer>
                </MyContainer>
            </MySection>
        )
    }
}

export default Login