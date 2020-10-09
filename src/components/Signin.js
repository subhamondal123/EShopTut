import React, { Component } from "react";
import { Button,Form} from 'react-bootstrap';
import axios from 'axios';

 class Signin extends Component {
    btnClick(props) {
        window.open("/signup");
      }
      constructor(props){
          super(props);
          this.state = {
            email:"",
            password:"",
          }
        
      }
      
      handleInputChange = event =>
      {
          this.setState({[event.target.name]:event.target.value});
          
        }
        handleSubmit = event =>
        {
            event.preventDefault();
        
            axios.get('http://localhost/ci_eshop/Signup/showdata',{
                email:this.state.email,
                password:this.state.password
            })

            .then (response => {
                if(response.data.success == 1){
                    alert(response.data.msg);
                }
                else{
                    alert(response.data.msg);
                }
            })
            .catch(error => {
                console.log(error);
            });
    
              
            }
    render() {      
        return (
 
        
            <div className="signinPage">
            <form>
                <h3>Sign In</h3>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" name="email" value={this.state.email} className="form-control" placeholder="Enter email" onChange={this.handleInputChange}/>
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" name="password" value={this.state.password}  className="form-control" placeholder="Enter password" onChange={this.handleInputChange}/>
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <button type="submit" className="btn btn-primary btn-block" onClick={this.handleSubmit}>Submit</button>
                <div>
                <p className="forgot-password text-right">
                    Forgot <a href="#">password?</a>
                </p>
                </div>
                <div>
                <Button cssClass='e-link' className="btn btn-primary btn-block" onClick={this.btnClick.bind(this)}>SignUp Now</Button>
                </div>
            </form>
            </div>
        );
    }
}
export default Signin;