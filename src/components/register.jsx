// import React, { useState } from 'react';


// function Formulario() {
//     return (
//         <div>
//             <h1>React Hello</h1>
//             <button onClick={()=>{
//                 alert('hello')
//             }}>
//                 click me
//             </button>
//         </div>
//     )
// }


// export default Formulario;


import React, { useState } from 'react';

function Formulario() {
  const [nombre, setNombre] = useState(''); // Estado para manejar el nombre ingresado por el usuario

  return (
    <div>
      <h1>React Hello</h1>
      {/* Campo de entrada para el nombre */}
      <label>
        Nombre:
        <input
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)} // Actualiza el estado al escribir
        />
      </label>
      
      {/* Botón para mostrar el mensaje */}
      <button onClick={() => alert(`Hello: ${nombre}`)}>
        Click me
      </button>
    </div>
  );
}

export default Formulario;
