import React from 'react'
import './Stilos.css'

import { Link} from 'react-router-dom'

const Inicio = () => {
    return (
        <div>
           <nav className='navbar'>
              <Link className='menu-link' to="/Apages"><h1><b>INICIO</b></h1></Link>
              <h1>hola </h1>
           </nav>
        </div>
    )
}
export default Inicio
