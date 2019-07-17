
import React from 'react'
import './Person.css'

const Person = (props)=>{
	return(
		<div className="Person">
        <p>I am {props.name} and I am {props.age} years old.</p>
        <p> {props.children} </p>
        </div>
		)
}

export default Person;