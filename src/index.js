import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Transaction from './components/home/Transaction';
import Charitycard from './components/home/Charitycard';
import './';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <Transaction amount="558" income={false} id="oaqweo2jdq2" date="24 July" time="23:23" to="To: coke"></Transaction>
   <Transaction amount="5999" income={true} id="oaqweo2jdq2" date="24 July" time="23:23" from="From: Annoynmous"></Transaction>
    <Charitycard/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
