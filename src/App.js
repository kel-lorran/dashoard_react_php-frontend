import React from 'react';

import User from './model/user.js';

import Home from './components/Home'
import Login from './components/Login';

class App extends React.Component {
  constructor(){
    super();
    this.state={
      user: window.localStorage.getItem('dashCond') ? JSON.parse(window.localStorage.getItem('dashCond')) : new User()
    }
  }

  login = (e,action) => {
    let self = this;
    const success = ( d) => {
      let usuario = self.state.user
      usuario.token = d.content
      if(! d.status) {
        alert( d.mesage)
      }
      else{
        usuario.senha = ''
        localStorage.setItem('dashCond', JSON.stringify(usuario))
        self.setState({user: usuario})
      } 
    }
    const fail= ( e) => {
      console.log(e);
    }

    let config = [
      `http://localhost/backend/login.php?action=${action}`,
      {
        headers: new Headers({
          "Content-Type": "application/json"
        }),
        mode: 'cors',
        method: 'POST',
        body: JSON.stringify(self.state.user)
      }
    ];

    fetch(...config).then( resp => resp.json())
      .then( data => success(data))
      .catch( error => fail(error));
  }

  atualizaUser = ( e, key) => {
    let usuario = this.state.user
    let val = e.target.value

    usuario[key] = val
    this.setState({
      user: usuario
    })
  }

  renderPgLogin(){
    let usuario = this.state.user
    if(! usuario.token){
      return <Login user={this.state.User} onChange={this.atualizaUser.bind(this)} onClick={this.login.bind(this)}/>
    }
  }

  renderPgInicial(){
    let usuario = this.state.user
    if( usuario.token){
      return <Home user={this.state.user} />
    }
  }

  render(){
    return(
      <React.Fragment>
        {this.renderPgLogin()}  
        {this.renderPgInicial()}
      </React.Fragment>
    )
  }
}


export default App;
