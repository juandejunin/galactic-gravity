// import React, { useState } from "react";

// function Formulario() {
//   const [nombre, setNombre] = useState("");
//   const [email, setEmail] = useState("");
//   const [aceptaPoliticas, setAceptaPoliticas] = useState(false);
//   const [error, setError] = useState("");

//   const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
//     setError("");

//     console.log("Formulario enviado. Datos:", { nombre, email, aceptaPoliticas });

//     if (!aceptaPoliticas) {
//       setError("Debes aceptar las políticas de privacidad.");
//       event.preventDefault();
//       console.log("Validación fallida: Checkbox no marcado.");
//       return;
//     }

//     console.log("Validación pasada. Enviando a Google Forms...");
//     const formData = new FormData(event.currentTarget);
//     console.log("Datos enviados a Google:", Object.fromEntries(formData));
//   };

//   return (
//     <section id="formulario" className="min-h-screen w-full flex items-center justify-center p-8 bg-secondary">
//       <div className="w-full max-w-md mx-auto mt-10 p-8 bg-primary shadow-lg rounded-lg">
//         <form
//           action="https://docs.google.com/forms/d/e/1FAIpQLSdbR8HHIDgv3FGd4f9eAoV_-XpbuZAuabkSyzUIow0WqfvTtQ/formResponse"
//           method="POST"
//           onSubmit={handleSubmit}
//           className="space-y-4"
//         >
//           <h1 className="text-2xl text-gray-300 font-semibold text-center">Solicita tu guía</h1>

//           <div>
//             <label htmlFor="nombre" className="block text-lg text-gray-300">Nombre:</label>
//             <input
//               type="text"
//               id="nombre"
//               name="entry.1965470605" // Actualizado
//               value={nombre}
//               onChange={(e) => setNombre(e.target.value)}
//               required
//               className="w-full p-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>

//           <div>
//             <label htmlFor="email" className="block text-lg text-gray-300">Email:</label>
//             <input
//               type="email"
//               id="email"
//               name="entry.296148167" // Actualizado
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//               className="w-full p-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>

//           <div className="flex items-center">
//             <input
//               type="checkbox"
//               id="politicas"
//               name="entry.1049931451"
//               checked={aceptaPoliticas}
//               onChange={(e) => setAceptaPoliticas(e.target.checked)}
//               value="acepta politicas de privacidad"
//               className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
//             />
//             <label htmlFor="politicas" className="ml-2 text-sm text-gray-300">
//               Acepto las{" "}
//               <a href="/privacy-policy" className="text-blue-500 underline">
//                 políticas de privacidad
//               </a>
//             </label>
//           </div>

//           <div className="flex justify-center">
//             <button
//               type="submit"
//               className="w-1/2 py-2 mt-4 text-lg font-semibold rounded-full bg-light hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
//             >
//               Enviar
//             </button>
//           </div>

//           {error && <div className="text-red-500 mt-2">{error}</div>}
//         </form>
//       </div>
//     </section>
//   );
// }

// export default Formulario;

import React, { useState } from "react";

function Formulario() {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [aceptaPoliticas, setAceptaPoliticas] = useState(false);
  const [error, setError] = useState("");
  const [mensaje, setMensaje] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");
    setMensaje("");

    if (!aceptaPoliticas) {
      setError("Por favor, acepta las políticas de privacidad para continuar.");
      return;
    }

    const formData = new FormData();
    formData.append("entry.1965470605", nombre);
    formData.append("entry.296148167", email);
    formData.append("entry.1049931451", "acepta politicas de privacidad");

    try {
      await fetch(
        "https://docs.google.com/forms/d/e/1FAIpQLSdbR8HHIDgv3FGd4f9eAoV_-XpbuZAuabkSyzUIow0WqfvTtQ/formResponse",
        {
          method: "POST",
          body: formData,
          mode: "no-cors",
        }
      );
      setMensaje("¡Gracias por tu solicitud! Pronto recibirás más información.");
      setNombre("");
      setEmail("");
      setAceptaPoliticas(false);
    } catch (err) {
      setError("No pudimos procesar tu solicitud. Intenta nuevamente más tarde.");
      console.error("Error al enviar:", err);
    }
  };

  return (
    <section id="formulario" className="min-h-screen w-full flex items-center justify-center p-8 bg-gray-100">
      <div className="w-full max-w-md mx-auto mt-10 p-8 bg-white shadow-xl rounded-lg">
        <form onSubmit={handleSubmit} className="space-y-6">
          <h1 className="text-3xl text-gray-800 font-bold text-center">Solicita tu guía</h1>

          <div>
            <label htmlFor="nombre" className="block text-lg text-gray-700">Nombre:</label>
            <input
              type="text"
              id="nombre"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              required
              className="w-full p-3 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Tu nombre"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-lg text-gray-700">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full p-3 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Tu email"
            />
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              id="politicas"
              checked={aceptaPoliticas}
              onChange={(e) => setAceptaPoliticas(e.target.checked)}
              className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            />
            <label htmlFor="politicas" className="ml-2 text-sm text-gray-600">
              Acepto las{" "}
              <a href="/privacy-policy" className="text-blue-500 underline hover:text-blue-700">
                políticas de privacidad
              </a>
            </label>
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="w-1/2 py-3 mt-4 text-lg font-semibold text-white bg-blue-500 rounded-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
            >
              Enviar
            </button>
          </div>

          {error && <div className="text-red-500 mt-2 text-center">{error}</div>}
          {mensaje && <div className="text-green-500 mt-2 text-center">{mensaje}</div>}
        </form>
      </div>
    </section>
  );
}

export default Formulario;