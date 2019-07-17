import React, {Component} from 'react';
import './User.css';
import Modal from './Modal';
import { Icon } from 'antd';
import Editform from './EditForm';
//const user = (props) => {
class User extends Component{
    state = {
        isLiked : false,
        show: false
    } 
    iconLike = ()=>{
        const like = this.state.isLiked;
        this.setState({
            isLiked: !like
        });
    }

    updateUser = (state)=>{

        this.props.updateUserArr(state);

    }
    iconEditHandler = (id)=>{
        //alert("I'm running"+id);
        //this.props.updateUser(id);
        const show = this.state.showmodal;
        this.setState({
            show : !show
        });
    }

    iconDeleteHandler = (id) =>{
        //alert("I'm running");
        this.props.deluser(id);
    }

    render(){
        return(
            <article className="User">
                <img src={'https://avatars.dicebear.com/v2/avataaars/' + this.props.username + '.svg?options[mood][]=happy'}></img>
                <h2>Name: {this.props.name}</h2>
                <div className="Email">Email: {this.props.email}</div>    
                <div className="Phone"> <Icon type="phone" />  {this.props.phone}</div>
                <div className="Website">Website: {this.props.website}</div>
                <div className="Icons">
                <Icon onClick={this.iconLike} type="heart" theme = { this.state.isLiked === true ? "filled" : "outlined" } />
                <Icon onClick={() => this.iconEditHandler(this.props.id)} type="edit"/>
                {this.state.show === true ? <Modal show = {this.state.show}> <Editform updateUser={this.updateUser}
                    id = {this.props.id} 
                    name= {this.props.name}
                    email= {this.props.email} 
                    phone= {this.props.phone}
                    website={this.props.website} /> </Modal> : null} 
                    <Icon onClick={()=> {this.iconDeleteHandler(this.props.id)}} type="delete" />
                </div>
            </article>
        )
    };
}

export default User;