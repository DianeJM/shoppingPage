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
                <a href='/'><h3 className="header-pretitle"><i class="fa fa-angle-left" aria-hidden="true"></i> Shopping Continue</h3></a>
            </div>
          </div>
        </div>
        <div className='row cart'>
        <div className='cart-left col-md-6'>
          <div className='cart-left-heading'>
            <hr className='line'/>
            <div className='cart-title'>
              <h5>Shopping cart</h5>
              <p>You have {items.length} item in your cart</p>
            </div>
          </div>
          <div className='cart-left-product'>
            <div className="cartItems">
              {items.map((item) => (
                <div key={item.id} className='d-flex flex-row justify-content-between'>
                  <div className="col-md-2 p-2"><img src={item.image} alt="Product" /></div>
                  <div className="col-md-2 p-2"> 
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                  </div>
                  <div className="col-md-2 p-2">
                    <p>Quantity: 
                    <button onClick={() => increaseQuantity(item.id)}>+</button>
                    <button onClick={() => decreaseQuantity(item.id)}>-</button>
                    <span>{item.quantity || 1}</span></p>
                  </div>
                  <div className="col-md-1 p-2"><p>${item.price}</p></div>
                  <div className="col-md-1 p-2"><button onClick={() => deleteItem(item.id)}>Delete</button></div>  
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className='cart-right col-md-6'>
          <h4 className='Card_Details'>Card Details</h4>
        </div>
        </div>
      </div>
    </>
  );
}

export default ProductCart;
