import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Navbar from "../ShoppingPage/navbar"
import ProductList from "../ShoppingPage/productList";
import ProductDescription from "../ShoppingPage/productDescription";
import ProductCart from "../ShoppingPage/productCart";


const routes = () => {
  const isAuthenticated = localStorage.getItem("RIFALYPUBLISHER");
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<ProductList />} />
        <Route path='/productdetails' element={<ProductDescription />}></Route>
        <Route path='/productcart' element={<ProductCart />}></Route>

      </Routes>
    </BrowserRouter>
  );
};

export default routes;
