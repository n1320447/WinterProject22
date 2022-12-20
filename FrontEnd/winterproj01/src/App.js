import React from 'react'
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Container, Row, Col, Button, Alert, Card, Form} from 'react-bootstrap'

//export default class FormSubmission extends React.Component{

function App() {
  return (

    <div className="wrapper">
    <h1>Winter Project</h1>
    <form>
    <fieldset>
       <label>
         <p>Name</p>
         <input name="name" />
       </label>
     </fieldset>

     <fieldset>
       <label>
         <p>Password</p>
         <input name="name" />
       </label>
     </fieldset>
     
      <button type="submit" className="btn1">Submit</button>
      <button type="submit" className="btn1">Create New User</button>
     
    </form>
  </div>



    // <div className = "App-main">
    //   <div>
    //       <p className ="App-header">Winter Project</p>
    //   </div>

    //   <div>
    //   <form className ="App-userName">
    //     <label for="fname"> User Name:</label><br/>
    //     <input type="text" id = "fname" name="fname" value="John"></input><br/>
    //   </form>
    //   </div>
    // </div>
  );
}
//}

export default App;
