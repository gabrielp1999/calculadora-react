import React, {useState} from 'react';
import Teclado from '.././Teclado';
import Visor from '.././Visor';

function Caculadora() {
  const [valorInput, setValorInput] = useState('');

  function pegarValor(value, tipo) {
      if(value !== '«' && value.indexOf('=') === -1 && value.indexOf('c') === -1){
        if(tipo === 'botao'){
          setValorInput(`${valorInput}${value}`);
        }else{
          setValorInput(value);
        }
        //teste

      }else if(value === '«') setValorInput(valorInput.slice(0, -1));
       else if(value.indexOf('c') !== -1) setValorInput('');
       else if(value.indexOf('=') !== -1){
        try {
          const conta = eval(valorInput);
    
          if(!conta) {
            alert('Conta invalida');
            return
          }
          setValorInput(conta.toString());
        } catch(e){
          alert('Conta Invalida');
          setValorInput('')
          return
        }
      }
  }
  // resolver o bug do teclado do computador que esta falhando
  return(
    <section className='container'>
      <h1>Calculadora</h1>

      <table className="calculadora20">
        <tbody>
          <Visor
            pegarValorInput={pegarValor}
            valorInput={valorInput}
          />
          <Teclado 
            pegarValorBotao={pegarValor}
            valorInput={valorInput}
          />
        </tbody>
      </table>
    </section>
  )
}

export default Caculadora;

