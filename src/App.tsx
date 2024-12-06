import { Routes, Route } from "react-router-dom";
import './App.css';
import Inicio from "./components/Inicio";
import Feminino from "./components/navItens/feminino/Feminino";
import Masculino from "./components/navItens/masculino/Masculino";
import Infantil from "./components/navItens/infantil/Infantil";
import Jeans from "./components/navItens/jeans/Jeans";
import Lingerie from "./components/navItens/Lingerie/Lingerie";
import PlusSize from "./components/navItens/plusSize/PlusSize";
import Ofertas from "./components/navItens/ofertas/Ofertas";
import ProductCard from "./components/ProductCard";
import Login from "./components/login/login";


function App() {
    return (
        <Routes>
                <Route path="/" element={<Inicio/>} />
                <Route path="/Feminino" element={<Feminino/>} />
                <Route path="/Masculino" element={<Masculino/>} />
                <Route path="/Infantil" element={<Infantil/>} />
                <Route path="/Jeans" element={<Jeans/>} />
                <Route path="/Lingerie" element={<Lingerie/>} />
                <Route path="/PlusSize" element={<PlusSize/>} />
                <Route path="/Ofertas" element={<Ofertas/>} />
                <Route path="/product/:id" element={<ProductCard />} /> {/* Rota para ProductCard com ID dinâmico */}
                <Route path="/Login" element={<Login/>} />
        </Routes>
    );
}

export default App;
