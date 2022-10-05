import React from "react";
import {Input, Label, GrupoInput, LeyendaError, IconoValidacion} from '../elementos/Formulario';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';

const ComponenteInput = ({estado, cambiarEstado, type, label, placeholder, name, leyendaError, expresionRegular, funcion}) => {
    const onChange = (e) => {
        cambiarEstado({...estado, campo: e.target.value});
    }
    const validacion = () => {
        if(expresionRegular){
            if(expresionRegular.test(estado.campo)){
                cambiarEstado({...estado, valido:'true'});
            } else{
                cambiarEstado({...estado, valido:'false'});
            }
        }
        if(funcion){
            funcion();
        }
    }

    


    return(
        <div>
          <label htmlFor={name} valido={estado.valido} >{label}</label>
          <GrupoInput>
                    <Input type={type} placeholder={placeholder} id={name} value={estado.campo} onChange={onChange} onKeyUp={validacion} onBlur={validacion} valido={estado.valido} />
                    <IconoValidacion icon={estado.valido === 'true' ? faCheckCircle : faTimesCircle} valido={estado.valido} />
         </GrupoInput>
         <LeyendaError>{leyendaError}</LeyendaError>
        </div>
    )
}

export default ComponenteInput;