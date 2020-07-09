import React from 'react';

const Calculator = (props) => {
    return <form name='calculator'>
        Number of bags: <input type='number' min="0" max="1000" name="sacks" value={props.sacksOfCorn} onChange={(e) => props.setSacksOfCorn(e.target.value)}/>
        <button  onClick={props.handleCalculate}>Calculate</button>
   </form>;
}

export default Calculator;