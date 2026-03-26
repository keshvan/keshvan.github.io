import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Link, Route,  HashRouter as Router, Routes } from 'react-router-dom';

import Hello from './pages/Hello';
import Info from './pages/Info'

function Home() {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>

        <nav>
          <Link to="/hello">Hello</Link> | {" "}
          <Link to="/info">Info</Link>
        </nav>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
    </header>
  )
}

function App() {
  return (
    <Router>
      <div className='App'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/hello' element={<Hello />} />
          <Route path='/info' element={<Info />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
