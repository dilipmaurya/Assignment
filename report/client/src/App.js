import React, {Component} from 'react';

import logo from './logo.svg';
import './App.css';


// function searching(term){
// return (x)=>{
//   return x.description.toString().toLowerCase().includes(term.toString().toLowerCase()) || !term;
// }

//}
class App extends Component {

constructor(){
  super()
  this.state = {
    data:[],
    term:'',
    recent:[],
    priorityClicked:false,
    click:true,
    filtercost:[],
    filterdate:[],
    check:false,
    search:false,
    publish:false
  }
}


  // componentDidMount() {
  //   axios.get('')('http://localhost:5001/api/data')
  //   .then(res => {
  //     this.setState({data:res.data});
  //     console.log(this.state.data);
  //   })
  //  // console.log(this.state.items)
  // }

  // componentDidMount() {
  //   fetch('http://localhost:5001/api/data/recent')
  //   .then(response => response.json())
  //   .then(result => {this.setState({recent:result});
  //   });

  //  // console.log(this.state.items)
  // }

  componentDidMount() {
    fetch('http://localhost:5001/api/data')
    .then(response => response.json())
    .then(result => {this.setState({data:result});
    });

   // console.log(this.state.items)
  }
//   searching = (term)=>{
// return (x)=>{
//   return x.description.toLowerCase().includes(term.toLowerCase()) || !term;
// }

// }

  handleChange = (event)=>{
    
    fetch('http://localhost:5001/api/data/'+event.target.value)
    .then(response=>response.json())
    .then(result =>{this.setState({data:result});
  })
    
  }

// sortbycost = ()=>{
//   fetch('http://localhost:5001/api/data/cost/')
//   .then(response => response.json())
//   .then(result => {this.setState({data:result});
// });
// }
  // sortpriority= ()=> {

  //   const items = this.state.data;
  //   const prop = this.state.priorityClicked;
  //   function compare(a, b) {
  //     const priorityA = parseInt(a.priority, 10);
  //     const priorityB = parseInt(b.priority, 10);

  //     let comparison = 0;
  //     if (priorityA > priorityB) {
  //       comparison = 1;
  //     } else if (priorityA < priorityB) {
  //       comparison = -1;
  //     }
  //     return comparison;
  //   }
  //   items.sort(compare);
    
  //     items.reverse();
  //   this.setState({
  //     data: items,
     
  //   });
  // }

sortbycost = ()=>{
const data = this.state.data;
function compare(a,b){
if(parseInt(a.cost)<parseInt(b.cost))
return -1;
if(parseInt(a.cost)>parseInt(b.cost))
return 1;
else
return 0;
}

data.sort( compare );
this.setState({
  data:data
})
}

 sortbypublishedDate = ()=> {

const data = this.state.data;
    data.sort((a, b) =>  new Date(a.publishedDate) > new Date(b.publishedDate) ? 1 :-1);
    
    
   
   this.setState({
    data:data
   })
}

recent =  ()=>{
  let click = this.state.click;
  let check = this.state.check;
  let search = this.state.search;
   fetch('http://localhost:5001/api/data/recent')
    .then(response => response.json())
    .then(result => {this.setState({recent:result});
    });
  this.setState({
     click: !click,
     check:!check,
     search:!search
  })
}

filtercost = (event)=>{
  let click = this.state.click;
  let check = this.state.check;
  let min = event.target.elements.min.value;
  let max = event.target.elements.max.value;
  let cost = [];
  cost = this.state.data.filter( item=> {
    return ((item.cost >= min) && (item.cost <= max))
  })
  this.setState({
    filtercost:cost,
    click:!click,
    check:!check

  })
 
 event.preventDefault();
}

filterpublisheddate = (event)=>{
  let mindate = event.target.elements.mindate.value;
  let maxdate = event.target.elements.maxdate.value;
  let click = this.state.click;
  let check = this.state.check;
  let publish = this.state.publish;
  let search = this.state.search;
  let publishedDate = [];
  publishedDate = this.state.data.filter( item =>{
   return((item.publishedDate >= mindate) && (item.publishedDate <= maxdate))
  })
  this.setState({
     filterdate:publishedDate,
     click:!click,
     check:!check,
     publish:!publish,
     search:!search
  })
  event.preventDefault();
}

render(){

return(

  <div>
   <div className="container">
   {console.log(this.state.recent)}
   <input type="text" id = "search"className="input" onChange={this.handleChange} placeholder="Search..."/>
   <br/>
   <br/>
   <button onClick={this.sortbycost}>SortByCost</button>
   <button onClick={this.sortbypublishedDate} >sortbypublishedDate</button>
   <button onClick={this.recent}>RecentSearch</button>
   <br/>

   <div>
   <h4>Filter By cost Range</h4>
   <form onSubmit={this.filtercost}>
   Range<input type="number" name="main" id="min"/>
   <input type="number" name="max" id="max"/>
   <input type="submit" value="filteredcost"/>
   </form>
  </div> 

  <div>
   <form onSubmit={this.filterpublisheddate}>
   Range<input type="date" name="mindate" id="mindate"/>
   <input type="date" name="maxdate" id="maxdate"/>
   <input type="submit" value="filterpublisheddate"/>
   </form>
  </div> 
   
   </div>
   <div className="style">
   
   {  this.state.click === true ? this.state.data.map(items =>

    <div className="App">

    <img src={"https://via.placeholder.com/600/24f355"} width="280" height="200"/>
    <p> <b>{items.title}</b></p>
    <p>{items.description}</p>
    <p>{items.publishedDate}</p>
    <p>{items.cost} </p>

    </div>

   )
   :null
  }
  </div>

  <div className="style">
   
   {  this.state.check === true ? this.state.filtercost.map(items =>

    <div className="App">

    <img src={"https://via.placeholder.com/600/24f355"} width="280" height="200"/>
    <p> <b>{items.title}</b></p>
    <p>{items.description}</p>
    <p>{items.publishedDate}</p>
    <p>{items.cost} </p>

    </div>

   )
   :null
  }
  </div>


<div className="style">
   
   {  this.state.publish === true ? this.state.filterdate.map(items =>

    <div className="App">

    <img src={"https://via.placeholder.com/600/24f355"} width="280" height="200"/>
    <p> <b>{items.title}</b></p>
    <p>{items.description}</p>
    <p>{items.publishedDate}</p>
    <p>{items.cost} </p>

    </div>

   )
   :null
  }
  </div>


  {  this.state.search=== true ? this.state.recent.map(items =>

    <div>
   <ul>
    <li>{items.recent} </li>
  </ul>
    </div>

   )
   :null
  }


  </div>

  )}

}

export default App;
