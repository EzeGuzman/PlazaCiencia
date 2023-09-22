import React from 'react'
import '../../css/Poryecto.css'
<!DOCTYPE html/>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>Landing Page Servicio Digital - MagtimusPro</title>

    <script src="https://kit.fontawesome.com/41bcea2ae3.js" crossorigin="anonymous"></script>

    <link rel="stylesheet" href="css/estilos.css">
</head>
<body>
    
    <header>

        <div class="container__menu">
            <div class="logo">
                <img src="images/logo-magtimus-v2.3-1.png" alt=""/>
            </div>
            <div class="menu">
                <i class="fas fa-bars" id="btn_menu"></i>
                <div id="back_menu"></div>
                <nav id="nav">
                    <img src="images/logo-magtimus-v2.3-1.png" alt=""/>
                    <ul>
                        <li><a href="#" id="selected">Inicio</a></li>
                        <li><a href="#">Servicios</a></li>
                        <li><a href="#">Nosotros</a></li>
                        <li><a href="#">Contactos</a></li>
                    </ul>
                </nav>
            </div>
        </div>

    </header>

    <main>
        <div class="container__cover">
            <div class="cover">
                <div class="text">
                    <h1>Ayudamos a las empresas a transformar sus negocios en plataforma digital</h1>

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate quo nostrum eligendi sequi iste quae voluptates assumenda nemo odit cum!</p>

                    <input type="button" value="Leer Más"/>
                </div>

                <div class="svg">
                    <img src="images/developer_activity.svg" alt=""/>
                </div>
            </div>
        </div>
    </main>

    <script src="js/script.js"></script>
</body>
</html>