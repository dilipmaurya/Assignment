import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {connect} from 'react-redux'
import { Icon } from 'antd'


class App extends Component {

/*
export const FETCH_PRODUCTS_PENDING = 'FETCH_PRODUCTS_PENDING';
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const FETCH_PRODUCTS_ERROR = 'FETCH_PRODUCTS_ERROR';

function fetchProductsPending() {
    return {
        type: FETCH_PRODUCTS_PENDING
    }
}

function fetchProductsSuccess(products) {
    return {
        type: FETCH_PRODUCTS_SUCCESS
        products: products
    }
}

function fetchProductsError(error) {
    return {
        type: FETCH_PRODUCTS_ERROR
        error: error
    }
}
*/


 /* 
  function fetchProducts() {
    return dispatch => {
        dispatch(fetchProductsPending());
        fetch('https://exampleapi.com/products')
        .then(res => res.json())
        .then(res => {
            if(res.error) {
                throw(res.error);
            }
            dispatch(fetchProductsSuccess(res.products);
            return res.products;
        })
        .catch(error => {
            dispatch(fetchProductsError(error));
        })
    }
}
*/

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    alert('Dilip')
     .then(response => response.json())
     .then(result => {
            this.props.dispatch({type:'ADD_DETAILS', result:result})
            // console.log(result)
          
        }) 

   
  }

  render() {
    return (
    <div>

    {this.props.display.map( (value, index)=>{

   return <div className="container">

   <div>
  <img src={"https://avatars.dicebear.com/v2/avataaars/" +value.username+ ".svg?options[mood][]=happy"} width="200" height="200"/>
   </div>

   <div>
   <p>{value.name}</p>
   <p>&#9993; {value.email}</p>
   <p>&#9742; {value.phone}</p>
   <p> &#x1F310; {value.website} </p>
   </div>

   <div>
  <Icon type="heart"/>
   
   <Icon type="edit"/>
   
   
  
   <Icon type="delete"/>
   </div>




  </div>

}
)
}
   </div>

    
)
}
}  



const mapStateToProps = state => {
return {
display: state.userdata

}
};

const mapDispatchToProps = dispatch => {
return {
edit: (payload) => dispatch({ type: 'Edit', payload }),
like:()  => dispatch({type:'Liked'}),
delete: (index) => dispatch({ type: 'Delete', index }),
};
};
/*
const mapDispatchToProps = dispatch => {
return {
updateList: (payload) => dispatch({ type: 'ADD_DETAILS', payload })
};
};

*/

export default connect(mapStateToProps)(App);
