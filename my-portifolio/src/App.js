import React from 'react';
import './App.css';
import Header from './components/header/Header.jsx';
import Home from './components/home/Home.jsx';
import Skills from './components/skills/Skills.jsx';
import About from './components/about/About.jsx';

function App() {
  return (
      <>
      <Header/>
      <main className='main'>
        <Home />
         <About />
          <Skills />
      </main>
      </>
  );
}

export default App;
