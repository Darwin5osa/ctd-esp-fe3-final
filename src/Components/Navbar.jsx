import React from 'react'
import { Link } from 'react-router-dom'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  
  return (
    <nav>
      <Link to='/'><h4>Home</h4></Link>
      <Link to='/contact'><h4>Contacto</h4></Link>
      <Link to='/favs'><h4>Favs</h4></Link>
      <button>Change theme</button>
    </nav>
  )
}

export default Navbar