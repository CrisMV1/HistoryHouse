import './Stilos.css'
import React from 'react'
import libro from '../assets/libro.jpg'




const Resumen = () => {
    return (
        <div className='container-mt-4'>
        
            <div className="col-md-8">
                <h1 className='text-center mb-4'>Lista de Resúmenes (Comunidad)</h1>

                {/* Lista de Resúmenes */}
                <ul className="list-group">
                    {['Resumen 1', 'Resumen 2', 'Resumen 3'].map((resumen, index) => (
                        <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                            {resumen}
                            <button className="btn btn-abrir btn-sm"
                            
                            >Abrir</button>
                        </li>
                    ))}
                </ul>
            </div>
        
    </div>
    )
}

export default Resumen
