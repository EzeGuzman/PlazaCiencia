import React from 'react'

const Project = () => {
  return (
    <body>
    <header>
        <div class="container__menu">
            <div class="logo">
            </div>
            <div class="menu">
                <i class="fas fa-bars" id="btn_menu"></i>
                <div id="back_menu"></div>
                <nav id="nav">
          
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
                    <h1>kkkkk</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate quo nostrum eligendi sequi iste quae voluptates assumenda nemo odit cum!</p>
                    <input type="button" value="Leer Más"/>
                </div>
                <div class="svg">
                </div>
            </div>
        </div>
    </main>
    <script src="js/script.js"></script>
</body>
  )
}

export default Project