import React from 'react';
import { Nav } from './components';
import { Routes, Route } from 'react-router-dom';
//import './css/normalize.css';
import './css/App.css';

import { Inicio, Proyectos } from './views/index.js';

const App = () => {
  return (
    <>
      <header>
        <Nav />
      </header>

      <main>
        <Routes>
          <Route path="/" exact element={<Inicio />} />
          <Route path="/proyectos" exact element={<Proyectos />} />
        </Routes>
      </main>
    </>
  );
};

export default App;
