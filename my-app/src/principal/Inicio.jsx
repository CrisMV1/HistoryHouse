import React from 'react'
import './Stilos.css'
import { Link} from 'react-router-dom'
import libro from '../assets/viva.jpg'
import libro1 from '../assets/america.jpg'
import libro2 from '../assets/venas.jpg'
import libro3 from '../assets/rep.jpg'
import { useNavigate } from 'react-router-dom';


const Inicio = () => {
    return (
        <div class= 'container'>
           <nav className='navbar'>
            <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12">
                <div className='row' >
                    <div className='col' style={{ marginBottom: '15px' }}>
                        <button type="button" className="btn btn-dark" style= {{ backgroundColor: '#297272' }} >
                             <img src="https://static0planetadelibroscommx.cdnstatics.com/usuaris/libros/fotos/292/original/portada_el-continente-olvidado_michael-reid_201902211727.jpg" className="card-img"/>
                             <Link className='menu-link' to="/Apages"><h1>libro 1</h1></Link>
                        </button>{' '}
                        <button type="button" class="btn btn-dark" style= {{ backgroundColor: '#297272' }} to="/Apages" >
                            <img src={libro} className="card-img"/>
                            <Link className='menu-link' to="/Apages"><h1>libro 2</h1></Link>
                        </button>{' '}
                        <button type="button" class="btn btn-dark" style= {{ backgroundColor: '#297272' }} to="/Apages">
                            <img src={libro1} className="card-img"/>
                            <Link className='menu-link' to="/Apages"><h1>libro 3</h1></Link>
                        </button>{' '}
                        <button type="button" className="btn btn-dark" style= {{ backgroundColor: '#297272' }} >
                             <img src={libro2} className="card-img"/>
                             <Link className='menu-link' to="/Apages"><h1>libro 4</h1></Link>
                        </button>{' '}
                        <button type="button" className="btn btn-dark" style= {{ backgroundColor: '#297272' }} >
                             <img src={libro3} className="card-img"/>
                             <Link className='menu-link' to="/Apages"><h1>libro 5</h1></Link>
                        </button>{' '}
                    </div>
                </div>
                </div>
            </nav>
        </div>
    )
}
export default Inicio