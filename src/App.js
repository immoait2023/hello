import React, { useState } from 'react';
import './App.css';

function SubscriptionApp() {
  const [sliderValue, setSliderValue] = useState(1);
  
  const stripePrices = {
    1: "Preis für 24+ Monate",
    2: "Preis für 12+ Monate",
    3: "Preis für 6+ Monate",
    4: "Preis für 3+ Monate"
  };
  
  const stripeLinks = {
    1: "Link für 24+ Monate",
    2: "Link für 12+ Monate",
    3: "Link für 6+ Monate",
    4: "Link für 3+ Monate"
  };

  const handleSliderChange = (event) => {
    setSliderValue(event.target.value);
  };

  const handleRent = () => {
    window.location.href = stripeLinks[sliderValue];
  };

  return (
    <div style={{ width: '100%' }}>
      <label><b>Mietoption</b></label>
      <input 
        type="range" 
        min="1" 
        max="4" 
        value={sliderValue} 
        onChange={handleSliderChange} 
        style={{ 
          width: '100%', 
          borderRadius: '20px', 
          border: '4px solid black', 
          outline: 'none', 
          appearance: 'none',
          '--value': sliderValue
        }}
        className="custom-slider"
      />

      <div id="mietdauer-labels">
        {`Mindestmietdauer: ${stripePrices[sliderValue]}`}
      </div>
      <div>
        {stripePrices[sliderValue]} mtl. inkl. MwSt.
      </div>
      <button onClick={handleRent} style={{ marginTop: '10px' }}>Mieten</button>
    </div>
  );
}

export default SubscriptionApp;
