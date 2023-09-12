import React from 'react';
import img from './Hero-PC.png';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="img-container">
        <img src={img} alt="Plaza Ciencia" className="img" />
      </div>
      <div className="hero__title">
        <h2 className="title">Plaza Ciencia</h2>
        <h3 className="subtitle">
          Secretaría de Ciencias, Tecnología y <br />
          Políticas Educativas
        </h3>
      </div>
    </section>
  );
};

export default Hero;
