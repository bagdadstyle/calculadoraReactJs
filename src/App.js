import React, { useState } from 'react';
import './App.css';
import logoHenry from './images/HenryLogo.webp';
import Boton from './Componentes/Boton.js';
import Pantalla from './Componentes/Pantalla';
import BotonClear from './Componentes/BotonClear';
import { evaluate } from 'mathjs'

function App() {

  const [ input, setInput] = useState('');

  const agregatIput = (val) =>{
    setInput(input + val);
  };
  const resultado = () => {
    if(input){
    setInput(evaluate(input))
    }
    else{
      alert('Ingrese valor para realizar los calculos');
    }
  };

  return (
    <div className='App'>
        <div className='logo-container'>
          <img className='logo' src={logoHenry} alt='logod' />
        </div>
        <div className='container-calculadora'>
            <Pantalla input={input}/>
            <div className='fila'>
              <Boton manejarClick={agregatIput}>1</Boton>
              <Boton manejarClick={agregatIput}>2</Boton>
              <Boton manejarClick={agregatIput}>3</Boton>
              <Boton manejarClick={agregatIput}>+</Boton>
            </div>
            <div className='fila'>
              <Boton manejarClick={agregatIput}>4</Boton>
              <Boton manejarClick={agregatIput}>5</Boton>
              <Boton manejarClick={agregatIput}>6</Boton>
              <Boton manejarClick={agregatIput}>-</Boton>
            </div>
            <div className='fila'>
              <Boton manejarClick={agregatIput}>7</Boton>
              <Boton manejarClick={agregatIput}>8</Boton>
              <Boton manejarClick={agregatIput}>9</Boton>
              <Boton manejarClick={agregatIput}>*</Boton>
            </div>
            <div className='fila'>
              <Boton manejarClick={resultado}>=</Boton>
              <Boton manejarClick={agregatIput}>0</Boton>
              <Boton manejarClick={agregatIput}>.</Boton>
              <Boton manejarClick={agregatIput}>/</Boton>
            </div>
            <div className='fila'>
              <BotonClear manejarClear={() => setInput('')}>Clear</BotonClear>
            </div>
        </div>
    </div>
  );
}

export default App;
