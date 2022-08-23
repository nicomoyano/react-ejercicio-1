import React from 'react';
import { Contacto } from '../models/contacto.class';
import ConectarComponent from './conectarComponent';

const ContactoComponent = () => {
  const defaultContacto = new Contacto(
    'Nicolas',
    'Moyano',
    'nicomoyano@gmail.com',
    false
  );

  return (
    <div>
      <h1>
        {defaultContacto.nombre} {defaultContacto.apellido}
      </h1>
      <h2>{defaultContacto.email}</h2>
      <ConectarComponent contacto={defaultContacto}></ConectarComponent>
    </div>
  );
};

export default ContactoComponent;
