import React, { useEffect } from 'react';

const Inicio = () => {
  useEffect(() => {
    document.title = 'Inicio - Plaza Ciencia';
  }, []);

  return <div>Inicio</div>;
};

export default Inicio;
