import React, { useState } from 'react';
import PropTypes from 'prop-types';

const ConectarComponent = ({ contacto }) => {
  const [estado, setEstado] = useState(contacto.conectado);

  const cambiarEstado = () => {
    if (estado === true) {
      setEstado(false);
    } else {
      setEstado(true);
    }
  };

  return (
    <div>
      <h3>{estado ? 'En Linea' : 'No Disponible'}</h3>
      <button onClick={cambiarEstado}>
        {estado ? 'Desconectarse' : 'Conectarse'}
      </button>
    </div>
  );
};

ConectarComponent.propTypes = {
  contacto: PropTypes.bool,
};

export default ConectarComponent;
