import React, { Component } from 'react';
import Todo from './Todo'

class App extends Component{

	constructor(props){
		super(props);
		this.state={
			
			list : [{Name:'Dilip', Priority:1, Time:'2:00', Status:'inprogress'}]
		}
	}
	collection = (Name, Priority, Status, Time)=>{
          

           this.state.list.push({"Name" : Name, "Priority":Priority, "Status":Status, "Time":Time});
          
}

print = ()=>{

            
      }

render(){
	return(
             
             <div className="App">
             <Todo data={this.collection} />
             <button onClick={this.print}>Click me</button> 

            const renObjData = this.state.list.map(function(data, idx) {
   return ([
       <p key={idx}>{data.Name}</p>,
       <p key={idx}>{data.Priority}</p>,
   ]);
});

          {console.log(this.state.list)}
         </div>
		)
}
}


export default App;
