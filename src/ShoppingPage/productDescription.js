import React, { useState } from 'react';
import Navbar from './navbar';
import { useLocation, useNavigate } from 'react-router-dom';

function ProductDescription() {
  const location = useLocation();
  const data = location.state;
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();

  console.log('from the id data', data);

  const addToCart = () => {
    const updatedCartItems = [...cartItems, data];
    setCartItems(updatedCartItems);
    navigate('/productcart', { replace: true, state: updatedCartItems });
  };

  return (
    <>
    <Navbar />
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12 col-lg-10 col-xl-12">
          <div className="header mt-md-3">
            <div className="header-body">
              <h3 className="header-pretitle">
                Product Details
              </h3>
            </div>
          </div>
        </div>
      </div>

      <div className='row description_list d-flex flex-row g-3 mb-3' key={data.id}>
        <div className='col-md-6 mb-3'>
          <div className="description_card">
            <div className="description_image">
              <img src={data.image} alt="Product" />
            </div>
            <div className='description_price'>
              <p className="description-priced">{data.price}</p>
            </div>
          </div>
        </div>
        <div className='col-md-6 mb-3'>
          <div className="description_card_text">
            <p className="description-text">Description</p>
            <h3 className="description-title">{data.title}</h3>
            <p className="description-description">{data.description}</p>
            <button type='button' className='btn-description' onClick={addToCart}>
              ADD TO CART
            </button>          
        </div>
        </div>
      </div>
    </div>
  </>

  );
}

export default ProductDescription;
