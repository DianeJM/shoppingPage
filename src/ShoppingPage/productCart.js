import React, { useState } from 'react';
import Navbar from './navbar';
import { useLocation } from 'react-router-dom';

function ProductCart() {
  const location = useLocation();
  const cartItems = location.state || [];
  const [items, setItems] = useState(cartItems);

  const deleteItem = (itemId) => {
    const updatedItems = items.filter((item) => item.id !== itemId);
    setItems(updatedItems);
  };

  const increaseQuantity = (itemId) => {
    const updatedItems = items.map((item) => {
      if (item.id === itemId) {
        return { ...item, quantity: (item.quantity || 1) + 1 };
      }
      return item;
    });
    setItems(updatedItems);
  };

  const decreaseQuantity = (itemId) => {
    const updatedItems = items.map((item) => {
      if (item.id === itemId && item.quantity && item.quantity > 1) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
    setItems(updatedItems);
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10 col-xl-12">
            <div className="header mt-md-3">
              <div className="header-body">
                <h3 className="header-pretitle">Shopping Continue</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="cartItems">
          {items.map((item) => (
            <div key={item.id}>
              <img src={item.image} alt="Product" />
              <h4>{item.title}</h4>
              <p>{item.description}</p>
              <p>Quantity: {item.quantity || 1}</p>
              <button onClick={() => increaseQuantity(item.id)}>+</button>
              <button onClick={() => decreaseQuantity(item.id)}>-</button>
              <button onClick={() => deleteItem(item.id)}>Delete</button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default ProductCart;
