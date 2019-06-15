import React from 'react'
import './index.css'
import MyContainer from '../MyContainer';
import SheetDescription from '../SheetDescription'

class Home extends React.Component{
    constructor( props){
        super( props)

        this.state = {
            user: this.props.user
        }
    }

    render(){
        let user = this.state.user
        return(
            <React.Fragment>
                <main className="main-content">
                    
                </main>
                <nav className="nav-lateral">
                    <MyContainer width="80%">
                        <h4>{user.email}</h4>
                    </MyContainer>
                </nav>
            </React.Fragment>
        )
    }
}

export default Home