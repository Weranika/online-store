import React from 'react';
import './global.scss';
import Header from './components/header';
import Aside from './components/aside';
import ArticleAreaCard from './components/article';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header/>
      <main>
        <Aside/>
        <ArticleAreaCard/>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
