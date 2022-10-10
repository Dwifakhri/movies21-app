import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import index from './pages'
import Favorites from './pages/Favorites';
import Details from './pages/Details';
import App from './routes'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);


