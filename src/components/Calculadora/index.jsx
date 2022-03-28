import React, {useState} from 'react';
import Teclado from '.././Teclado';
import Visor from '.././Visor';

function Caculadora() {
  const [valorInput, setValorInput] = useState('');

  function pegarValorBotao(value) {
    if(value !== '«' && value !== '=' && value !== 'c'  ){
      setValorInput(`${valorInput}${value}`);
    }else if(value === '«') setValorInput(valorInput.slice(0, -1))
    else if(value === 'c') setValorInput('')
    else if(value === '='){
      try {
        const conta = eval(valorInput);
  
        if(!conta) {
          alert('Conta invalida');
          return
        }
  
        setValorInput(conta.toString());
      } catch(e){
        alert('Conta Invalida');
        return
      }
    }
  }
  
  return(
    <section className='container'>
      <h1>Calculadora</h1>
      <table class="calculadora20">
        <Visor
          pegarValorBotao={pegarValorBotao}
          valorInput={valorInput}
        />
        <Teclado 
          pegarValorBotao={pegarValorBotao}
          valorInput={valorInput}
        />
      </table>
    </section>
  )
}

export default Caculadora;

