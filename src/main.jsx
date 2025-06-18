import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

// Render the main App component into the root element in index.html
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);