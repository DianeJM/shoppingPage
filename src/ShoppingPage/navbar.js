import React from 'react';
import { NavLink, Navigate, useNavigate } from 'react-router-dom';

export default function Navbar({ children }) {
  const user = JSON.parse(localStorage.getItem('RIFALYPUBLISHER'));
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate('/signout', { replace: true });
  };


  if (!user) {
    return (
      <Navigate
        to='/signout'
        replace
      />
    );
  }

  return (
    <nav
      className='navbar navbar-expand-lg fixed-top'
      id='topnav'>
      <div className='container'>
        <button
          className='navbar-toggler me-auto'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbar'
          aria-controls='navbar'
          aria-expanded='false'
          aria-label='Toggle navigation'>
          <span className='navbar-toggler-icon'></span>
        </button>

        <div className='x-auto'></div>

        <ul className='navbar-nav mx-auto d-none'>
          <li>
            <NavLink
              to='/'
              className='nav-link'>
              <span>Home</span>
            </NavLink>
          </li>

          <li>
            <NavLink
              to='/productcart'
              className='nav-link'>
              <span>Cart</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
