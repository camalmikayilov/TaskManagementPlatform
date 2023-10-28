// Importing necessary modules
import React from 'react'; // Importing React
import { createRoot } from 'react-dom'; // Importing createRoot from react-dom
import App from './App'; // Importing the main App component
import '../src/assets/css/style.css'; // Importing CSS file
import { BrowserRouter } from 'react-router-dom'; // Importing BrowserRouter for routing

// Rendering the root component
createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App /> {/* Rendering the main App component */}
    </BrowserRouter>
  </React.StrictMode>
);