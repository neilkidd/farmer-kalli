import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {};

const defaultProps = {};

/**
 * 
 */
const Calculator = (props) => {
    return <form name='calculator'>
        Number of bags: <input type='number' min="0" max="1000" name="sacks" value={props.sacksOfCorn} onChange={(e) => props.setSacksOfCorn(e.target.value)}/>
        <button  onClick={props.handleCalculate}>Calculate</button>
   </form>;
}

Calculator.propTypes = propTypes;
Calculator.defaultProps = defaultProps;
// #endregion

export default Calculator;
