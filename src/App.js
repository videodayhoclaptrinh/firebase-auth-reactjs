import React, { Component } from 'react';
import './App.css';
import { 
  Loading, SignIn, SignInWithPhone,
  Profile, Register, UpdateProfile
} from './components';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            route: "SIGN_IN"
        }
        this.changeRoute    = this.changeRoute.bind(this);
        this._renderPage    = this._renderPage.bind(this);
    }

    changeRoute(route){
        this.setState({route});
        return false;
    }

    _renderPage(){
        switch(this.state.route){
            case "UPDATE_PROFILE":
                return <UpdateProfile changeRoute={this.changeRoute} />
            case "REGISTER":
                return <Register changeRoute={this.changeRoute} />
            case "SIGN_IN_PHONE":
                return <SignInWithPhone changeRoute={this.changeRoute} />
            case "PROFILE":
                return <Profile changeRoute={this.changeRoute} />
            case "SIGN_IN":
                return <SignIn changeRoute={this.changeRoute} />
        }
    }

    render() {
        if(!this.state.hasOwnProperty("user")){
            return(
                <Loading />
            )
        }
        return (
            <div className="container">
                {this._renderPage()}
            </div>
        );
    }
}

export default App;
