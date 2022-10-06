import React, {useState} from 'react'
import {Formulario, Label, ContenedorTerminos, ContenedorBotonCentrado, Boton, MensajeExito, MensajeError,} from '../../elementos/Formulario';
import "./Contacto.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faExclamationTriangle} from '@fortawesome/free-solid-svg-icons'
import Input from '../../components/Input';
const Contacto = () => {
    const[nombre, cambiarNombre] = useState({campo: '', valido: null});
    const[correo, cambiarCorreo] = useState({campo: '', valido: null});
    const[asunto, cambiarAsunto] = useState({campo: '', valido: null});
    const[mensaje, cambiarMensaje] = useState({campo: '', valido: null});
    const [terminos, cambiarTerminos] = useState(false);
	  const [formularioValido, cambiarFormularioValido] = useState(null);

    const expresiones = {
      nombre: /^[a-zA-ZÀ-ÿ\s]{3,40}$/, // Letras y espacios, pueden llevar acentos.
      asunto: /^.{1,40}$/, // 1 a 40 digitos.
      correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
      mensaje: /^.{4,120}$/, // 4 a 12 digitos.
    }

    const onChangeTerminos = (e) => {
      cambiarTerminos(e.target.checked);
    }
  
    const onSubmit = (e) => {
      e.preventDefault();
  
      if(
        nombre.valido === 'true' &&
        correo.valido === 'true' &&
        asunto.valido === 'true' &&
        mensaje.valido === 'true' &&
        terminos
      ){
        cambiarFormularioValido(true);
        cambiarNombre({campo: '', valido: null});
        cambiarCorreo({campo: '', valido: null});
        cambiarAsunto({campo: '', valido: null});
        cambiarMensaje({campo: '', valido: null});
  
        // ... 
      } else {
        cambiarFormularioValido(false);
      }
    }


    return (
      <main>
          <Formulario action="" onSubmit={onSubmit}>
          <Input
          estado={nombre}
          cambiarEstado={cambiarNombre}
          type="text"
          label="Nombre"
          placeholder="Escriba su nombre"
          name="nombre"
          leyendaError="El nombre solo puede contener letras y espacios. Pueden llevar acentos."
          expresionRegular={expresiones.nombre}
          />
          <Input
          estado={correo}
          cambiarEstado={cambiarCorreo}
          type="text"
          label="Mail"
          placeholder="Escriba su correo"
          name="correo"
          leyendaError="El mail solo puede contener letras, numeros, puntos, guiones y guion bajo."
          expresionRegular={expresiones.correo}
          />
          <div className='Input2'>
          <Input 
          estado={asunto}
          cambiarEstado={cambiarAsunto}
          type="text"
          label="Asunto"
          placeholder="Escriba el asunto"
          name="asunto"
          leyendaError="El asunto debe exceder los 40 caracteres"
          expresionRegular={expresiones.asunto}
          />
            </div>
            <div className='Input3'>
          <Input
          estado={mensaje}
          cambiarEstado={cambiarMensaje}
          type="text"
          label="Mensaje"
          placeholder="Escriba el mensaje"
          name="mensaje"
          leyendaError="El mensaje no debe exceder los 120 caracteres"
          expresionRegular={expresiones.mensaje}
          />
          </div>

          <ContenedorTerminos>
            <Label>
                <input type="checkbox" name="terminos" id="terminos" checked={terminos} onChange={onChangeTerminos} />
                Acepto Términos y condiciones
            </Label>
          </ContenedorTerminos>
          {formularioValido === false && <MensajeError>
					<p>
						<FontAwesomeIcon icon={faExclamationTriangle}/>
						<b>Error:</b> Por favor rellena el formulario correctamente.
					</p>
				</MensajeError>}
				<ContenedorBotonCentrado>
					<Boton type="submit">Enviar</Boton>
					{formularioValido === true && <MensajeExito>Formulario enviado exitosamente!</MensajeExito>}
				</ContenedorBotonCentrado>
          </Formulario>
      </main>
      
    )
  }

  


  export default Contacto