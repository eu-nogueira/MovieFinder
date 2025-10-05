import { useState } from 'react'
import './Menu.css'

function Menu({ input }) {

 return (
    <div className='navbar'>
        {input}
    </div>
  )
}

export default Menu