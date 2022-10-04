import React, {useState} from 'react'
import styled from 'styled-components';
import { Container } from 'react-bootstrap'
import {Link} from 'react-router-dom';
import "./Contacto.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faExclamationTriangle} from '@fortawesome/free-solid-svg-icons'
import Input from '../../components/Input';

export default function Contacto() {
    const[nombre, cambiarNombre] = useState({campo: '', valido: null});
    const[correo, cambiarCorreo] = useState({campo: '', valido: null});
    const[asunto, cambiarAsunto] = useState({campo: '', valido: null});
    const[mensaje, cambiarMensaje] = useState({campo: '', valido: null});

    const expresiones = {
      nombre: /^[a-zA-ZÀ-ÿ\s]{3,40}$/, // Letras y espacios, pueden llevar acentos.
      asunto: /^.{1,40}$/, // 1 a 40 digitos.
      correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
      mensaje: /^.{4,120}$/, // 4 a 12 digitos.
    }


    return (
      <Container>
          <Formulario action="" className='Formulario'>
          <Input
          estado={nombre}
          cambiarEstado={cambiarNombre}
          type="text"
          label="Nombre"
          placeholder="Escriba su nombre"
          name="nombre"
          leyendaError="El nombre solo puede contener letras y espacios"
          expresionRegular={expresiones.nombre}
          />
          <Input
          estado={correo}
          cambiarEstado={cambiarCorreo}
          type="text"
          label="Mail"
          placeholder="Escriba su correo"
          name="correo"
          leyendaError="El mail debe contener @"
          expresionRegular={expresiones.correo}
          />
          <Input
          estado={asunto}
          cambiarEstado={cambiarAsunto}
          type="text"
          label="Asunto"
          placeholder="Escriba el asunto"
          name="asunto"
          leyendaError="El asunto no debe contener mas de 5 palabras"
          expresionRegular={expresiones.asunto}
          />
          <Input
          estado={mensaje}
          cambiarEstado={cambiarMensaje}
          type="text"
          label="Mensaje"
          placeholder="Escriba el mensaje"
          name="mensaje"
          leyendaError="El mensaje no debe de ser menor a 5 palabras"
          expresionRegular={expresiones.mensaje}
          />


          <div className='TerminosyCondiciones'>
            <label>
                <input type="checkbox" name="terminos" id="terminos" />
                Acepto Términos y condiciones
            </label>
          </div>
          {false &&<div className='mensajeError'>
          <p>
          <FontAwesomeIcon icon={faExclamationTriangle} className="IconTriangle"/>
            <b>Error:</b> Por favor rellena el formulario.</p>
          </div>}
          <div className='enviar'>
            <button type="submit" id="botonEnviar">Enviar</button>
            <p className='mensajeExito'>Formulario enviado exitosamente</p>
          </div>
          </Formulario>
      </Container>
      
    )
  }

  const Formulario = styled.form`
  grid-template-columns: 1fr 1fr;
  @media (max-width:800px){
    grid-template-columns: 1fr;
}
  `;

  /*const colores = {
    borde: "#0075FF",
    error: "#bb2929",
    exito: "#1ed12d",
  }*/