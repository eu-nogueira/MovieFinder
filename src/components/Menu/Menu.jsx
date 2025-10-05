import { useState } from 'react'
import './Menu.css'

function Menu({ input }) {

 return (
    <div className='navbar'>
        <p>{input}</p>
    </div>
  )
}

export default Menu