import React from 'react';

import User from './model/user.js';

import Home from './components/Home'
import Login from './components/Login';

class App extends React.Component {
  constructor(){
    super();
    this.state={
      user: new User('kelvin@teste.com','1234')
    }
  }

  renderPgLogin(){
    return <Login user={this.state.User} />
  }

  renderPgInicial(){
    console.log(this.state.user)
    return <Home user={this.state.user} />
  }

  render(){
    return(
      <React.Fragment>
        {/* {this.renderPgLogin()}    */}
        {this.renderPgInicial()}
      </React.Fragment>
    )
  }
}


export default App;
