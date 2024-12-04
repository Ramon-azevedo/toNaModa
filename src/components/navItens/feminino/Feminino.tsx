import "../navItens.css"
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface Feminino01 {
    id: number;
    imagem: string;
    nome: string;
    preco: string;
    vezesCartao: string;
}

function Feminino() {

    const [feminino, setFeminino] = useState<Feminino01[]>([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        axios
            .get("http://localhost:8080/feminino/getFeminino")
            .then((response) => {
                setFeminino(response.data);
            })
            .catch((err) => {
                setError("Erro ao carregar a moda feminina.");
                console.error(err);
            })
    },[]);


    return (
        <div>
            <nav>
                {/* Código do nav aqui */}
            </nav>


            <section className="section1">
                <div>
                    <h2>Feminino</h2>
                    <div className="subItens">
                        {error ? (
                            <p>{error}</p>
                        ) : (
                            feminino.map((fem) => (
                                <ul key={fem.id} className="itens">
                                    <li>
                                        {/* Aqui passamos o ID como parâmetro na URL */}
                                        <Link to={`/product/${fem.id}`}>
                                            <img src={fem.imagem} alt={fem.nome} className="img" />
                                        </Link>
                                    </li>
                                    <li>{fem.nome}</li>
                                    <li>{fem.preco}</li>
                                    <li>{fem.vezesCartao}</li>
                                </ul>
                            ))
                        )}
                    </div>
                </div>
            </section>
            {/* Código do footer aqui */}
        </div>
    )
}


export default Feminino;
