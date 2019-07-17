import React,{ Component } from 'react';
import Users from './Users';
import axios from 'axios';
import './Info.css';


class Info extends Component {
    state = {
        users: [],
    }
     
    deluser = (id)=>{
      const users = this.state.users;
      users.splice(id-1,1);
      this.setState({
        users: users
      });
    }

    updateUserArr = (state)=>{
      const users = this.state.users;
      users[state.id-1].name = state.name;
      users[state.id-1].email = state.email;
      users[state.id-1].phone = state.phone;
      users[state.id-1].website = state.website;
      this.setState({
          users: users
      });
    }
    
    componentDidMount(){
      axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
         this.setState({users : response.data});
          //console.log(response); 
      });
    }
  
    render () {
        const users = this.state.users.map(user=>{
            return <Users 
            id={user.id}
            name={user.name}
            email={user.email} 
            phone={user.phone} 
            website={user.website}
            username={user.username} 
            deluser = {this.deluser}
            updateUserArr={this.updateUserArr}
            />
        });
        return (
            <div>
              <section className="Infos">
                  {users}  
              </section>
            </div>
        );
    }
}

export default Info;