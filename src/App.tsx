
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css'
import Inicio from './components/Inicio'
import Feminino from "./components/feminino/Feminino";

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Inicio />} />
        <Route path="/Feminino" element={<Feminino/>}/>
      </Routes>
    </Router>
  )
}

export default App;
