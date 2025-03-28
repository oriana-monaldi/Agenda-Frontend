import Button from "./Button";
function AltaTurno() {
  return (
    <div className="fondo">
      <div className="min-h-screen p-4">
        <div className="mx-auto max-w-md rounded-lg bg-white p-5 shadow">
          <h1 className="mb-5 text-center text-lg text-rose-500">
            REGISTAR UN NUEVO TURNO
          </h1>

          <div className="space-y-4">
            <div>
              <p className="mb-1 text-lgfont-medium text-gray-700">Fecha</p>
              <input
                type="date"
                className="w-full rounded-md border-2 border-gray-300 p-2.5 text-sm shadow-sm focus:border-rose-400 focus:outline-none"
              />
            </div>

            <div>
              <p className="mb-1 text-lgfont-medium text-gray-700">Hora</p>
              <input
                type="time"
                className="w-full rounded-md border-2 border-gray-300 p-2.5 text-sm shadow-sm focus:border-rose-400 focus:outline-none"
              />
            </div>

            <div>
              <p className="mb-1 text-lgfont-medium text-gray-700">Nombre</p>
              <input
                className="w-full rounded-md border-2 border-gray-300 p-2.5 text-sm shadow-sm focus:border-rose-400 focus:outline-none"
                placeholder="Nombre de la clienta"
              />
            </div>

            <div>
              <p className="mb-1 text-lgfont-medium text-gray-700">Apellido</p>
              <input
                className="w-full rounded-md border-2 border-gray-300 p-2.5 text-sm shadow-sm focus:border-rose-400 focus:outline-none"
                placeholder="Apellido de la clienta"
              />
            </div>

            <div>
              <p className="mb-1 text-lgfont-medium text-gray-700">Telefono</p>
              <input
                className="w-full rounded-md border-2 border-gray-300 p-2.5 text-sm shadow-sm focus:border-rose-400 focus:outline-none"
                placeholder="Teléfono de la clienta"
              />
            </div>

            <div>
              <p className="mb-1 text-lgfont-medium text-gray-700">Dirección</p>
              <input
                className="w-full rounded-md border-2 border-gray-300 p-2.5 text-sm shadow-sm focus:border-rose-400 focus:outline-none"
                placeholder="Dirección de la clienta"
              />
            </div>

            <div className="rounded-md bg-white">
              <p className="mb-1 text-lgfont-medium text-gray-700 mb-2">
                Tipo de servicio
              </p>

              <div className="space-y-2">
                <label className="flex items-center text-sm text-gray-700">
                  <input
                    type="radio"
                    name="servicio"
                    className="mr-2 h-4 w-4 accent-rose-500 ring-0"
                  />{" "}
                  A domicilio
                </label>
                <label className="flex items-center text-sm text-gray-700">
                  <input
                    type="radio"
                    name="servicio"
                    className="mr-2 h-4 w-4 accent-rose-500 ring-0"
                  />{" "}
                  En el salón
                </label>
              </div>
            </div>

            <div className="rounded-md bg-white">
              <p className="mb-1 text-lgfont-medium text-gray-700 mb-2">
                Servicios a realizarse
              </p>

              <div className="grid grid-cols-2 gap-y-2">
                <label className="flex items-center text-sm text-gray-700">
                  <input
                    type="checkbox"
                    className="mr-2 h-4 w-4 accent-rose-500 ring-1 ring-gray-300"
                  />{" "}
                  Corte
                </label>
                <label className="flex items-center text-sm text-gray-700">
                  <input
                    type="checkbox"
                    className="mr-2 h-4 w-4 accent-rose-500 ring-1 ring-gray-300"
                  />{" "}
                  Tintura
                </label>
                <label className="flex items-center text-sm text-gray-700">
                  <input
                    type="checkbox"
                    className="mr-2 h-4 w-4 accent-rose-500 ring-1 ring-gray-300"
                  />{" "}
                  Peinado
                </label>
                <label className="flex items-center text-sm text-gray-700">
                  <input
                    type="checkbox"
                    className="mr-2 h-4 w-4 accent-rose-500 ring-1 ring-gray-300"
                  />{" "}
                  Tratamiento
                </label>
                <label className="flex items-center text-sm text-gray-700">
                  <input
                    type="checkbox"
                    className="mr-2 h-4 w-4 accent-rose-500 ring-1 ring-gray-300"
                  />{" "}
                  Alisado
                </label>
              </div>
            </div>

            <div>
              <p className="mb-1 text-lgfont-medium text-gray-700">
                Información adicional
              </p>

              <textarea
                className="w-full rounded-md border-2 border-gray-300 p-2.5 text-sm shadow-sm focus:border-rose-400 focus:outline-none"
                rows={3}
                placeholder="Aclaraciones"
              ></textarea>
            </div>
            <Button />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AltaTurno;
