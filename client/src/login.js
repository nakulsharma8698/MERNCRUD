import './style.css';
import React, {Component} from 'react';
import axios from 'axios';
import { Link, Redirect } from "react-router-dom";

class Signin extends React.Component {

  constructor() {
    super();

    this.state = {
      username:'',
      password:'',
      token:''
      };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  handleSubmit(event) {
    event.preventDefault();
    
    //alert("Login Successful!")
   
    console.log(this.state)

    const data = { username:this.state.username,password:this.state.password }
    axios.post('http://localhost:4000/admin/login', data)

    .then(res => { 
      console.log(res.data);
      if(res.data.success)
      console.log(res.data);
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('username', res.data.username);
      this.props.history.push('/bookingdetails');
    })

    .catch(error => console.error('Error:', error));
      
   
   }

  render() {
      const {username,password} = this.state
    return (
        <div className="body">
           <div className="home">
              <b><p className="tdx">The Family Pearl Restaurant</p></b>
            </div>
           <br/><br/>
        <div className="loginpage"> <b>Welcome to Family Pearl </b><br/><br/></div>

        <form className='form' onSubmit={this.handleSubmit} method="user" >
        <h1>Login</h1>
        <p>Enter your credentials.</p>
        <hr/>
         <label>
         <span><b>Username:</b>&emsp;&emsp;</span>
         <input type="text" name="username" value={username} placeholder="Enter Username" onChange={this.handleChange} required/><br />
         </label>
         <label>
         <span><b>Passsword:</b>&nbsp;</span>
         <input type="password" name="password" placeholder="Enter Password" value={password} onChange={this.handleChange} required/><br />
         </label>
         <button type="submit" className="submitbtn">LogIn</button>
         <p>New User? <a href="#"><b> <Link to="/register">Register</Link></b></a>.</p>

       </form><br/><br/>
      
     </div>
    );
  }
}

export default Signin;
