import { IoAddCircleOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import Calendario from "./Calendario";
import VistaDiaria from "./VistaDiaria";

function ListaTurnos() {
  return (
    <div>
      <div className="flex items-center justify-center mb-4">
        <Link
          to="/nuevo-turno"
          className="text-black px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-gray-100 transition-colors"
        >
          <IoAddCircleOutline className="text-xl" color="red" />
          NUEVO TURNO
        </Link>
      </div>
      <VistaDiaria/>
      <Calendario />

    </div>
  );
}

export default ListaTurnos;