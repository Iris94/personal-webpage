import React, {useState, useEffect} from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css'
import Nav from './components/nav/Nav';
import Home from './components/home/Home';
import Projects from './components/projects/Projects'
import Background from './components/background/Background';
import Connect from './components/connect/Connect';

function App () {

return (
    <BrowserRouter>
      <div className='container'>
        <nav>
          <Nav />
        </nav>

        <main className='main-section'>
          <div className='section' id='home'>
            <Home />
          </div>
          <div className='section' id='code'>
            <Projects />
          </div>
          <div className='section' id='connect'>
            <Connect />
          </div>
        </main>

        <div className='background'>
          <Background />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App

