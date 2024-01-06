// CartPage.jsx
import React from "react";

function CartPage() {
  const cartItems = JSON.parse(localStorage.getItem("cart")) || [];

  return (
    <div>
      <h1>Cart Page</h1>
      {cartItems.map((item) => (
        <div key={item.id}>
          <h3>{item.name}</h3>
          <img src={item.picture} alt="item picture" />
          <p>{item.description}</p>
          <p>{item.price}€</p>
        </div>
      ))}
    </div>
  );
}

export default CartPage;
