import React, { Component } from 'react';
import './App.css';
import { 
  Loading, SignIn, SignInWithPhone,
  Profile, Register, UpdateProfile
} from './components';
import fire from './utils/fire';
import swal from 'sweetalert';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            route: "SIGN_IN"
        }
        this.changeRoute    = this.changeRoute.bind(this);
        this._renderPage    = this._renderPage.bind(this);
        this.signIn         = this.signIn.bind(this);
        this.signOut        = this.signOut.bind(this);
        this.changeProfile  = this.changeProfile.bind(this);
    }

    componentDidMount(){
        this.authListener();
    }

    signOut(e){
        e.preventDefault();
        swal({
            title: "Are you sure?",
            text: "SignUp!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
        .then((willDelete) => {
            if (willDelete) {
                fire.auth().signOut().then(()=>{
                    this.setState({ route: "SIGN_IN" });
                }).catch(function(error) {
                    // An error happened.
                });
            }
        });
      }

    signIn(email, password, e){
        e.preventDefault();
        fire.auth().signInWithEmailAndPassword(email, password)
        .then((u)=>{
        })
        .catch((error) => {
            alert(error.message);
        })
    }

    changeProfile(displayName, photoURL, e){
        e.preventDefault();
        var user = fire.auth().currentUser;
    
        user.updateProfile({
            displayName,
            photoURL
        }).then(function() {
            swal("Update success!");
            this.setState({ route: "PROFILE" });
        }).catch(function(error) {
          // An error happened.
        });
    }

    authListener() {
        fire.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ user, route: "PROFILE"});
            } else {
                this.setState({ user: null, route: "SIGN_IN" });
            }
        });
    }

    changeRoute(route){
        this.setState({route});
        return false;
    }

    _renderPage(){
        switch(this.state.route){
            case "UPDATE_PROFILE":
                return <UpdateProfile changeRoute={this.changeRoute} changeProfile={this.changeProfile}  user={this.state.user} />
            case "REGISTER":
                return <Register changeRoute={this.changeRoute} />
            case "SIGN_IN_PHONE":
                return <SignInWithPhone changeRoute={this.changeRoute} />
            case "PROFILE":
                return <Profile changeRoute={this.changeRoute} signOut={this.signOut} user={this.state.user} />
            case "SIGN_IN":
                return <SignIn changeRoute={this.changeRoute} signIn={this.signIn}/>
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
