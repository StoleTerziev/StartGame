import React from 'react';
import {colors} from './App'

const PlayNumber = props => (

    <button  
    className="number" 
    style={{backgroundColor:colors[props.status]}}
    onClick={()=> props.onClick(props.number,props.status)}>
        {props.number}
        </button>
);

export default PlayNumber; 