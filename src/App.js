import React, {useState} from 'react';
import Calculator from './components/Calculator';
import './App.css';
import { calculateTrips } from './TripCalculator';

function App(props) {

  const [numberOfGeese, setNumberOfGeese] = useState(0);
  const [sacksOfCorn, setSacksOfCorn] = useState(0);
  const [totalCost, setTotalCost] = useState(0);
  
  const formatter = new Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: 'GBP'
  });


  const handleCalculate = (event) =>{
    event.preventDefault();

    const result = calculateTrips(numberOfGeese, sacksOfCorn);

    setTotalCost(result.length * 0.25);
  }

  return (
    <div className="App">
      <Calculator handleCalculate={handleCalculate} numberOfGeese={numberOfGeese} setNumberOfGeese={setNumberOfGeese} sacksOfCorn={sacksOfCorn} setSacksOfCorn={setSacksOfCorn}/>
      <div>
        Total Cost: {formatter.format(totalCost)}
      </div>
    </div>
  );
}

export default App;
