import React from 'react'
import logo from '../Partners/logo.png'
import './New.css'

const New = () => {
  return (
    <>
  <div class="contenedor">
    <div>
      <div class="tarjeta">
        <img src={logo} alt="logo lorem" class="logo"></img>
         <div class="nombre">La Matanza</div> 
       <div class="descripcion">Municipio de la Matanza</div>
      </div>
    </div>
    <div>
      <div class="tarjeta">
        <img src={logo} alt="logo lorem" class="logo"></img>
         <div class="nombre">La Matanza</div> 
       <div class="descripcion">Municipio de la Matanza</div>
      </div>
    </div>
    <div>
      <div class="tarjeta">
        <img src={logo} alt="logo lorem" class="logo"></img>
         <div class="nombre">La Matanza</div> 
       <div class="descripcion">Municipio de la Matanza</div>
      </div>
    </div>
  </div>
  </>
  )
}

export default New