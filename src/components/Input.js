import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle} from '@fortawesome/free-solid-svg-icons';
import styled, { css } from "styled-components";

const Input = ({estado, cambiarEstado, type, label, placeholder, name, leyendaError, expresionRegular}) => {
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
    }

   /* const Input = styled.input`
    ${props => props.valido === 'true' && css`
    border: 3px solid transparent;
    `}
    ${props => props.valido === 'false' && css`
    border: 3px solid red;
    `}`;*/

    return(
        <div>
          <label htmlFor={name} className='label' valido={estado.valido} >{label}</label>
          <div className='Input'>
                    <input type={type} placeholder={placeholder} id={name} value={estado.campo} onChange={onChange} onKeyUp={validacion} onBlur={validacion} valido={estado.valido} />
                    <FontAwesomeIcon icon={faCheckCircle} className="IconValidation"/>
                    <p className='error'>{leyendaError}</p>
                </div>
          </div>
    )
}

export default Input;