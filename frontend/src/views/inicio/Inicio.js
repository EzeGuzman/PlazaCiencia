import React, { useEffect } from 'react';
import Hero from './Hero/Hero.jsx';
import Partners from './Partners/Partners.jsx';
import New from './New/New.jsx';

const Inicio = () => {
  useEffect(() => {
    document.title = 'Plaza Ciencia';
  }, []);

  return (
    <div>
      <Hero />
      <Partners />
      <New />
    </div>
  );
};

export default Inicio;
