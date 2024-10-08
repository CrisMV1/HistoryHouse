import './App.css'
import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom'

import Descripcion from './unlibro/Descripcion'
import Detalle from './unlibro/Detalle'
import Resumen from './unlibro/Resumen'
import libro from '../src/assets/libro.jpg'



const Apages = () => {
  const navigate = useNavigate();

  const [activeType, setActiveType] = useState('DETALLES');  // Estado para manejar el tipo de evaluación activo
  // const [activar,    setactivar ] 
  

  const botones = () => {
    if (activeType === 'DETALLES') {
      return (
        <div className="css-detalles">

          <Detalle />

        </div>
      );
    } else if (activeType === 'DESCRIPCION') {
      return (
        <div className="css-descripcion">

          <Descripcion />
        </div>
      );
    } else if (activeType === 'RESUMEN') {
      return (
        <div className="css-resumen">

          <Resumen />
        </div>
      );
    }
  }

  return (

    <div className='contenedor-grande '>

      <div className='atras'>
        <i class="bi bi-arrow-left" id="otro" onClick={() => navigate(-1)}></i>
      </div>
      <div className='container' style= {{ backgroundColor: '#E8E0C8' }} >
        <div className='row'>
          <div className='col' style={{ marginBottom: '15px' }}>
          <button type="button" className="btn btn-dark" style= {{ backgroundColor: '#297272' }} onClick={() => setActiveType('DETALLES')} >Detalles</button>{' '}
            <button type="button" class="btn btn-dark" style= {{ backgroundColor: '#297272' }}onClick={() => setActiveType('DESCRIPCION')} >Descripcion</button>{' '}
            <button type="button" class="btn btn-dark" style= {{ backgroundColor: '#297272' }}onClick={() => setActiveType('RESUMEN')} >Resumen</button>{' '}
          </div>
        </div>
      </div>

      <div className='container' style={{height: '550px', backgroundColor: '#E8E0C8'}}>
        <div className='contenedor-portada' style= {{margin: '20px'}}>
          <div className="card" style={{ width: '15rem'}}>
            <img src={libro} className="card-img-top" alt="portada" />
            <div class="card-body">
              <h5 class="card-title">TITULO</h5>
              <div className='col'>

              <button class="btn btn-leer rounded-pill px-1 py-2" type="button" >
                  <svg class="bi ms-1" width="40" height="30" >
                    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" class="bi bi-book" viewBox="0 0 16 16" style={{verticalAlign: 'center'}}>
                     <path d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783"/>
                    </svg>
                 </svg>
              </button>
                <button class="btn btn-escuchar rounded-pill px-1 py-2" type="button">
                 <svg class= "bi ms-1" width="40" height="30" >
                 <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-headphones" viewBox="0 1 16 16">
                    <path d="M8 3a5 5 0 0 0-5 5v1h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V8a6 6 0 1 1 12 0v5a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1V8a5 5 0 0 0-5-5"/>
                 </svg>
                 </svg>
                </button>
                <button class="btn btn-play rounded-pill px-1 py-2" type="button">
                    <svg class="bi ms-1" width="40" height="30" >
                      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-play" viewBox="0 2 16 16">
                        <path d="M10.804 8 5 4.633v6.734zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C4.713 12.69 4 12.345 4 11.692V4.308c0-.653.713-.998 1.233-.696z"/>
                      </svg>
                    </svg>
                </button>
              </div>
            </div>

          </div>
        </div>


        {botones()} {/* Llama a la función botones aquí */}

      </div>

    </div>

  );
}

export default Apages
