import React, { Component } from 'react';
import './style.css'
import { Link } from "react-router-dom";
import axios from 'axios';


class Task2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name:'',
            email:'',
            salary:'',
            designation:'', 
            message:''
            };
          this.submitButton = this.submitButton.bind(this);
          this.handleChange = this.handleChange.bind(this);


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
    
        const data = { name:this.state.name, email:this.state.email, salary:this.state.salary, designation:this.state.designation}
        axios.post('http://localhost:4000/', data)
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
    const {name, email, salary, designation} = this.state
    return(
        <div >
             <div className="home">
              <b><p className="tdx">CRUD APP</p></b>
            </div>
            <h4>
                <Link to="/"><li className='notactive'>Task 1</li></Link>
                   <li  className='active'>Task 2</li>
                   <Link to="/task3" className='notactive'><li >Task 3</li></Link>
                   <Link to="/task4" className='notactive'><li >Task 4</li></Link>
            </h4>

            <form >
            <h1>Enter your Details</h1>
            <hr/><br/>
                <label><b>Name: </b></label>
                <input type="text" name="name" value={name} placeholder="Enter your full name" onChange={this.handleChange} required/><br/><br/>
                <label><b>Email: </b></label>
                <input type="email" name="email" value={email} placeholder="Enter your Email id" onChange={this.handleChange}  required/><br/><br/>
                <label><b>Salary: </b></label>
                <input type ="number" name="salary" value={salary} placeholder="Enter your current Salary" onChange={this.handleChange}  required/><br/><br/>
                <label><b>Designation: </b></label>
                <input type="text" name="designation" value={designation} placeholder="Enter your designation" onChange={this.handleChange}  required/><br/><br/>
                <button type="submit" className="submitbtn" onClick={this.submitButton}> Submit</button> &nbsp; <Link to="/empdetails"><button className="submitbtn">Edit Employees</button></Link><br/><br/>
            </form>
        </div>
    );
}
}

export default Task2;