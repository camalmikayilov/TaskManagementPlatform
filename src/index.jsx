import React from 'react';
import { createRoot } from 'react-dom';
import App from './App';
import '../src/assets/css/style.css';
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  {/* ROUTE-IN PROVIDERIDI BU */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
