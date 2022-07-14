import React from 'react';
import'./header.scss';
import Basket from './basket';

function Header() {
  return (
    <div className="App">
      <header >
        <div className="header-container">
          <div id="start-screen nonshow">
                <h1><a href="#start-screen" className="logo">Relaxation</a></h1>
                <div className="subtitle">store of relaxing furniture</div>
          </div>
          <div className='search-container'>
            <input placeholder='enter search item' type="text" className="search-input"></input>
            <div className='search-clear'></div>
          </div>
          <Basket/>
        </div>
      </header>
    </div>
  );
}

export default Header;
