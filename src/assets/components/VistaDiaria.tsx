import CardTurno from "./CardTurno";
function VistaDiaria() {
  return (
    <div className="color">
      <div className="fondo">
        <div className="min-h-screen p-4">
          <div className="mx-auto max-w-md rounded-lg bg-white p-5 shadow">
            <h1 className="mb-5 text-center text-lg text-rose-500">
              Agenda del viernes, 28 de Marzo
            </h1>
          <CardTurno/>
          </div>

        </div>
      </div>
    </div>
  );
}

export default VistaDiaria;
