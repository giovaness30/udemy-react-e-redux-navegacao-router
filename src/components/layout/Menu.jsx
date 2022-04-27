import './Menu.css'
import React from 'react'

import { Link } from 'react-router-dom'

const Menu = props => (
  <aside className='Menu'>
    <nav>
      <ul>
        <li>
          <Link to="/">Início</Link>
        </li>
        <li>
          <Link to="/about">Sobre</Link>
        </li>
        <li>
          <Link to="/param/1233">Param</Link>
        </li>
        <li>
          <Link to="/nao existe">Não existe</Link>
        </li>
      </ul>
    </nav>
  </aside>
)

export default Menu