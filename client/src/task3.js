import React, { Component } from 'react';
import './style.css'
import { Link } from "react-router-dom";
import axios from 'axios';



class Task3 extends React.Component {
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
        //console.log(this.state)
        alert("User Added Successfully");
        const data = { name:this.state.name, email:this.state.email, salary:this.state.salary, designation:this.state.designation}
        axios.post('http://localhost:4000/', data)
        .then(res => { 
          
          if(res.data){
            this.setState({ message: "Message sent successfully." });
            console.log(res.data);
          }
        })
    
        .catch(error => console.error('Error:', error));
    }
render()
{
    const {name, email, salary, designation} = this.state
    return(
        <body className="body">
             <div className="home">
              <b><p className="tdx">CRUD APP</p></b>
            </div>
            <div >
            {/*<h4>
                    <Link to="/"><li className='notactive'>Task 1</li></Link>
                    <Link to="/task2" className='notactive'><li >Task 2</li></Link>
                   <li  className='active'>Task 3</li>
                   <Link to="/task4" className='notactive'><li >Task 4</li></Link>
            </h4>*/}
            <br/><br/>
            <form >
            <h1>Enter your Details</h1>
            <hr/><br/>
                <label><b>Name: </b></label>
                <input  name="name" value={name} placeholder="Enter your full name" onChange={this.handleChange} required/><br/><br/>
                <label><b>Email: </b></label>
                <input type="email" name="email" value={email} placeholder="Enter your Email id" onChange={this.handleChange} required/><br/><br/>
                <label><b>Salary: </b></label>
                <input type ="number" name="salary" value={salary} placeholder="Enter your current Salary" onChange={this.handleChange} required/><br/><br/>
                <label><b>Designation: </b></label>
                <select name="designation"  value={designation} placeholder="Enter your designation" onChange={this.handleChange}>
                <option value="Select">Select Designation</option>
                    <option value="Front End Developer">Front End Developer</option>
                    <option value="Backend Developer">Backend Developer</option>
                    <option value="Full Stack Developer">Full Stack Developer</option>
                    <option value="SDE">SDE</option>
                    <option value="Data Scientist">Data Scientist</option>
                </select>
                <br/><br/>
                <button type="submit" className="submitbtn" onClick={this.submitButton}> Submit</button> &nbsp; <Link to="/empdetails"><button className="submitbtn">Edit Employees</button></Link><br/><br/>
            </form>
            <br/><br/>    <br/><br/>    <br/>
            </div>

        </body>
    );
}
}

export default Task3;