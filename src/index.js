import React from 'react';
import { Carts } from './Context/Cart';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Carts>
    <App />
    </Carts>

  </React.StrictMode>
);
