import './App.css';
import Task from './task';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Emp from './emp';
import Update from './update';
import Signin from './login';
import Register from './register';

function App() {
  return (
    <div className="App">
    <Router>
        <Route exact path="/" component={Signin} />
        <Route exact path="/task" component={Task} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/update/:id" component={Update} />
        <Route exact path="/bookingdetails" component={Emp} />
        
      </Router>
    </div>
  );
}

export default App;
