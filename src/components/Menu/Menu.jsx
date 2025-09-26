import './Menu.css'

function Menu({ input }) {
  
  return (
    <div>
        <ul className='navbar'>
            <li>Inicio</li>
            <li>Categorias</li>
            <li>{input}</li>
        </ul>
    </div>
  )
}

export default Menu