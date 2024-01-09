import React from "react";
import { notifications } from '@mantine/notifications';
import axios from "axios";


function CartPage({cartItems, setCartItems, VITE_API_URL}) {
  
  const removeItem = (itemId) => {
    const filteredItems = cartItems.filter(item => {
      return item.id !== itemId;
    });
 
    setCartItems(filteredItems);
  };

  const deleteItemFromDatabase = (itemId) => {
    return axios.delete(`${VITE_API_URL}/${itemId}`);
  };

  const deleteAll = async () => {
    if (cartItems.length !== 0) {
      try {
        // Use Promise.all to handle multiple asynchronous delete operations
        await Promise.all(cartItems.map((item) => deleteItemFromDatabase(item.id)));
        setCartItems([]); // Clear all items from the cart
        notifications.show({
          title: 'Purchase completed! You own us money!'
        });
      } catch (error) {
        console.error("Error deleting items:", error);
        notifications.show({
          title: 'Error completing the purchase!'
        });
      }
    } else {
      notifications.show({
        title: 'Cart is empty!'
      });
    }
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
