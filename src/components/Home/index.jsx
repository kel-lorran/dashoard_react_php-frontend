import React from 'react'
import './index.css'
import MyContainer from '../MyContainer';
import MyChart from '../MyChart'

class Home extends React.Component{
    constructor( props){
        super( props)

        this.state = {
            user: this.props.user
        }
    }

    sair = (e) =>{
        e.preventDefault(e)
        window.localStorage.setItem('dashCond', '');
        window.location.reload()
    }

    

    render(){
        let user = this.state.user
        return(
            <React.Fragment>
                <main className="main-content">
                    <MyChart codCond="1" tipLeitura="luz"  titleEixoY="leituras" token={user.token}/>
                    <MyChart codCond="1" tipLeitura="agua" titleEixoY="leituras" token={user.token}/>
                </main>
                <nav className="nav-lateral">
                    <MyContainer width="80%">
                        <div>
                            <h4 className="text-white">{user.email}</h4>
                            <h6><a className="text-white" onClick={(e) => this.sair(e)}>SAIR</a></h6>
                        </div>
                        
                    </MyContainer>
                </nav>
            </React.Fragment>
        )
    }
}


export default Home