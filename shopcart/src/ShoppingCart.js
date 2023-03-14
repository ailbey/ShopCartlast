import React, { useState } from 'react';

const items = [
  { id: 1, name: 'Item 1', price: 10 },
  { id: 2, name: 'Item 2', price: 20 },
  { id: 3, name: 'Item 3', price: 30 },
  { id: 4, name: 'Item 4', price: 40 },
  { id: 5, name: 'Item 5', price: 50 },
  { id: 6, name: 'Item 6', price: 60 },
  { id: 7, name: 'Item 7', price: 70 },
  { id: 8, name: 'Item 8', price: 80 },
  { id: 9, name: 'Item 9', price: 90 },
  { id: 10, name: 'Item 10', price: 100 },
];

const ShoppingCart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const addItemToCart = (item) => {
    setCartItems([...cartItems, item]);
    setTotalPrice(totalPrice + item.price);
  };

  const removeItemFromCart = (item) => {
    const newCartItems = cartItems.filter((cartItem) => cartItem.id !== item.id);
    setCartItems(newCartItems);
    setTotalPrice(totalPrice - item.price);
  };

  const handleAddMoney = (amount) => {
    setTotalPrice(totalPrice + amount);
  };

  const handleRemoveMoney = (amount) => {
    setTotalPrice(totalPrice - amount);
  };

  return (
    <div>
      <h2>Shopping Cart</h2>
      <p className="price">Total Price: ${totalPrice}</p>
      <div>
        <h3>Items</h3>
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              {item.name} - ${item.price}
              <button onClick={() => addItemToCart(item)}>Add to Cart</button>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3>Cart</h3>
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              {item.name} - ${item.price}
              <button onClick={() => removeItemFromCart(item)} >Remove from Cart</button>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3>Money</h3>
        <button onClick={() => handleAddMoney(10)} className="button">Add $10</button>
        <button onClick={() => handleAddMoney(20)} className="button">Add $20</button>
        <button onClick={() => handleAddMoney(30)} className="button">Add $30</button>
        <button onClick={() => handleAddMoney(40)} className="button">Add $40</button>
        <br />
        <button onClick={() => handleRemoveMoney(10)} className="button">Remove $10</button>
        <button onClick={() => handleRemoveMoney(20)} className="button">Remove $20</button>
        <button onClick={() => handleRemoveMoney(30)} className="button">Remove $30</button>
        <button onClick={() => handleRemoveMoney(30)} className="button">Remove $40</button>
        </div>
        </div>)
        }

        export default ShoppingCart;
