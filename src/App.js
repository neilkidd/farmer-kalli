import React, {useState} from 'react';
import './App.css';

function App(props) {

  const [totalCost, setTotalCost] = useState(0);

  const handleSubmit = (event) =>{
    event.preventDefault();
  };

  const Calculate = (bags) =>{
    setTotalCost(bags * 25);
  }

  return (
    <div className="App" onSubmit={handleSubmit}>
      <form name='calculator'>
       Bags: <input type='number' min="0" max="1000" name='bags' value={props.bags} onChange={(e) => Calculate(e.target.value)}/>
        
        
      </form>
      <div>
        Total Cost: {totalCost}
      </div>
    </div>
  );
}

export default App;
