import React from 'react'
import './Button.css'

export default props => {/* Se a propriedade props.operation estiver definida, vai retornar a classe operation do css, se não vai ficar vazio*/
        let classes = 'button '

        classes += props.operation ? 'operation' : ''
        classes += props.double ? 'double' : ''
        classes += props.triple ? 'triple' : ''
       return (
           <button 
           onClick= {e => props.click(props.label)}
           className = {classes}>
           {props.label}

            </button>
       )
 
        }