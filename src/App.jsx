import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Router from './Router';

// The root component of the application.
// It sets up the BrowserRouter for client-side routing.
function App() {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
}

export default App;