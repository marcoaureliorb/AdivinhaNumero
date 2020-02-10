import React from "react";
import "./styles.css";
import { useState } from "react";

export default function App() {

  const [estado, setEstado] = useState('ENTRADA')
  const [min, setMin] = useState(1)
  const [max, setMax] = useState(300)
  const [numTentativas, setNumTentativas] = useState(1)
  const [numeroEscolhido, setNumeroEscolhido] = useState(parseInt(min + (Math.random() * (max - min + 1)))) 
  
  var iniciarJogo = function(){
    setEstado('JOGANDO')
    setMin(1)
    setMax(300)
    setNumeroEscolhido(parseInt(min + (Math.random() * (max - min + 1))))
    setNumTentativas(1)     
  }

  if(estado === 'ENTRADA'){
    return (<button onClick={iniciarJogo}>Iniciar game!</button>)
  }

  if(estado === 'ACERTOU'){
    return <div>
      <p>Acertei seu numero {numeroEscolhido} com {numTentativas} vezes!</p>
      <button onClick={iniciarJogo}>Iniciar</button>
    </div>
  }

  var menorOnClick = function() {
    setMax(numeroEscolhido);
    console.log(numeroEscolhido + '|' + min + '|' + max)
    setNumeroEscolhido(parseInt((numeroEscolhido - min) / 2))
    setNumTentativas(numTentativas + 1)
  }  

  var maiorOnClick = function() {
    setMin(numeroEscolhido);
    console.log(numeroEscolhido + '|' + min + '|' + max)
    setNumeroEscolhido(parseInt((max - numeroEscolhido) / 2))
    setNumTentativas(numTentativas + 1)
  }

  var acertouOnClick = function() {
    setEstado('ACERTOU')
  }

  return (
    <div className="App">
      <p>O seu número é {numeroEscolhido}?</p>
      <button onClick={menorOnClick}>Menor</button>
      <button onClick={acertouOnClick}>Acertou</button>
      <button onClick={maiorOnClick}>Maior</button>
      
      <p>{numTentativas}</p>
      <p>{numeroEscolhido + '|' + min + '|' + max} </p>
    </div>
  );
}
