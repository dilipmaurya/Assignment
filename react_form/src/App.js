import React, { Component } from 'react';
import ReactDom from 'react-dom';
import Form from './Form';
import './formstyle.css'

class App extends Component {
	constructor(props){
		super(props);
		this.state={
			name:'',
			age:0
		}
	}

	submitted_data = (name, age) =>{
     this.setState({name:name});
     this.setState({age:age});
    }

  render(){
    return(
      <div className="container">
      <Form click={this.submitted_data} />

     <h4>Name: {this.state.name}</h4>
     <h4>Age: {this.state.age}</h4>
     
      </div>

      )
  }
}


export default App;
