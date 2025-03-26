import "./App.css";
import AgendaDiaria from "./assets/components/AgendaDiaria";
import AltaTurno from "./assets/components/AltaTurno";
import Calendario from "./assets/components/Calendario";
import ListaTurnos from "./assets/components/ListaTurnos";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import { MdOutlineAddchart } from "react-icons/md";

function App() {
  return (
    <BrowserRouter>
      <div className="container mx-auto p-4">
        <nav className="flex items-center justify-between mb-6">
          <Link
            to="/nuevo-turno"
            className="bg-red-500 text-black px-4 py-2 rounded-lg hover:bg-red-600 flex items-center gap-2"
          >
            <MdOutlineAddchart className="text-xl" />
            CARGAR UN NUEVO TURNO
          </Link>
        </nav>

        <Calendario />

        <main className="mt-6">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <AgendaDiaria />
                  <ListaTurnos />
                </>
              }
            />
            <Route path="/nuevo-turno" element={<AltaTurno />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;