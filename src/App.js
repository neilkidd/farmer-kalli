import React, {useState} from 'react';
import Calculator from './components/Calculator';
import './App.css';

function App(props) {

  const [sacksOfCorn, setSacksOfCorn] = useState(0);
  const [totalCost, setTotalCost] = useState(0);
  
  const formatter = new Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: 'GBP'
  });


  const handleCalculate = (event) =>{
    event.preventDefault();
    
    console.log(event);

    const costPerTrip = 0.25;
    let numberOfTrips = parseInt(sacksOfCorn);
    if(isNaN(numberOfTrips)){
      numberOfTrips = 0;
    }
    
    const totalCost = (numberOfTrips) * costPerTrip;

    setTotalCost(totalCost);

    console.log(totalCost);
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
