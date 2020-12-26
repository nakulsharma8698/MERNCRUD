import React, { Component } from 'react';
import './style.css'
import { Link } from "react-router-dom";


class Task4 extends React.Component {
    constructor(props) {
        super(props);

    }
    submitButton()
    {
        return ;
    }
render()
{
    return(
        <div >
             <div className="home">
              <b><p className="tdx">CRUD APP</p></b>
            </div>
            <h4>
                    <Link to="/"><li className='notactive'>Task 1</li></Link>
                    <Link to="/task2" className='notactive'><li >Task 2</li></Link>
                    <Link to="/task3" className='notactive'><li >Task 3</li></Link>
                   <li  className='active'>Task 4</li>
            </h4>

            <form >
            <h1>Enter your Details</h1>
            <hr/><br/>
                <label><b>Name: </b></label>
                <input type="text" placeholder="Enter your full name" /><br/><br/>
                <label><b>Email: </b></label>
                <input type="email" placeholder="Enter your Email id" /><br/><br/>
                <label><b>Salary: </b></label>
                <input type ="number" placeholder="Enter your current Salary" /><br/><br/>
                <label><b>Designation: </b></label>
                <input type="text" placeholder="Enter your designation" /><br/><br/>
                <button type="submit" className="submitbtn" onClick={this.submitButton}> Submit</button> &nbsp; <Link to="/empdetails"><button className="submitbtn">Edit Employees</button></Link><br/><br/>
            </form>

        </div>
    );
}
}

export default Task4;