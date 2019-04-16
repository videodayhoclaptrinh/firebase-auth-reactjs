import React,{Component} from 'react';

class Profile extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="container text-center">
                <h1 className="jumbotron-heading">User profile</h1>
                <img style={{width:"150px"}} src={this.props.user.photoURL} />
                <p className="lead text-muted">Hello: {this.props.user.displayName}</p>
                <p className="lead text-muted">Email: {this.props.user.email}</p>
                <p className="lead text-muted">Phone: {this.props.user.phoneNumber}</p>
                <a onClick={this.props.changeRoute.bind(this,"UPDATE_PROFILE")} className="text text-primary fb-btn-login">Update profile</a>
                <a onClick={this.props.signOut.bind(this)} className="text text-success">Logout</a>
            </div>
        );
    }
}

export default Profile;