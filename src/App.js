import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PatientAdd from "./coomponents/PatientAdd";
import PatientSearch from "./coomponents/PatientSearch";
import PatientDelete from "./coomponents/PatientDelete";
import PatientView from "./coomponents/PatientView";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<PatientAdd />}></Route>
        <Route path="search" element={<PatientSearch />}></Route>
        <Route path="delete" element={<PatientDelete />}></Route>
        <Route path="view" element={<PatientView />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
