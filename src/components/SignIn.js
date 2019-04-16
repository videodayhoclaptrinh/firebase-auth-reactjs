import React,{Component} from 'react';

class SignIn extends Component{
    constructor(props){
        super(props);
        this.state = {
            email:"",
            password:""
        }
    }
    render(){
        return(
            <form className="col-md-6 offset-md-3 fb-login">
                <h3 className="text-center">Sign in</h3>
                <div className="form-group">
                    <label>Email address</label>
                    <input onChange={(e)=>{this.setState({email:e.target.value})}} type="email" className="form-control" placeholder="Enter email" />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input onChange={(e)=>{this.setState({password:e.target.value})}} type="password" className="form-control" placeholder="Password" />
                </div>
                <span onClick={this.props.signIn.bind(this,this.state.email, this.state.password)} className="btn btn-sm btn-primary fb-btn-login">Login</span>
                <span onClick={this.props.changeRoute.bind(this,"SIGN_IN_PHONE")}className="btn btn-sm btn-success fb-btn-login">Login with Phone</span><br/>

                <span onClick={this.props.changeRoute.bind(this,"PROFILE")} className="btn btn-sm btn-danger fb-btn-login">Login with Google</span>
                <span onClick={this.props.changeRoute.bind(this,"PROFILE")} className="btn btn-sm btn-info fb-btn-login">Login with Google Popup</span><br/>

                <a onClick={this.props.changeRoute.bind(this,"REGISTER")} className="text text-danger fb-btn-login">Register</a>  
                <a onClick={this.props.changeRoute.bind(this,"FORGET_PASS")} className="text text-success fb-btn-login">Forget password</a>
            </form>
        );
    }
}

export default SignIn;