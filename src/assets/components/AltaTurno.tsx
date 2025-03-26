function AltaTurno() {
  return (
    <div className="bg-red-500 min-h-screen p-4">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-2xl mb-4  text-red-500">
          Registrar un turno nuevo
        </h1>
        <div className="mt-2">
          <p className="font-semibold">Nombre</p>
          <input
            className="border-2 rounded-lg p-1 w-full focus:outline-none focus:border-red-300"
            placeholder="Nombre de la clienta"
          />
        </div>
        <div className="mt-2">
          <p className="font-semibold">Apellido</p>
          <input
            className="border-2 rounded-lg p-1 w-full focus:outline-none focus:border-red-300"
            placeholder="Apellido de la clienta"
          />
        </div>
        <div className="mt-2">
          <p className="font-semibold">Teléfono</p>
          <input
            className="border-2 rounded-lg p-1 w-full focus:outline-none focus:border-red-300"
            placeholder="Teléfono de la clienta"
          />
        </div>
        <div className="mt-2">
          <p className="font-semibold">Dirección</p>
          <input
            className="border-2 rounded-lg p-1 w-full focus:outline-none focus:border-red-300"
            placeholder="Dirección de la clienta"
          />
        </div>

        <div className="mt-4">
          <h2 className="font-semibold">Servicios a realizarse</h2>
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
          <p className="font-semibold">Información Adicional</p>
          <textarea
            className="border-2 p-2 w-full rounded-lg focus:outline-none focus:border-red-300"
            rows={2}
            placeholder="Detalles adicionales - Aclaraciones"
          ></textarea>
        </div>
      </div>
    </div>
  );
}

export default AltaTurno;
