import React, { useState } from 'react';

function Formulario() {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [error, setError] = useState('');
  const [enviado, setEnviado] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('');
    setMensaje('');

    try {
      const response = await fetch('http://localhost:3000/api/users/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nombre, email }),
      });

      const data = await response.json();

      if (response.ok) {
        setMensaje(data.mensaje);
        setEnviado(true);
      } else {
        setError(data.error || 'Ocurrió un error al enviar el formulario.');
      }

      setEnviado(true);
    } catch (error) {
      console.error('Error:', error);

    }
  };

  return (
    <section id="formulario" className="min-h-screen w-full flex items-center justify-center p-8 bg-secondary">
      <div className=" w-full max-w-md mx-auto mt-10 p-8 bg-primary shadow-lg rounded-lg">

        {enviado ? (
          <div className="text-green-500 font-bold">{mensaje}</div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <h1 className="text-2xl text-gray-300 font-semibold text-center">Solicita tu guia</h1>
            <div>
              <label htmlFor="nombre" className="block text-lg text-gray-300">Nombre:</label>
              <input
                type="text"
                id="nombre"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                required
                className="w-full p-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-lg text-gray-300">Email:</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full p-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="w-1/2 py-2 mt-4 bg-light rounded-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Enviar
              </button>

            </div>

            {error && error !== '' && <div className="text-red-500 mt-2">{error}</div>}

          </form>
        )}
      </div>
    </section>

  );
}

export default Formulario;
