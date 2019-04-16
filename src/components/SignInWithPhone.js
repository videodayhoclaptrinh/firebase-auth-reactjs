import React,{Component} from 'react';

class SignInWithPhone extends Component{
    constructor(props){
        super(props);
        this.state = {
            phoneNumber:"+84915117490",
            isCaptcha: false,
            verificationCode: null
        }
    }
    render(){
        return(
            <div className="col-md-6 offset-md-3 fb-login">
                <h3 className="text-center">Login with phone</h3>
                {
                    this.props.verificationId ?
                    <div key={this.props.verificationId + "code"}>
                        <div className="form-group">
                            <label>Code verify</label>
                            <input onChange={(e)=>{this.setState({verificationCode:e.target.value})}} type="text" className="form-control" placeholder="Code verify" />
                        </div>
                        <span onClick={this.props.submitCode.bind(this,this.state.verificationCode)} className="btn btn-sm btn-primary fb-btn-login">Sign In</span>
                    </div>
                    :
                    <div key={this.props.verificationId + "phone"}>
                        <div id="recaptcha-container"></div>
                        {
                            !this.state.isCaptcha &&
                            <div>
                                <div className="form-group">
                                    <label>Phone number</label>
                                    <input onChange={(e)=>{this.setState({phoneNumber:e.target.value})}} type="text" className="form-control" placeholder="Phone number" />
                                </div>
                                <span onClick={this.props.sendCodetoMsg.bind(this,this.state.phoneNumber)} className="btn btn-sm btn-success fb-btn-login">Get code verify</span>
                            </div>
                        }
                    </div>
                }
            </div>
        );
    }
}

export default SignInWithPhone;