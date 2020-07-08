import React, {useState} from 'react';
import './App.css';

function App(props) {

  const [totalCost, setTotalCost] = useState(0);
  
  const formatter = new Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: 'GBP'
  });

  const handleSubmit = (event) =>{
    event.preventDefault();
  };

  const Calculate = (sacksOfCorn) =>{
    const costPerTrip = 0.25;
    const totalCost = (parseInt(sacksOfCorn)+1) * costPerTrip;

    setTotalCost(totalCost);
  }

  return (
    <div className="App" onSubmit={handleSubmit}>
      <form name='calculator'>
       Number of bags: <input type='number' min="0" max="1000" name='bags' value={props.sacksOfCorn} onChange={(e) => Calculate(e.target.value)}/>
        
        
      </form>
      <div>
        Total Cost: {formatter.format(totalCost)}
      </div>
    </div>
  );
}

export default App;
