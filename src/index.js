import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Transaction from './components/home/Transaction';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Landing/> */}<div className='absolute top-60 right-42'>
      <Transaction amount="5999" income={true} id="oaqweo2jdq2" date="24 July" time="23:23" from="From: Annoynmous"></Transaction>
      <Transaction amount="23999" income={true} id="oaqweo2jdq2" date="24 July" time="23:23" from="From: Annoynmous"></Transaction>
      <Transaction amount="231" income={true} id="oaqweo2jdq2" date="24 July" time="23:23" from="From: Annoynmous"></Transaction>
      <Transaction amount="358" income={true} id="oaqweo2jdq2" date="24 July" time="23:23" from="From: Annoynmous"></Transaction>
      <Transaction amount="9999" income={false} id="oaqweo2jdq2" date="24 July" time="23:23" to="To: Wikimedia"></Transaction>
      <Transaction amount="1000" income={false} id="oaqweo2jdq2" date="24 July" time="23:23" to="To: casino lmao"></Transaction>
      <Transaction amount="558" income={false} id="oaqweo2jdq2" date="24 July" time="23:23" to="To: coke"></Transaction>
      <Transaction amount="23128" income={false} id="oaqweo2jdq2" date="24 July" time="23:23" to="To: cola"></Transaction>
    </div>
  </React.StrictMode>
);
