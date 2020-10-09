import React, {Component} from 'react';
import axios from 'axios';
import { BrowserRouter,Route, Link } from 'react-router-dom';


class Signup extends Component
{
    constructor(props){
        super(props);
        this.state = {
            email:"",
            password:"",
            phone:"",
            address:"",
        }
    }

    handleInputChange = event =>
    {
        this.setState({[event.target.name]:event.target.value});
        console.log(this.state);
    }
    
    handleSubmit = event => 
    {   
        event.preventDefault();//to prevent default nature

        axios.post('http://localhost/ci_eshop/Signup/savedata',{
            email:this.state.email,
            password:this.state.password,
            phone:this.state.phone,
            address:this.state.address
                 
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
            <div className="signupPage">
            <form>
                <h3>Sign Up</h3>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" name="email" value={this.state.name} onChange={this.handleInputChange} className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" name="password" value={this.state.password} onChange={this.handleInputChange} className="form-control" placeholder="Enter password" />
                </div>
                <div className="form-group">
                    <label>Phone no</label>
                    <input type="text" name="phone" value={this.state.phone} onChange={this.handleInputChange} className="form-control" placeholder="Enter Phone no" />
                </div>
                <div className="form-group">
                    <label>Address</label>
                    <input type="textarea" name="address" value={this.state.address} onChange={this.handleInputChange} className="form-control" placeholder="Enter Address" />
                </div>
                <button type="submit" className="btn btn-primary btn-block" onClick={this.handleSubmit}>Submit</button>
                
            </form>
            </div>
        );
    }
}
export default Signup;