import './Content.css'
import React from 'react'
import { Routes, Route} from 'react-router-dom'

import About from '../../view/examples/About.jsx'
import Home from '../../view/examples/Home.jsx'
import Param from '../../view/examples/Param.jsx'
import NotFound from '../../view/examples/NotFound.jsx'

const Content = props => (
  <main className='Content'>
    <Routes>
     <Route path='/about' element={<About/>}></Route>
     <Route path='/param/:id' element={<Param/>}></Route>
     <Route path='/' element={<Home/>}></Route>
     <Route path='*' element={<NotFound/>}></Route>
    </Routes>
  </main>
)

export default Content