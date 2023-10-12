import React from "react";
import '../../css/Project.css';
import IKOImage from './images/IKO.png';
import RobotinImage from './images/robotin.png';
import MakerImage from './images/maker.png';
import ProgramacionImage from './images/programacion.png';
import ImpresoraImage from './images/Impresora.png';
import CienciaImage from './images/ciencia.png';

const Project = () => {
    return (
        <>
            <div className="container__cover">
                <div className="cover">
                    <div className="text">
                        <h1>IKO</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid itaque consequatur eius perspiciatis! Debitis quod dignissimos distinctio in dolorum maxime! Nam deleniti expedita ratione? Exercitationem placeat voluptatum itaque alias fugit.</p>
                    </div>
                    <div className="svg">
                        <img src={IKOImage} alt="IKO" />
                    </div>
                </div>
            </div>
            <div className="container__cover">
                <div className="cover">
                    <div className="text">
                        <h1>Robotica Para La Inclusion</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid itaque consequatur eius perspiciatis! Debitis quod dignissimos distinctio in dolorum maxime! Nam deleniti expedita ratione? Exercitationem placeat voluptatum itaque alias fugit.</p>
                    </div>
                    <div className="svg">
                        <img src={RobotinImage} alt="Robotica Para La Inclusion" />
                    </div>
                </div>
            </div>
            <div className="container__cover">
                <div className="cover">
                    <div className="text">
                        <h1>Espacio Maker</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid itaque consequatur eius perspiciatis! Debitis quod dignissimos distinctio in dolorum maxime! Nam deleniti expedita ratione? Exercitationem placeat voluptatum itaque alias fugit.</p>
                    </div>
                    <div className="svg">
                        <img src={MakerImage} alt="Espacio Maker" />
                    </div>
                </div>
            </div>
            <div className="container__cover">
                <div className="cover">
                    <div className="text">
                        <h1>Programacion Y Live Conding</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid itaque consequatur eius perspiciatis! Debitis quod dignissimos distinctio in dolorum maxime! Nam deleniti expedita ratione? Exercitationem placeat voluptatum itaque alias fugit.</p>
                    </div>
                    <div className="svg">
                        <img src={ProgramacionImage} alt="Programacion Y Live Conding" />
                    </div>
                </div>
            </div>
            <div className="container__cover">
                <div className="cover">
                    <div className="text">
                        <h1>Impresion 3D</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid itaque consequatur eius perspiciatis! Debitis quod dignissimos distinctio in dolorum maxime! Nam deleniti expedita ratione? Exercitationem placeat voluptatum itaque alias fugit.</p>
                    </div>
                    <div className="svg">
                        <img src={ImpresoraImage} alt="Impresion 3D" />
                    </div>
                </div>
            </div>
            <div className="container__cover">
                <div className="cover">
                    <div className="text">
                        <h1>Ciencia Y Movimiento</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid itaque consequatur eius perspiciatis! Debitis quod dignissimos distinctio in dolorum maxime! Nam deleniti expedita ratione? Exercitationem placeat voluptatum itaque alias fugit.</p>
                    </div>
                    <div className="svg">
                        <img src={CienciaImage} alt="Ciencia Y Movimiento" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Project;
