import React, {useState} from 'react'
import PropTypes from 'prop-types'

const ComponenteB = ( estado ) => {
    const [conectado, setconectado] = useState(estado);
    const cambiarEstado = () =>{
        setconectado(!conectado)
    }
    return (
        <div>
            <h4>Usuario: { conectado ? 'En linea' : 'No disponible' }</h4>
            <button onClick={ cambiarEstado }>{ conectado ? 'Desconectarse' : 'Conectarse' }</button>
        </div>
    )
}

ComponenteB.propTypes = {
    conectado: PropTypes.bool
}

export default ComponenteB
