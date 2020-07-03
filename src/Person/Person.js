import React from 'react';
import './Person.css';

const person = (props) => {
    return (
        <div className="Person">
            <div className="nameDelContainer flex-row-start">
             <div className="nameTxt" onClick={props.click}>{props.name}</div>
             <button onClick={props.delete}>X</button>
            </div>
            <h3>Age: {props.age}</h3>
            <p>{props.children}</p>
            <input id="inputField" onChange={props.nameChange}></input>
        </div>
    );
}

export default person;