import React,{Component} from 'react';

class Register extends Component{
    constructor(props){
        super(props);
        this.state = {
            email: "",
            password: "",
            repassword: ""
        };
    }
    render(){
        return(
            <form className="col-md-6 offset-md-3 fb-login">
                <h3 className="text-center">Register</h3>
                <div className="form-group">
                    <label>Email address</label>
                    <input onChange={(e)=>{this.setState({email:e.target.value})}} type="email" className="form-control" placeholder="Enter email" />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input onChange={(e)=>{this.setState({password:e.target.value})}} type="password" className="form-control" placeholder="Password" />
                </div>
                <div className="form-group">
                    <label>Password Confirm</label>
                    <input onChange={(e)=>{this.setState({repassword:e.target.value})}} type="password" className="form-control" placeholder="Password confirm" />
                </div>
                <span onClick={this.props.signUp.bind(this,this.state.email, this.state.password, this.state.repassword)} className="btn btn-success fb-btn-login">Register</span>   
                <a onClick={this.props.changeRoute.bind(this,"SIGN_IN")} className="text text-primary">Sign in</a>
            </form>
        );
    }
}

export default Register;