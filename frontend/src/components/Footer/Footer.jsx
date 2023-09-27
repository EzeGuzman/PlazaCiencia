import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <>
      <footer className="pie">
        <div className="header">
          <div className="logo">
            <img src="logo.png" alt="" />
            <p className="logotipo">
              Secretaría de Ciencias, Tecnología y Políticas Educativas
            </p>
          </div>
        </div>

        <div className="section">
          <div>
            <h2>CITLAM</h2>
            <a href="#">Inicio</a>
            <a href="#">Contáctate con nosotros</a>
            <a href="#">Sobre nosotros</a>
          </div>
          <div>
            <h2>Contactos</h2>
            <a href="#">citlamcyt@gmail.com</a>
            <a href="#">11-4441-0798</a>
          </div>
          <div>
            <h2>Redes</h2>
            <a href="#">Instagram</a>
            <a href="#">Facebook</a>
            <a href="#">Youtube</a>
          </div>
          <div>
            <h2>Suscríbete</h2>
            <form action="">
              <input type="text" placeholder="Ingresa tu Email" />
              <button type="submit">Suscríbete</button>
            </form>
          </div>
        </div>

        <div className="derechos">
          <p>Copyright© 2023 Plaza Ciencia</p>
          <p>Privacidad, política, Términos y Condiciones</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
