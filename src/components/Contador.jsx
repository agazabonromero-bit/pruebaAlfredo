import React, { useState } from 'react';

function Contador() {
  const [contador, setContador] = useState(0);
  const [colorize, setColorize] = useState('black')
  const cambio = contador > 200 ? "red" : "green"

  return (
    <div style={contador > 100 ? {color: 'red'}: {color: 'black'}}>
      Hola {contador}
      <br />
      <button onClick={() => {setContador(contador + 10)}}>
        dale click
      </button>
      <div style={{width:"400px", color:"white", height:"200px", backgroundColor: "cambio"}}>
        Semaforo
      </div>
    </div>
  );
}

export default Contador;
