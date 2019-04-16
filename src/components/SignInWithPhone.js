import React,{Component} from 'react';

class SignInWithPhone extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="col-md-6 offset-md-3 fb-login">
                <h3 className="text-center">Login with phone</h3>
                <div id="recaptcha-container"></div>
                <div className="form-group">
                    <label>Phone number</label>
                    <input type="text" className="form-control" placeholder="Phone number" />
                </div>
                <span className="btn btn-sm btn-success fb-btn-login">Get code verify</span>
                <div className="form-group">
                    <label>Code verify</label>
                    <input type="text" className="form-control" placeholder="Phone number" />
                </div>
                <span onClick={this.props.changeRoute.bind(this,"PROFILE")} className="btn btn-sm btn-primary fb-btn-login">Login</span>
            </div>
        );
    }
}

export default SignInWithPhone;