import { useState } from 'react'
import './App.css';



const App = (props) => {
  const [contadorValue, updateContador] = useState(0)

  const handleClick = (simbol) => {
    if(simbol){
      updateContador(contadorValue + 1)
    }else{
      updateContador(contadorValue - 1)
    }
    // updateContador(prevContador => {
    // return prevContador + 1
    // })
  }

  const isEven = contadorValue % 2 === 0
  const mensajePar = isEven ? 'Es Par' : 'Es Impar'
  return (
    <div>
      <small>{mensajePar}</small>
      <h1>{contadorValue}</h1>
      <button onClick={() => handleClick(true)}>
        Incrementar
      </button>
      <button onClick={() => handleClick(false)}>
        decrementar
      </button>
    </div>    
  );
}

export default App;
