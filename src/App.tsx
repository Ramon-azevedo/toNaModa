
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css'
import Inicio from './components/Inicio'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Inicio />} />
      </Routes>
    </Router>
  )
}

export default App;
