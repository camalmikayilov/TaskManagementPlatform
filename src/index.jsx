import React from 'react';
import { createRoot } from 'react-dom';
import App from './App';
import '../src/assets/css/style.css';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
