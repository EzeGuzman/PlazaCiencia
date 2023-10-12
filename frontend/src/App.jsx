import React from 'react';
import { Nav, Footer } from './components';
import { Routes, Route } from 'react-router-dom';
//import './css/normalize.css';
import './css/App.css';


import { Inicio, Project, Actividades } from './views/index.js';

const App = () => {
  return (
    <>
      <header>
        <Nav />
      </header>
      <main>
        <Routes>
          <Route path="/" exact element={<Inicio />} />

          <Route path="/proyectos" exact element={<Project />} />
          <Route path="/Actividades" exact element={<Actividades />}/>

          <Route path="/Proyectos" exact element={<Project />}/>
        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default App;
