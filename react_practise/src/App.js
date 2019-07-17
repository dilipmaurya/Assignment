import React, { Component } from 'react';
import './App.css'

import Person from './Person/Person'
class App extends Component{
  state = {
    persons : [
    {name : "Dilip", age : 21},
    {name : "Manas", age:22},
    {name:"Priyanka", age: 21}

    ]
  }
  handlename= ()=>{
    this.setState({
    persons : [
    {name : "Dilip", age : 21},
    {name : "Anurag", age:30},
    {name:"Priyanka", age: 21}

    ], 
    show : true
    })
  }

  render(){
    return(
      <div>
      {this.state.persons.map( person => 
  <Person name={person.name} age ={person.age} />
  
)}
      </div>
      );
       
    
  }
}

export default App;
