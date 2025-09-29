import { Link } from 'react-router'
import './Menu.css'

function Menu({ input }) {
  
  return (
    <div>
        <ul className='navbar'>
            <li><Link to={'/'} className='links'>Inicio</Link></li>
            <li>Categorias</li>
            <li>{input}</li>
        </ul>
    </div>
  )
}

export default Menu