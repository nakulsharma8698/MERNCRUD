import React, { Component } from 'react';
import './style.css'
import { Link } from "react-router-dom";
import axios from 'axios';

class Update extends Component {
    constructor(props) {
        super(props);
        this.state = {
            phone:'',
            seats:'',
            category:'' 
            };
          this.submitButton = this.submitButton.bind(this);
          this.handleChange = this.handleChange.bind(this);


    }
    handleLogout()
    {
      localStorage.removeItem("token");
    }
    handleChange = (e) => {
        this.setState({
          [e.target.name]: e.target.value
        })
      }

      
    submitButton(event)
    {
        event.preventDefault();
        console.log(this.state)
        alert('Updated SuccessFully');
        this.props.history.push('/bookingdetails');
        const data = { phone:this.state.phone, seats:this.state.seats, category:this.state.category}
        axios.post('http://localhost:4000/update/'+this.props.match.params.id, data)
        .then(res => { 
          console.log(res.data);
          if(res.data){
            this.setState({ message: "Message sent successfully." });
          }
        })
    
        .catch(error => console.error('Error:', error));
    }

    render() {
        const {phone, seats, category} = this.state
        return (
            
            <div className="body">
                 <div className="home">
                 <b><p className="tdx">The Family Pearl Restaurant</p></b>
            </div>
            <ul>
            <Link to='/bookingdetails'><li>Bookings</li></Link>
        <Link to='/task'><li>Add Booking</li></Link>
        <Link to="#"><li>About</li></Link>
        <Link to='/'><li style ={{float: 'right'}} onClick = {this.handleLogout}>Logout</li></Link>
        </ul>
                 <h2 style={{color:'white'}}>Update Booking Details</h2>
                 <form >
            <h1>Update your Details</h1>
            <hr/><br/>
                <label><b>Phone Number: </b></label>
                <input  type ="text" name="phone" value={phone} placeholder="Enter Phone Number" onChange={this.handleChange} required/><br/><br/>
                <label><b>Seats: </b></label>
                <input  type ="number" name="seats" value={seats} placeholder="Enter Seats" onChange={this.handleChange} required/><br/><br/>
                <label><b>Category: </b></label>
                <select name="category"  value={category} placeholder="Enter your designation" onChange={this.handleChange} required>
                <option value="Select">Select Category</option>
                    <option value="Basic">Basic</option>
                    <option value="Gold">Gold</option>
                    <option value="Premium">Premium</option>
                    <option value="Super Premium">Super Premium</option>
                    <option value="Celebrity">Celebrity</option>
                </select><br/><br/>
                <button type="submit" className="submitbtn" onClick={this.submitButton}> Submit</button> &nbsp; <Link to="/empdetails"><button className="submitbtn">Edit Employees</button></Link><br/><br/>
            </form>
            </div>
        );
    }
}

export default Update;