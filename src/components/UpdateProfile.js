import React,{Component} from 'react';

class UpdateProfile extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="col-md-6 offset-md-3 fb-login">
                <h1 className="jumbotron-heading">Change your profile</h1>
                <form className="">
                    <div className="form-group">
                    <label>Displayname</label>
                    <input type="text" className="form-control" placeholder="Enter fullname" />
                    </div>
                    <div className="form-group">
                    <label>PhotoURL</label>
                    <input type="text" className="form-control" placeholder="Enter photoURL" />
                    </div>
                    <span onClick={this.props.changeRoute.bind(this,"PROFILE")} className="btn btn-primary btn-sm fb-btn-login">Submit</span>   
                    <a onClick={this.props.changeRoute.bind(this,"PROFILE")} className="text text-success">Your Profile</a>
                </form>
            </div>
        );
    }
}

export default UpdateProfile;