import React from 'react'
import { Link } from 'react-router-dom'
import { useDentistStates } from './utils/global.context'

const Navbar = () => {
  const {dispatch} = useDentistStates()

  return (
    <nav>
      <Link to='/'><h4>Home</h4></Link>
      <Link to='/contact'><h4>Contacto</h4></Link>
      <Link to='/favs'><h4>Favs</h4></Link>
      <button onClick={() => dispatch({ type: "CHANGE_THEME" })}>Change theme</button>
    </nav>
  )
}

export default Navbar