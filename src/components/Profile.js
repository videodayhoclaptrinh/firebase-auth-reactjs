import React,{Component} from 'react';

class Profile extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="container text-center">
                <h1 className="jumbotron-heading">User profile</h1>
                <img style={{width:"150px"}} src={"http://www.pngmart.com/files/1/Pink-Butterfly-PNG-Image.png"} />
                <p className="lead text-muted">Hello: Video dạy học lập trình</p>
                <p className="lead text-muted">Email: videodayhoclaptrinh@gmail.com</p>
                <p className="lead text-muted">Phone: 0915117490</p>
                <a onClick={this.props.changeRoute.bind(this,"UPDATE_PROFILE")} className="text text-primary fb-btn-login">Update profile</a>
                <a onClick={this.props.changeRoute.bind(this,"SIGN_IN")} className="text text-success">Logout</a>
            </div>
        );
    }
}

export default Profile;