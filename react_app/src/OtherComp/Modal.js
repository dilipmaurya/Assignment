import React from 'react';
import './Modal.css';
import Backdrop from './Backdrop';
const modal = (props) =>{
    return(
        <div>
            <Backdrop showmodal={props.showmodal}/>
        <div className="Modal"
        // style={{
        //     transform: props.show ? 'translateY(0)':'translateY(-100vh)',
        //     opacity: props.show ? '1':'0'
        // }}
        >
            Edit Form: {props.children}
        </div>
        </div>
    )
};
export default modal;