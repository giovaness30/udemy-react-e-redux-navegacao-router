import React from 'react'
import { useParams } from'react-router-dom'

const Param = props => {

  const { id } = useParams()
  return(
    <div className='Param'>
      <h1>Parametros</h1>
      <p>O parametro é : {id} !</p>
    </div>
  )
}

export default Param