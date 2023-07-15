import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Transaction from './components/home/Transaction';
import Charitycard from './components/home/Charitycard';
import Search from './components/home/Search';
import CharityPage from './components/home/CharityPage';
import Graph from './components/home/Graph';
import Landing from './components/home/Landing';
import Home from './components/home/Home';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Home></Home>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals