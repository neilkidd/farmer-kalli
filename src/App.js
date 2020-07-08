import React, {useState} from 'react';
import Calculator from './components/Calculator';
import './App.css';
import calculateCost from './TripCalculator';

function App(props) {

  const [sacksOfCorn, setSacksOfCorn] = useState(0);
  const [totalCost, setTotalCost] = useState(0);
  
  const formatter = new Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: 'GBP'
  });


  const handleCalculate = (event) =>{
    event.preventDefault();
    const result = calculateCost(parseInt(sacksOfCorn));
    setTotalCost(result);
  }

  return (
    <div className="App">
      <Calculator handleCalculate={handleCalculate} sacksOfCorn={sacksOfCorn} setSacksOfCorn={setSacksOfCorn}/>
      <div>
        Total Cost: {formatter.format(totalCost)}
      </div>
    </div>
  );
}

export default App;
