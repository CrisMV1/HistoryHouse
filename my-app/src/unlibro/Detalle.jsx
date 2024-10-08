import './Stilos.css'
import React from 'react'

const Detalle = () => {
  return (
    <div className="container-detalle">
    <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12" style={{ backgroundColor: '#E8E0C8' }}>
        <h2 style={{textAlign: 'center'}}>Detalles del libro</h2>
        {/* Contenedor horizontal */}
        <div className="container-fluid detalles-container">
            <div className="detalles-box">
                <p className="card-text mb-auto">
                     Autor: 
                </p>   
            </div>
            <div className="detalles-box">
                <p className="card-text mb-auto">
                    Editorial: 
                </p>
            </div>
            <div className="detalles-box">
                <p className="card-text mb-auto">
                   Numero de paginas:
                </p>
            </div>
            <div className="detalles-box">
                <p className="card-text mb-auto">
                    Fecha de Publicacion:
                </p>
            </div>
            <div className="detalles-box">
                <p className="card-text mb-auto">
                    Genero:
                </p>
            </div>
        </div>
     </div>
</div>
  )
}

export default Detalle
