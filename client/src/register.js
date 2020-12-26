import './style.css';
import React, {Component} from 'react';
import { Link } from "react-router-dom";

class Register extends React.Component {

  constructor() {
    super();

    this.state = {
      username:'',
      password:''


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
    alert("Registered Successfully!")
    //this.props.history.push('/');
    event.preventDefault();
    console.log(this.state)

    const data = {  username:this.state.username ,password:this.state.password }
    
    fetch('http://localhost:4000/admin/register', { method: 'POST', 

    body: JSON.stringify(data), 

    headers:{ 'Content-Type': 'application/json' } })

    .then(res => res.json())

    .catch(error => console.error('Error:', error))

    .then(response => console.log('Success:', response));
   }



  render() {
      const {username, password} = this.state
    return (
        <div className="body">
             <div className="home">
              <b><p className="tdx">The Family Pearl Restaurant</p></b>
            </div>
           <div class="container signin">
               <br></br>
    <p style ={{color:'white'}}><b>Already have an account? </b></p>

    <Link to="/"><button type="submit" className="submitbtn">LogIn</button></Link>
  </div>
  <br/>
        <div style ={{color:'white'}}> <b>New To Family Pearl? Create an Account </b><br/><br/></div>

        <form className='form' onSubmit={this.handleSubmit} method="user" className="right">
        <h1>Register</h1>
        <p>Please fill in this form to create an account.</p>
        <hr/>
         <label>
         <span><b>Username:</b>&emsp;&emsp;</span>
         <input type="text" name="username"  value={username} placeholder="Enter Username"onChange={this.handleChange} required/><br />
         </label>
         <label>
         <span><b>Passsword:</b>&nbsp;</span>
         <input type="password" name="password" placeholder="Enter Password" value={password} onChange={this.handleChange} required/><br />
         </label>
        <button type="submit"   className="submitbtn">Register</button>
         <p>By creating an account you agree to our <a href="#"><b>Terms & Privacy</b></a>.</p>

       </form><br/><br/>
      
     </div>
    );
  }
}

export default Register;
