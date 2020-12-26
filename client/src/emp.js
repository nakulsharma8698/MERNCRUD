import React, { Component } from 'react';
import './style.css'
import { Link } from "react-router-dom";
import axios from 'axios';

class Emp extends Component {
    constructor(props) {
        super(props);
        this.state={
            bookings:[]
            };
          //this.deldetails = this.deldetails.bind(this);
        }
    componentDidMount() {
        const token = localStorage.getItem('token');
        if(token){
        axios.get('http://localhost:4000/getbookings/')
        .then(res => {
            this.setState({ bookings: res.data});
            console.log(res.data);
            //var length = res.length;
        })
        .catch(function (error){
            console.log(error);
        })
    }

      }
      handleLogout()
      {
        localStorage.removeItem("token");
      }
      async deldetails(id)
      {
        alert("Deleted Successfully");
        window.location.reload();
        this.props.history.push('/empdetails');
        await axios.delete('http://localhost:4000/delete/'+id)
        .then((res) => {
            
            console.log('Student successfully deleted!')
        }).catch((error) => {
            console.log(error)
        })
        //this.props.history.push('/empdetails');
      }

    render() {
        return (
            
            <div className="body">
                 <div className="home">
              <b><p className="tdx">The Family Pearl Restaurant</p></b>
            </div>
            <ul>
        <Link to='/bookingdetails'><li className='active'>Bookings</li></Link>
        <Link to='/task'><li>Add Booking</li></Link>
        <Link to="#"><li>About</li></Link>
        <Link to='/'><li style ={{float: 'right'}} onClick = {this.handleLogout}>Logout</li></Link>
       
      </ul>  
                 <h2 style={{color:"white"}}>BOOKING DETAILS</h2>
            
            <div>
                <table className="center">
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone Number</th>
                    <th>Seats</th>
                    <th>category</th>
                    <th>Action</th>
                </tr>
                
            {this.state.bookings.map(prod =>
            <tr>
                 <td>{prod.name}</td>
                 <td>{prod.email}</td>
                 <td>{prod.phone}</td>
                 <td>{prod.seats}</td>
                 <td>{prod.category}</td>
                 <td> <button className="glyphicon glyphicon-pencil" style={{background:"green", color:"white"}} onClick={() => this.props.history.push("/update/" +prod._id)}/> &nbsp;&nbsp;&nbsp;<button className="glyphicon glyphicon-trash" style={{background:"red", color:"white"}} onClick={()=> this.deldetails(prod._id)} /></td>
                

            </tr>
            )}
            </table>
                </div>
            </div>
        );
    }
}

export default Emp;