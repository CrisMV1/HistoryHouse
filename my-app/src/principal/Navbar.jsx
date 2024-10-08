/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'


const Navbar = () => {
  return (
    <div className='barra-de-navegacion' id='otro'>
      <nav class="navbar bg-body-tertiary limber " >
        <div class="container-fluid" id='navegacion'>
          <a class="navbar-brand" ><b><i className="bi bi-list" ></i>
            HistoryHouse</b></a>
          <form class="d-flex" role="search">
            <input class="form-control me-2" type="search" placeholder="Buscar" aria-label="Search" />
            <button class="btn btn-outline-success" type="submit">Buscar</button>


            <div class="dropdown">
              <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              <i class="bi bi-person-circle"></i> Usuario
              </button>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li><a class="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </div>

          </form>
        </div>
      </nav>
    </div>
  )
}

export default Navbar

