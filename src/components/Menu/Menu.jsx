import './Menu.css'
import imagem from '../../../public/images/logo-movieFinder.png'

function Menu({ input }) {

 return (
    <div className='navbar'>
      <img src={imagem} width={80} className='logo' alt='logo-MovieFinder'/>
        {input}
    </div>
  )
}

export default Menu
