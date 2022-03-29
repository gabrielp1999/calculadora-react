import React from "react";

function LinhaTeclado(props) {
  return(
    <tr>
      <td>
        <button 
          onClick={() => props.pegarValorBotao(props.valor1, 'botao')} 
          className="btn btn-clear">
          {props.valor1}
        </button>
      </td>
      <td>
        <button 
          onClick={() => props.pegarValorBotao(props.valor2, 'botao')} 
          className="btn btn-clear">
          {props.valor2}
        </button>
      </td>

      <td>
        <button 
          onClick={() => props.pegarValorBotao(props.valor3, 'botao')} 
          className="btn btn-clear">
          {props.valor3}
        </button>
      </td>

      <td>
        <button 
          onClick={() => props.pegarValorBotao(props.valor4, 'botao')} 
          className="btn btn-clear">
          {props.valor4}
        </button>
      </td>
    </tr>
  )
}

export default LinhaTeclado;