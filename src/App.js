import React, { Component }             from 'react';
import { 
  Loading, SignIn, SignInWithPhone,
  Profile, Register, UpdateProfile
}                                       from './components';
import * as firebase                    from 'firebase';
import swal                             from 'sweetalert';
var config = {
    apiKey: "AIzaSyA__Jp53VZctpONM0ft2qxQ_fNfXefMhI8",
    authDomain: "dayhoclaptrinh-123.firebaseapp.com",
    databaseURL: "https://dayhoclaptrinh-123.firebaseio.com",
    projectId: "dayhoclaptrinh-123",
    storageBucket: "dayhoclaptrinh-123.appspot.com",
    messagingSenderId: "994539545049"
};
firebase.initializeApp(config);

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
        this.onSigninGoogle = this.onSigninGoogle.bind(this);
        this.onSigninGooglePopup = this.onSigninGooglePopup.bind(this);
    }

    componentDidMount(){
        this.authListener();
    }

    onSigninGoogle(){
        firebase.auth().getRedirectResult().then((result)=> {
            if (result.credential) {
                // This gives you a Google Access Token.
                var token = result.credential.accessToken;
            }
            var user = result.user;
            this.setState({ user, token });
        });
    
        var provider = new firebase.auth.GoogleAuthProvider();
        provider.addScope('profile');
        provider.addScope('email');
        firebase.auth().signInWithRedirect(provider);
    }

    onSigninGooglePopup(){
        var provider = new firebase.auth.GoogleAuthProvider();
        provider.addScope('profile');
        provider.addScope('email');
        firebase.auth().signInWithPopup(provider).then((result)=> {
            // This gives you a Google Access Token.
            var token = result.credential.accessToken;
            // The signed-in user info.
            var user = result.user;
            this.setState({ user, token });
        });
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
                firebase.auth().signOut().then(()=>{
                    this.setState({ route: "SIGN_IN" });
                }).catch(function(error) {
                //     // An error happened.
                });
            }
        });
      }

    signIn(email, password, e){
        e.preventDefault();
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then((u)=>{
        })
        .catch((error) => {
            alert(error.message);
        })
    }

    changeProfile(displayName, photoURL, e){
        e.preventDefault();
        var user = firebase.auth().currentUser;
    
        user.updateProfile({
            displayName,
            photoURL
        }).then(()=> {
            swal("Update success!");
            this.setState({ route: "PROFILE" });
        }).catch((error)=> {
          // An error happened.
        });
    }

    authListener() {
        firebase.auth().onAuthStateChanged((user) => {
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
                return <SignIn onSigninGooglePopup={this.onSigninGooglePopup} changeRoute={this.changeRoute} signIn={this.signIn} onSigninGoogle={this.onSigninGoogle}/>
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
