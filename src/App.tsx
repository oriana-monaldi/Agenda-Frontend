import "./App.css";
import AltaTurno from "./assets/components/AltaTurno";
import Calendario from "./assets/components/Calendario";
import ListaTurnos from "./assets/components/ListaTurnos";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./assets/components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <div className="container mx-auto p-4">

        <Calendario />

        <main className="mt-6">
          <Navbar />  
          <Routes>

            <Route
              path="/"
              element={
                <>
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