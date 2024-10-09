import React, { useState, useEffect } from 'react';
import './Stilos.css';

const Descripcion = () => {
  const [bookData, setBookData] = useState({ sinopsis_libro: '', objetivos_libro: '' });
  const [error, setError] = useState('');

  useEffect(() => {
    
    const fetchBookData = async () => {
      try {
        const response = await fetch('http://localhost:3001/libro');
        if (!response.ok) {
          throw new Error('Error al obtener los datos del libro');
        }
        const data = await response.json();
        setBookData(data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchBookData();
  }, []);

  return (
    <div className="container-descripcion">
      <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12" style={{ backgroundColor: '#E8E0C8' }}>
        <h2 style={{ textAlign: 'center' }}>Descripción del libro</h2>
        {/* Contenedor horizontal */}
        <div className="container-fluid objetivos-container">
          {/* Sinopsis */}
          <div className="sinopsis-box">
            <h4 className="mb-0">Sinopsis</h4>
            <p className="card-text mb-auto">
              {error ? 'Error al cargar sinopsis.' : bookData.sinopsis_libro}
            </p>
          </div>
        </div>
      </div>
      {/* Otro contenido u objetivos */}
      <div className="container-fluid objetivos-container">
        <div className="objetivos-box">
          <h4 className="mb-0">Objetivos</h4>
          <p className="card-text mb-auto">
            {error ? 'Error al cargar objetivos.' : bookData.objetivos_libro}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Descripcion;
