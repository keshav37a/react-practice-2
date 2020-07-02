import React from 'react';
import './Person.css';

const person = (props) => {
    return (
        <div className="Person">
            <h3 onClick={props.click}>{props.name}</h3>
            <h3>Age: {props.age}</h3>
            <p>{props.children}</p>
            <input id="inputField" onChange={props.nameChange}></input>
        </div>
    );
}

export default person;