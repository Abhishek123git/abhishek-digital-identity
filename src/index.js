import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const redirect = sessionStorage.redirect;
delete sessionStorage.redirect;

if (redirect && redirect !== window.location.pathname) {
  window.history.replaceState(null, null, redirect);
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

