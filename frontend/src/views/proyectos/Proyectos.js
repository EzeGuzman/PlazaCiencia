import React from 'react';
import Ciencia from './images/ciencia.png';
import IKO from './images/IKO.png';
import Impresora from './images/Impresora.png';
import Maker from './images/maker.png';
import Programacion from './images/programacion.png';
import Robotin from './images/robotin.png';
import './css/estilos.css';

const Proyectos = () => {
  return (
    <>
      <div class="container__cover">
        <div class="cover">
          <div class="text">
            <h1>IKO</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
              itaque consequatur eius perspiciatis! Debitis quod dignissimos
              distinctio in dolorum maxime! Nam deleniti expedita ratione?
              Exercitationem placeat voluptatum itaque alias fugit.
            </p>
          </div>
          <div class="svg">
            <img src={IKO} alt="" />
          </div>
        </div>
      </div>
      <div class="container__cover">
        <div class="cover">
          <div class="text">
            <h1>Robotica Para La Inclusion</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
              itaque consequatur eius perspiciatis! Debitis quod dignissimos
              distinctio in dolorum maxime! Nam deleniti expedita ratione?
              Exercitationem placeat voluptatum itaque alias fugit.
            </p>
          </div>
          <div class="svg">
            <img src={Robotin} alt="" />
          </div>
        </div>
      </div>
      <div class="container__cover">
        <div class="cover">
          <div class="text">
            <h1>Espacio Maker</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
              itaque consequatur eius perspiciatis! Debitis quod dignissimos
              distinctio in dolorum maxime! Nam deleniti expedita ratione?
              Exercitationem placeat voluptatum itaque alias fugit.
            </p>
          </div>
          <div class="svg">
            <img src={Maker} alt="" />
          </div>
        </div>
      </div>
      <div class="container__cover">
        <div class="cover">
          <div class="text">
            <h1>Programacion Y Live Conding</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
              itaque consequatur eius perspiciatis! Debitis quod dignissimos
              distinctio in dolorum maxime! Nam deleniti expedita ratione?
              Exercitationem placeat voluptatum itaque alias fugit.
            </p>
          </div>
          <div class="svg">
            <img src={Programacion} alt="" />
          </div>
        </div>
      </div>
      <div class="container__cover">
        <div class="cover">
          <div class="text">
            <h1>Impresion 3D</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
              itaque consequatur eius perspiciatis! Debitis quod dignissimos
              distinctio in dolorum maxime! Nam deleniti expedita ratione?
              Exercitationem placeat voluptatum itaque alias fugit.
            </p>
          </div>
          <div class="svg">
            <img src={Impresora} alt="" />
          </div>
        </div>
      </div>
      <div class="container__cover">
        <div class="cover">
          <div class="text">
            <h1>Ciencia Y Movimiento</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
              itaque consequatur eius perspiciatis! Debitis quod dignissimos
              distinctio in dolorum maxime! Nam deleniti expedita ratione?
              Exercitationem placeat voluptatum itaque alias fugit.
            </p>
          </div>
          <div class="svg">
            <img src={Ciencia} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Proyectos;
