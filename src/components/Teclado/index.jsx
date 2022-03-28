import React from 'react';
import LinhaTeclado from '../LinhaTeclado';

function Teclado(props) {

  return(
    <>
      <LinhaTeclado
        pegarValorBotao={props.pegarValorBotao}
        valor1='c' 
        valor2='('
        valor3=')' 
        valor4='/' 
      />
      <LinhaTeclado 
        pegarValorBotao={props.pegarValorBotao}
        valor1='7' 
        valor2='8' 
        valor3='9' 
        valor4='*' 
      />
      <LinhaTeclado 
        pegarValorBotao={props.pegarValorBotao}
        valor1='4'
        valor2='5' 
        valor3='6' 
        valor4='+' 
      />
      <LinhaTeclado 
        pegarValorBotao={props.pegarValorBotao}
        valor1='1'
        valor2='2' 
        valor3='3' 
        valor4='-' 
        />
      <LinhaTeclado 
        pegarValorBotao={props.pegarValorBotao}
        valor1='.' 
        valor2='0' 
        valor3='&laquo;' 
        valor4='=' 
        />
    </>
  )

}

export default Teclado;