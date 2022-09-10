import React from 'react'
import PropTypes from 'prop-types'
import { Contacto } from '../models/contacto.class'
import ComponenteB from './componenteB'

const ComponenteA = ({ contacto }) => {
  return (
    <div>
        <h1>Ejercicio1,2,3 con Componentes</h1>
        <h3>Nombre: { contacto.nombre }</h3>
        <h3>Apellido: { contacto.apellido }</h3>
        <h3>Email: { contacto.email }</h3>
        <ComponenteB estado={ contacto.conectado }/>
    </div>
  )
}

ComponenteA.propTypes = {
    contacto: PropTypes.instanceOf(Contacto)
}

export default ComponenteA
