import React, { useEffect, useState } from 'react';
import Navbar from './navbar';
import { Link } from 'react-router-dom';

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    try {
      const response = await fetch(
        `https://fakestoreapi.com/products`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        },
      );
      const result = await response.json();
      setProducts(result);
    } catch (err) {
      console.log(err);
    }
  };

  console.log("data products", products);

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10 col-xl-12">
            <div className="header mt-md-3">
              <div className="header-body">
                <h3 className="header-pretitle">
                  Products
                </h3>
              </div>
            </div>
          </div>
        </div>
        {products.map((data) => {
          return (

            <div className='row product_list g-3 mb-3' key={data.id}>
              <div className='col-md-4 mb-3'>
                <Link to={"/productdetails"} state={data}>
                    <div className="product_card">
                        <div className="product_image">
                            <img src={data.image} alt="Product" />
                        </div>
                        <h3 className="product-title">{data.title}</h3>
                        <div className='product_price'>
                            <p className="product-description">{data.category}</p>
                            <p className="product-price">{data.price}</p>
                        </div>
                    </div>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default ProductList;
