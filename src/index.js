import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// Hay que instalarla, no viene en react:
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
