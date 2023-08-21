import React, { useState } from 'react';
import './App.css';
import productImage from './C2-RowErg-01_1600.jpg';

function SubscriptionApp() {
  const [sliderValue, setSliderValue] = useState(1);
  
  const stripePrices = {
    1: "50€",
    2: "45€",
    3: "40€",
    4: "35€"
  };

  const stripeDurations = {
    1: "24+ Monate",
    2: "12+ Monate",
    3: "6+ Monate",
    4: "3+ Monate"
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
    <div className="subscription-container">
      <img src={productImage} alt="Produktbild" className="product-image"/>
      <h2 className="product-name">RowErg Produkt</h2>
      <input 
        type="range" 
        min="1" 
        max="4" 
        value={sliderValue} 
        onChange={handleSliderChange} 
        className="custom-slider"
      />

      <div className="output-container">
        <div className="output">
          <label>Mietpreis:</label>
          <span>{stripePrices[sliderValue]} mtl. inkl. MwSt.</span>
        </div>

        <div className="output">
          <label>Mindestmietdauer:</label>
          <span>{stripeDurations[sliderValue]}</span>
        </div>
      </div>

      <button onClick={handleRent} className="rent-button">Mieten</button>
    </div>
  );
}

export default SubscriptionApp;
