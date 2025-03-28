function AltaTurno() {
  return (
    <div className="bg-red-500 min-h-screen p-4">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-xl mb-4  text-red-500">Registrar un nuevo turno</h1>
        <div className="mt-2">
          <p className="font-semibold mb-1">Fecha</p>
          <input
            type="date"
            className="border-2 rounded-lg p-1 w-full border-gray-400 focus:outline-none focus:border-red-300"
          />
        </div>

        <div className="mt-2">
          <p className="font-semibold mb-1">Hora</p>
          <input
            type="time"
            className="border-2 rounded-lg p-1 w-full border-gray-400 focus:outline-none focus:border-red-300"
          />
        </div>

        <div className="mt-2">
          <p className="font-semibold mb-1">Nombre</p>
          <input
            className="border-2 rounded-lg p-1 w-full border-gray-400 focus:outline-none focus:border-red-300"
            placeholder="Nombre de la clienta"
          />
        </div>
        <div className="mt-2">
          <p className="font-semibold mb-1">Apellido</p>
          <input
            className="border-2 rounded-lg p-1 w-full border-gray-400 focus:outline-none focus:border-red-300"
            placeholder="Apellido de la clienta"
          />
        </div>
        <div className="mt-2">
          <p className="font-semibold mb-1">Teléfono</p>
          <input
            className="border-2 rounded-lg  border-gray-400 p-1 w-full focus:outline-none focus:border-red-300"
            placeholder="Teléfono de la clienta"
          />
        </div>
        <div className="mt-2">
          <p className="font-semibold mb-1">Dirección</p>
          <input
            className="border-2 border-gray-400 rounded-lg p-1 w-full focus:outline-none focus:border-red-300"
            placeholder="Dirección de la clienta"
          />
        </div>

        <div className="mt-4">
          <p className="font-semibold mb-1">Servicios a realizarse</p>
          <label className="block">
            <input type="checkbox" className="mr-2 " /> Corte
          </label>
          <label className="block">
            <input type="checkbox" className="mr-2" /> Tintura
          </label>
          <label className="block">
            <input type="checkbox" className="mr-2" /> Peinado
          </label>
          <label className="block">
            <input type="checkbox" className="mr-2" /> Tratamiento
          </label>
          <label className="block">
            <input type="checkbox" className="mr-2" /> Alisado
          </label>
        </div>

        <div className="mt-2">
          <p className="font-semibold mb-1">Tipo de servicio</p>
          <label className="block">
            <input type="radio" name="servicio" className="mr-2" /> A domicilio
          </label>
          <label className="block">
            <input type="radio" name="servicio" className="mr-2" /> En el salón
          </label>
        </div>

        <div className="mt-2">
          <p className="font-semibold mb-1">Información Adicional</p>
          <textarea
            className="border-2 p-2 w-full border-gray-400 rounded-lg focus:outline-none focus:border-red-300"
            rows={2}
            placeholder="Aclaraciones"
          ></textarea>
        </div>
      </div>
    </div>
  );
}

export default AltaTurno;
