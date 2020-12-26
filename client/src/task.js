import React, { Component } from 'react';
import './style.css'
import { Link } from "react-router-dom";
import axios from 'axios';


class Task extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name:'',
            email:'',
            phone:'',
            seats:'', 
            category:''
            };
          this.submitButton = this.submitButton.bind(this);
          //this.submitButtonn = this.submitButtonn.bind(this);
          this.handleChange = this.handleChange.bind(this);


    }
    handleChange = (e) => {
        this.setState({
          [e.target.name]: e.target.value
        })
      }
      handleLogout()
      {
        localStorage.removeItem("token");
      }
    submitButton(event)
    {
        event.preventDefault();
        alert("Booking Successful");
        this.props.history.push('/bookingdetails');
        console.log(this.state)
    
        const data = { name:this.state.name, email:this.state.email,  phone:this.state.phone, seats:this.state.seats, category:this.state.category}
        axios.post('http://localhost:4000/create', data)
        .then(res => { 
          console.log(res.data);
          if(res.data){
            this.setState({ message: "Message sent successfully." });
          }
        })
    
        .catch(error => console.error('Error:', error));
    }
render()
{
    const {name, email, phone, seats, category} = this.state
    return(
        <div className="body">
             <div className="home">
              <b><p className="tdx">The Family Pearl Restaurant</p></b>
            </div>
            <ul>
        <Link to='/bookingdetails'><li >Bookings</li></Link>
        <Link to='/task'><li className='active'>Add Booking</li></Link>
        <Link to="#"><li>About</li></Link>
        <Link to='/'><li style ={{float: 'right'}} onClick = {this.handleLogout}>Logout</li></Link>
       
      </ul> 
            <br/><br/>
            <form >
            <h1>Enter your Details</h1>
            <hr/><br/>
                <label><b>Name: </b></label>
                <input type="text" name="name" value={name} placeholder="Enter your full name" onChange={this.handleChange} required/><br/><br/>
                <label><b>Email: </b></label>
                <input type="email" name="email" value={email} placeholder="Enter your Email id" onChange={this.handleChange} required/><br/><br/>
                <label><b>Phone Number: </b></label>
                <input type ="text" name="phone" value={phone} placeholder="Enter Mobile Number" onChange={this.handleChange} required/><br/><br/>
                <label><b>Seats Require: </b></label>
                <input type="number" name="seats" value={seats} placeholder="Enter No. of Seats" onChange={this.handleChange} required/><br/><br/>
                <label><b>Category: </b></label>
                <select name="category"  value={category} placeholder="" onChange={this.handleChange} required>
                <option value="Select">Select Category</option>
                    <option value="Basic">Basic</option>
                    <option value="Gold">Gold</option>
                    <option value="Premium">Premium</option>
                    <option value="Super Premium">Super Premium</option>
                    <option value="Celebrity">Celebrity</option>
                </select><br/><br/>
                <button type="submit" className="submitbtn" onClick={this.submitButton}> Submit</button>
                <br/><br/><br/>
            </form>
           
        </div>

    );
}
}

export default Task;