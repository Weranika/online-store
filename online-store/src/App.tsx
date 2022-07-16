import React from 'react';
import './global.scss';
import Header from './components/header';
import Aside from './components/aside';
import ArticleAreaCard from './components/article';

function App() {
  return (
    <div>
      <Header/>
      <main>
        <Aside/>
        <ArticleAreaCard/>
      </main>
    </div>
  );
}

export default App;
