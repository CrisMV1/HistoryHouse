import React from 'react'
import './Stilos.css'

const Descripcion = () => {
  return (
    
      <div className="container-descripcion">
        <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12" style={{ backgroundColor: '#E8E0C8' }}>
        <h2 style={{textAlign: 'center'}}>Descripción del libro</h2>
          {/* Contenedor horizontal */}
          <div className="container-fluid objetivos-container">
            {/* Sinopsis */}
            <div className="sinopsis-box">
              <h4 className="mb-0">Sinopsis</h4>
              <p className="card-text mb-auto">
                Esta es una tarjeta más ancha con texto de apoyo debajo como introducción natural a contenido adicional. Es en esta parte que va a ir la Sinopsis.
              </p>
            </div>
          </div>
        </div>
        {/* Otro contenido u objetivos */}
        <div className="container-fluid objetivos-container">
          <div className="objetivos-box">
            <h4 className="mb-0">Objetivos</h4>
            <p className="card-text mb-auto">
              Aquí irán los objetivos del libro o cualquier otro contenido que se quiera mostrar de forma horizontal.
            </p>
          </div>
        </div>

      </div>

    
  )
}

export default Descripcion
