import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Transaction from './components/home/Transaction';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Transaction amount="3400" income={true} id="23k23i2j3" />
    <Transaction amount="3400" income={false} payee="baby powder" id="23l23jasf" />
  </React.StrictMode>
);