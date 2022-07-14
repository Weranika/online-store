import React from 'react';
import './global.scss';
import Header from './components/header';
import ActionAreaCard from './components/card';
import Aside from './components/aside';

function App() {
  return (
    <div>
      <Header/>
      <main>
        <Aside/>
        <ActionAreaCard/>
      </main>
    </div>
  );
}

export default App;
