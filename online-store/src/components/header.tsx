import React from 'react';
import'./header.scss';

function Header() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="logo" id="start-screen nonshow">
              <h1><a href="#start-screen" className="logo">Relaxation</a></h1>
              <div className="subtitle">store of relaxing furniture</div>
        </div>
      </header>
    </div>
  );
}

export default Header;
