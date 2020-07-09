import React from 'react';

const Calculator = (props) => {
    return <form name='calculator'>
        Number of Geese: <input type='number' min="0" max="1000" name="geese" value={props.numberOfGeese} onChange={(e) => props.setNumberOfGeese(e.target.value)}/><br/>
        Bags of Corn: <input type='number' min="0" max="1000" name="sacks" value={props.sacksOfCorn} onChange={(e) => props.setSacksOfCorn(e.target.value)}/><br/>
        <button  onClick={props.handleCalculate}>Calculate</button>
   </form>;
}

export default Calculator;
