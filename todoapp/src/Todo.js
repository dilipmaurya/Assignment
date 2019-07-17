import React, {Component} from 'react'


class Todo extends Component{
	constructor(props){
		super(props);
		this.state={
			Name: '',
			Priority: 0,
			Time : '',
			Status: ''
		}
		this.handleChange_name=this.handleChange_name.bind(this);
		this.handleChange_priority=this.handleChange_priority.bind(this);
		this.handleChange_time=this.handleChange_time.bind(this);
		this.handleChange_status=this.handleChange_status.bind(this);
	}

  handleChange_name(event) {
    this.setState({Name: event.target.value});
  }

  handleChange_priority(event) {
    this.setState({Priority: event.target.value});
  }
  handleChange_time(event) {
    this.setState({Time: event.target.value});
  }

  handleChange_status(event) {
    this.setState({Status: event.target.value});
  }

  items = ()=>{
  	
  	this.props.data(this.state.Name, this.state.Priority, this.state.Status, this.state.Time);
  	event.preventDefault();
  }
	
	render(){
		return(
              
              <div>
               <h3>Todo List</h3>
              <form onSubmit={this.items}>
              
              <span>
              <label>Name:
              </label>
              <input type="text" placeholder="ABC" onChange={this.handleChange_name} required/>
              </span>

               <br/>
               <br/>

               <span>
              <label>Priority:
              </label>
              <input type="number" placeholder="1" onChange={this.handleChange_priority} required/>
              </span>

               <br/>
               <br/>

               <span>
              <label>Time:
              </label>
              <input type="text" placeholder="2 Hours" onChange={this.handleChange_time} required/>
              </span>

               <br/>
               <br/>

               <span>
              <label>Status:
              </label>
              <input type="text" placeholder="Done" onChange={this.handleChange_status} required/>
              </span>

               <br/>
               <br/>

              <span>
              <input type="submit" value="submit"/>
              </span>
              </form>

              </div>
			)
	}
}
export default Todo;