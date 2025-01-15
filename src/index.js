import React from 'react';
import ReactDOM from 'react-dom/client';
import './components/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router';

import Home from './components/home';
import About from './components/about';
import Gallery from './components/gallery';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Router>
    <Routes>
      <Route element={<Home />} path="/" />
      <Route element={<About />} path="/about" />
      <Route element={<Gallery />} path="/gallery" />
    </Routes>
  </Router>
  </React.StrictMode>
);

