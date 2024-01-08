import React from "react";
import { notifications } from '@mantine/notifications';

function CartPage({cartItems, setCartItems}) {
  
  const removeItem = (itemId) => {
    const filteredItems = cartItems.filter(item => {
      return item.id !== itemId;
    });
 
    setCartItems(filteredItems);
  };

  const deleteAll = () => {
    if (cartItems.length !== 0) {
    setCartItems([]);
    notifications.show({
      title: "Thanks for trying but of course you can't buy!"
    }) 
    } else {
    notifications.show({
      title: 'Cart is empty!'
    }) }
  };

  const sumCart = cartItems.reduce((sum, currentItem) => {
    return sum + parseInt(currentItem.price);
  },0);

  return (
    <div>
      <h1>Cart Page</h1>
      {cartItems.map((item) => (
        <div key={item.id}>
          <h3>{item.name}</h3>
          <img src={item.picture} alt="item picture" />
          <p>{item.description}</p>
          <p>{item.price}€</p>
          <button onClick={() => removeItem(item.id)} className="btn-delete">
              Remove item 
          </button>
        </div>
      ))}
      <h2>Total €{sumCart}</h2>
      <button onClick={() => deleteAll()} className="btn-delete">
              Buy! 
      </button>
    </div>
  );
}

export default CartPage;
