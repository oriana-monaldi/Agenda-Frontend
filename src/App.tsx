import "./App.css";
import AgendaDiaria from "./assets/components/AgendaDiaria";
import AltaTurno from "./assets/components/AltaTurno";
import Calendario from "./assets/components/Calendario";
import ListaTurnos from "./assets/components/ListaTurnos";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Calendario />
        <div className="">
          <h2>Calendario</h2>
        </div>
        <div className="">
          <Link
            to="/nuevo-turno"
            className="bg-red-500 text-black px-4 py-2 rounded-lg hover:bg-red-600"
          >
            CARGAR UN NUEVO TURNO
          </Link>
          
          <Routes>
            <Route path="/" element={
              <>
                <AgendaDiaria />
                <ListaTurnos />
              </>
            } />
            <Route path="/nuevo-turno" element={<AltaTurno />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;