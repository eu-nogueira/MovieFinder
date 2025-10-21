import './Menu.css'

function Menu({ input }) {

 return (
    <div className='navbar'>
      <img src="src\public\images\logo-movieFinder.png" width={80} className='logo' alt='logo-MovieFinder'/>
        {input}
    </div>
  )
}

export default Menu