import React, {useState} from 'react';
import Calculator from './components/Calculator';
import './App.css';
import {calculateTrips, validateRequest} from './TripCalculator';

function App(props) {

  const [numberOfGeese, setNumberOfGeese] = useState(0);
  const [sacksOfCorn, setSacksOfCorn] = useState(0);
  const [totalCost, setTotalCost] = useState(0);
  const [tripValid, setTripValid] = useState(false);
  const [trips, setTrips] = useState([]);

  const formatter = new Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: 'GBP'
  });


  const handleCalculate = (event) =>{
    event.preventDefault();

    const validationResult = validateRequest(numberOfGeese, sacksOfCorn);


    setTripValid(validationResult.valid)


    const result = calculateTrips(numberOfGeese, sacksOfCorn);

    setTrips(result)

    console.log(trips)

    setTotalCost(result.length * 0.25);
  }

  return (
    <div className="App">
      <Calculator handleCalculate={handleCalculate} numberOfGeese={numberOfGeese} setNumberOfGeese={setNumberOfGeese} sacksOfCorn={sacksOfCorn} setSacksOfCorn={setSacksOfCorn}/>
      <div>
        Your journey is  {tripValid ? "possible" : "not possible"}
      </div>
      <div>
        Total Cost: {tripValid ? formatter.format(totalCost) : 0}
      </div>
      <ul>
        {trips.map(t => {
          return <li>{t}</li>
        })}
      </ul>
    </div>
  );
}

export default App;
