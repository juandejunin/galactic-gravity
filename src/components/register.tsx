import React, { useState } from "react";

// Define una interfaz para las props
interface FormularioProps {
  apiUrl: string;
}
function Formulario({ apiUrl }: FormularioProps) {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [aceptaPoliticas, setAceptaPoliticas] = useState(false);
  const [mensaje, setMensaje] = useState("");
  const [error, setError] = useState("");
  const [enviando, setEnviando] = useState(false);

  

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setError("");
    setMensaje("");

    if (!aceptaPoliticas) {
      setError("Debes aceptar las políticas de privacidad.");
      return;
    }

    setEnviando(true);

    try {
      console.log('Enviando registro a:', apiUrl);
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nombre, email, acepta_politicas: aceptaPoliticas }),
        credentials: "include", 
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Error al enviar el formulario.");
      }

      const data = await response.json();
      setMensaje(data.mensaje);

    } catch (error: any) {
      setError(error.message || "Hubo un problema con la solicitud.");
    } finally {
      setEnviando(false);
    }

  };

  return (
    <section id="formulario" className="min-h-screen w-full flex items-center justify-center p-8 bg-secondary">
      <div className="w-full max-w-md mx-auto mt-10 p-8 bg-primary shadow-lg rounded-lg">
        {mensaje ? (
          <div className="text-gray-300 font-bold">{mensaje}</div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <h1 className="text-2xl text-gray-300 font-semibold text-center">Solicita tu guía</h1>

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

            <div className="flex items-center">
              <input
                type="checkbox"
                id="politicas"
                checked={aceptaPoliticas}
                onChange={(e) => setAceptaPoliticas(e.target.checked)}
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <label htmlFor="politicas" className="ml-2 text-sm text-gray-300">
                Acepto las{" "}
                <a href="/privacy-policy" className="text-blue-500 underline">
                  políticas de privacidad
                </a>
              </label>
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                disabled={enviando}
                className={`w-1/2 py-2 mt-4 text-lg font-semibold rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  enviando ? "bg-gray-500 cursor-not-allowed" : "bg-light hover:bg-blue-600"
                }`}
              >
                {enviando ? "Enviando..." : "Enviar"}
              </button>
            </div>

            {error && <div className="text-red-500 mt-2">{error}</div>}
          </form>
        )}
      </div>
    </section>
  );
}

export default Formulario;
