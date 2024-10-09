import React, { useEffect, useState } from 'react';
import './Stilos.css';

const Detalle = () => {
  const [bookDetails, setBookDetails] = useState({});

  useEffect(() => {
    // Hacer una petición GET al servidor Express para obtener los detalles del libro
    fetch('http://localhost:3001/libro/detalles')
      .then(response => response.json())
      .then(data => setBookDetails(data))
      .catch(error => console.error('Error al obtener detalles del libro:', error));
}, []);


  return (
    <div className="container-detalle">
      <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12" style={{ backgroundColor: '#E8E0C8' }}>
        <h2 style={{ textAlign: 'center' }}>Detalles del libro</h2>
        <div className="container-fluid detalles-container">
          <div className="detalles-box">
            <p className="card-text mb-auto">Autor: {bookDetails.nombre_del_autor || 'Cargando...'}</p>
          </div>
          <div className="detalles-box">
            <p className="card-text mb-auto">Editorial: {bookDetails.nombre_editorial || 'Cargando...'}</p>
          </div>
          <div className="detalles-box">
            <p className="card-text mb-auto">Número de páginas: {bookDetails.numero_paginas || 'Cargando...'}</p>
          </div>
          <div className="detalles-box">
            <p className="card-text mb-auto">Fecha de publicación: {bookDetails.fecha_publicacion || 'Cargando...'}</p>
          </div>
          <div className="detalles-box">
            <p className="card-text mb-auto">Género: {bookDetails.genero_libro || 'Cargando...'}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detalle;
