import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import Home from './pages'
import Favorites from './pages/Favorites';
import Details from './pages/Details';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Details/>
  </React.StrictMode>
);


