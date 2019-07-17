import React, {Component} from 'react'
import './formstyle.css'


class Form extends Component{
	constructor(props){
		super(props);
		this.state = {
			name : '',
			age : 0
		};
		this.handleChange_age=this.handleChange_age.bind(this);
		
		this.handleChange_name=this.handleChange_name.bind(this);
	}
	handleChange_name(event) {
    this.setState({name: event.target.value});
  }

  handleChange_age(event) {
    this.setState({age: event.target.value});
  }
  foo = (event)=>
  {
  	event.preventDefault();
  	this.props.click(this.state.name, this.state.age);
  	
  }
	render(){
		return(

			<div className="">
			<form onSubmit={this.foo}>
            <span className="form">
            <h3>User Form</h3>
            </span>
			<span id="name">
			<label>
			Name:
			</label>
			</span>
			<input type="text" placeholder="Name" value ={this.state.name} onChange={this.handleChange_name} required/>

			<span id="age">
			<label>
			<br/>
			<br/>
			Age:
			</label>
			</span>
			<input type="number" placeholder="Age" value = {this.state.age} onChange={this.handleChange_age} required/>
			<br/>
			<br/>
			<span id="submit">
			<input type="submit" value="submit"/>
			</span>
			</form>
			</div>
			)
	}
}

export default Form