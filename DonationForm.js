import React, { useState } from 'react';

function DonationForm({ addFoodItem }) {
  const [donorName, setDonorName] = useState('');
  const [foodName, setFoodName] = useState('');
  const [quantity, setQuantity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addFoodItem({ donorName, foodName, quantity });
    setDonorName('');
    setFoodName('');
    setQuantity('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Donor Name:</label>
        <input
          type="text"
          value={donorName}
          onChange={(e) => setDonorName(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Food Name:</label>
        <input
          type="text"
          value={foodName}
          onChange={(e) => setFoodName(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Quantity:</label>
        <input
          type="text"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          required
        />
      </div>
      <button type="submit">Donate Food</button>
    </form>
  );
}

export default DonationForm;
