import React from "react";

function Visor(props) {
  return(
    <tr>
      <td colSpan="4">
        <input type="text" className="display"
          onChange={e => props.pegarValorInput(e.target.value, 'input')}
          value={props.valorInput} 
          onKeyPress={props.handleKeyPress}
       />
      </td>
    </tr>
  )
}

export default Visor;