import { useState } from 'react'
import './Menu.css'

function Menu({ input }) {
  const [categorias, setCategorias] = useState(false)

  function handleCategoria() {
    setCategorias(!categorias)
  }
  
  return (
    <div>
        <ul className='navbar'>
            <li>Inicio</li>
            <li onClick={handleCategoria}>{categorias ? 
            <ul className="categoria">
            <li>Ação</li>
            <li>Aventura</li>
            <li>Comédia</li>
            <li>Drama</li>
            <li>Terror</li>
            </ul> :
            <p>Categorias</p>}</li>
            <li>{input}</li>
        </ul>
    </div>
  )
}

export default Menu