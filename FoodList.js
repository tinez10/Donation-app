import React from 'react';

function FoodList({ foodItems }) {
  return (
    <div>
      <h2>Donated Food Items</h2>
      <ul>
        {foodItems.map((item, index) => (
          <li key={index}>
            <strong>{item.foodName}</strong> - {item.quantity} by {item.donorName}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FoodList;
