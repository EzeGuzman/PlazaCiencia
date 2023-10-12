import React, { useEffect } from 'react';
import Hero from './Hero/Hero.jsx';
import Partners from './Partners/Partners.jsx';


const Inicio = () => {
  useEffect(() => {
    document.title = 'Plaza Ciencia';
  }, []);

  return (
    <div>
      <Hero />
      <Partners />

    </div>
  );
};

export default Inicio;
