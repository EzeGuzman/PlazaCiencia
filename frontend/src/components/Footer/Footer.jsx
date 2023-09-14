import React from 'react'
import '../../css/Footer.css'
const Footer = () => {
  return (
    <>
    <footer class="pie">
    <div class="header">
            <div class="logo">
                <img src="logo.png" alt=""/>
                <p class="logotipo">Secretaría de Ciencias, Tecnología y Políticas Educativas</p>
            </div>
        
        </div>
       
        <div class="section">
            <div>
                <h2>CITLAM</h2>
                <a href="#">Inico</a>
                <a href="#">Contactate con nosotros</a>
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
                <h2>Suscribete</h2>
                <form action="">
                    <input type="text" placeholder="Ingresa tu Email"/>
                    <button type="submit">Suscribete</button>
                </form>
            </div>
        </div>
        <div class="derechos">
            <p>Copyright©20223 Plaza CIencia</p>
            <p>Privacidad, politica, Terminos y Condiciones</p>
        </div>
    </footer>
    </>
  )
}
export default Footer