import { IoAddCircleOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import Calendario from "./Calendario";
function ListaTurnos() {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <Link
          to="/nuevo-turno"
          className=" text-black px-4 py-2 rounded-lg flex items-center gap-2"
        >
          <IoAddCircleOutline className="text-xl" color="red" />
          CARGAR UN NUEVO TURNO
        </Link>
      </div>
      <Calendario />
    </div>
  );
}

export default ListaTurnos;
