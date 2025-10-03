import { useState } from 'react'
import './Menu.css'

function Menu({ input }) {
  const [modal, setModal] = useState(false)

  function handleModal() {
    setModal(!modal)
  }

  return (
    <div>
      <ul className='navbar'>
        <li>Inicio</li>
        <li onClick={handleModal}>Categorias</li>
        {modal && (
          <div>
            <ul className="categorias">
              <p onClick={handleModal}>X</p>
              <li>Ação</li>
              <li>Aventura</li>
            </ul>
          </div>
        )}
        <li>{input}</li>
      </ul>
    </div>
  )
}

export default Menu