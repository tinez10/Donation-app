import React, { useState } from 'react';
import FoodList from './components/FoodList';
import DonationForm from './components/DonationForm';
import './styles.css';


function App() {
  const [foodItems, setFoodItems] = useState([]);

  const addFoodItem = (item) => {
    setFoodItems([...foodItems, item]);
  };

  return (
    <div className="App">
      <h1>Food Donation App</h1>
      <DonationForm addFoodItem={addFoodItem} />
      <FoodList foodItems={foodItems} />
    </div>
  );
}

export default App;
