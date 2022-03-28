import React from "react";

function Visor(props) {
  return(
    <tr>
      <td colspan="4">
        <input type="text" className="display"
          onChange={e => props.pegarValorBotao(e.target.value)}
          value={props.valorInput} />
      </td>
    </tr>
  )
}

export default Visor;