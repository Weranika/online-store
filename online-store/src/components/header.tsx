import React from 'react';
import'./header.scss';
import Cart from './cart';
import Input from './input';

function Header() {
  return (
    <div className="App">
      <header >
        <div className="header-container">
          <div id="start-screen nonshow">
                <h1><a href="/" className="logo">Relaxation</a></h1>
                <div className="subtitle">store of relaxing furniture</div>
          </div>
          <Input/>
          <Cart/>
        </div>
      </header>
    </div>
  );
}

export default Header;
